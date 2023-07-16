<template>
  <div class="container">
    <Error v-if="error" :error="error" />
    <h1 v-else>{{ data?.total_count }} JavaScript Repositories</h1>
    <div v-if="repos.length" class="items-list">
      <Card v-for="repo in repos" :key="repo.id" :item="repo" />
      <Loader v-if="loading" />
      <div v-else class="loading-btn" ref="loading_btn" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core';

const loading_btn = ref();

const per_page = ref(14);
const currrent_page = ref(1);

const loading = ref(false);
const is_error = ref(false);
const error_message = ref('');

const { getRepos } = useRepos();

const { data, error } = await useAsyncData('repos', () => getRepos(currrent_page, per_page));

const repos = computed(() => data.value?.items ?? []);

useIntersectionObserver(
  loading_btn,
  async ([{ isIntersecting }]) => {
    if (isIntersecting && !loading.value && !is_error.value) {
      try {
        loading.value = true;
        currrent_page.value++;
        const response = await getRepos(currrent_page, per_page);
        repos.value.push(...response.items);
      } catch (err: any) {
        if (err) {
          is_error.value = true;
          error_message.value = err.data.message;
          alert(error_message.value);
        }
      } finally {
        loading.value = false;
      }
    }
  }
);
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px 0px;
  text-align: center;

  .items-list {
    gap: 24px;
    width: 700px;
    margin: 24px auto;
    display: flex;
    flex-direction: column;

    .loading-btn {
      width: 100%;
      height: 20px;
      visibility: hidden;
    }
  }
}

@media screen and (max-width: 800px) {
  .container {
    padding: 20px;

    .items-list {
      width: 100%;
    }
  }
}
</style>

<template>
    <div class="error">
      <h1>{{ error }}</h1>
      <h1>Please, refresh page</h1>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    error: Error | null;
}>();
</script>

<style scoped lang="scss">
.error {
    text-align: center;
}
</style>
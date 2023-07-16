<template>
    <a :href="item.html_url" class="card" target="_blank">
        <div class="card-title">{{ item.name }}</div>
        <div class="card-star">
            {{ item.stargazers_count }}
            <img src="@/assets/icons/star.svg" />
        </div>
    </a>
</template>

<script setup lang="ts">
import type { Repository } from '../types/repos';

defineProps<{
    item: Repository;
}>();
</script>

<style scoped lang="scss">
.card {
    display: flex;
    padding: 20px;
    color: black;
    border-radius: 8px;
    align-items: center;
    text-decoration: none;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 5px 0px rgba(168, 167, 167, 0.35);

    .card-title {
        font-size: 22px;
        overflow: hidden;
        font-weight: bold;
        padding-right: 4px;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .card-star {
        gap: 4px;
        display: flex;
        font-weight: bold;
        align-items: center;
    }

    &:hover {
        transform: scale(1.01);
        box-shadow: 0px 0px 10px 0px rgba(168, 167, 167, 0.55);
    }
}
</style>
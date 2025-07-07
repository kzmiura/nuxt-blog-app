<template>
  <NuxtLink
    :to="{ path: '/blog', query: { tag } }"
    :class="['underline', 'text-gray-600', 'hover:text-gray-950']"
  >
    # {{ tag }}
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  tag: string
}>()
</script>

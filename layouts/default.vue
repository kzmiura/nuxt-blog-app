<template>
  <div :class="['flex', 'flex-col', 'min-h-screen']">
    <header :class="['flex', 'gap-8', 'items-center', 'min-h-16', 'px-4', 'lg:px-16']">
      <div>
        <NuxtLink
          to="/"
          :class="['lg:text-2xl', 'font-bold']"
        >
          Self-Executing Anonymous Function
        </NuxtLink>
      </div>
      <div>
        <NuxtLink
          to="/blog"
          :class="['font-semibold', 'hover:underline']"
        >
          Blog
        </NuxtLink>
      </div>
      <div>
        <NuxtLink
          to="https://github.com/kzmiura/nuxt-blog-app"
        >
          Repo
        </NuxtLink>
      </div>
    </header>
    <main :class="['flex-auto', 'container', 'mx-auto', 'p-4']">
      <slot />
    </main>
    <footer :class="['px-4', 'lg:px-16']">
      <small>
        &copy; kzmiura
      </small>
    </footer>
  </div>
</template>

<script lang="ts" setup>
useHead({
  bodyAttrs: {
    class: [
      'bg-gray-100',
    ],
  },
})
</script>

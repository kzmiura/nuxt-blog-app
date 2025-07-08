<template>
  <div :class="['lg:flex', 'gap-8']">
    <article :class="['bg-white', 'p-8', 'rounded', 'flex-4']">
      <header :class="['mb-4']">
        <div>
          Published: <NuxtTime
            :datetime="post!.publishedOn"
            :date-style="'medium'"
          />
        </div>
        <ul :class="['flex', 'flex-wrap', 'gap-2']">
          <li
            v-for="tag of post!.tags"
            :key="tag"
          >
            <TagLink :tag="tag" />
          </li>
        </ul>
      </header>
      <ContentRenderer
        :value="post!"
        :prose="false"
        :class="['prose', 'sm:prose-sm', 'lg:prose-lg', 'xl:prose-xl', '2xl:prose-2xl']"
      />
    </article>
    <nav :class="['flex-1']">
      <ul>
        <li
          v-for="link of post?.body.toc?.links"
          :key="link.id"
        >
          <NuxtLink :to="{ hash: `#${link.id}` }">
            {{ link.text }}
          </NuxtLink>
          <ul>
            <li
              v-for="child of link.children"
              :key="child.id"
              :class="['pl-4']"
            >
              <NuxtLink :to="{ hash: `#${child.id}` }">
                {{ child.text }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const { data: post } = await useAsyncData(
  route.path,
  () => queryCollection('posts').path(route.path).first(),
)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post Not Found',
    fatal: true,
  })
}

useSeoMeta({
  ...post.value.seo,
})
</script>

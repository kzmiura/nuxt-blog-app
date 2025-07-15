<template>
  <div :class="['flex', 'flex-col-reverse', 'lg:flex-row', 'gap-8']">
    <ContentRenderer
      :value="post!"
      :prose="false"
      :class="['bg-white', 'p-8', 'rounded', 'prose', 'prose-sm', 'md:prose-base']"
      tag="article"
    />
    <div :class="['*:mb-4']">
      <header>
        <div>details</div>
        <div>
          Published:
          <NuxtTime
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
      <nav :class="['sticky', 'h-min', 'top-4']">
        <div>TOC</div>
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
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const { data: post } = await useAsyncData(
  route.path,
  () => queryCollection('posts')
    .path(route.path)
    .where('draft', '=', false)
    .first(),
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

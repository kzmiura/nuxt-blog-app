<template>
  <div>
    <h1 :class="['text-4xl', 'font-extrabold', 'mb-8']">
      Blog
    </h1>
    <div :class="['lg:flex', 'gap-8']">
      <div :class="['flex-4']">
        <h2 :class="['text-3xl', 'font-bold', 'mb-4']">
          Posts
        </h2>
        <div
          v-if="posts?.length"
          :class="['grid', 'grid-cols-2', 'gap-4']"
        >
          <div
            v-for="post of posts"
            :key="post.id"
            :class="['bg-white', 'p-4', 'rounded']"
          >
            <div>
              <NuxtTime
                :datetime="post.publishedOn"
                :date-style="'medium'"
              />
            </div>
            <div :class="['mb-2']">
              <NuxtLink
                :to="post.path"
                :class="['text-xl', 'font-semibold']"
              >
                {{ post.title }}
              </NuxtLink>
            </div>
            <p :class="['truncate']">
              {{ post.description }}
            </p>
            <ul :class="['flex', 'flex-wrap', 'gap-2']">
              <li
                v-for="tag of post.tags"
                :key="tag"
              >
                <TagLink :tag="tag" />
              </li>
            </ul>
          </div>
        </div>
        <div v-else>
          <p>Posts not found</p>
        </div>
      </div>
      <div :class="['flex-1']">
        <h2 :class="['text-3xl', 'font-bold', 'mb-4']">
          Tags
        </h2>
        <ul>
          <li
            v-for="[tag, count] of tags"
            :key="tag"
            :class="['flex', 'justify-between']"
          >
            <TagLink :tag="tag" />
            <span :class="['tabular-nums']">{{ count.toString().padStart(3) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

const { data: posts } = await useAsyncData(
  () => `posts:${route.query.tag && typeof route.query.tag === 'object' ? route.query.tag.join(':') : route.query.tag ?? 'all'}`,
  () => {
    let builder = queryCollection('posts').where('draft', '=', false)
    if (route.query.tag && typeof route.query.tag === 'object') {
      for (const tag of route.query.tag) {
        builder = builder.where('tags', 'LIKE', `%"${tag}"%`)
      }
    }
    else if (typeof route.query.tag === 'string') {
      builder = builder.where('tags', 'LIKE', `%"${route.query.tag}"%`)
    }
    return builder.order('publishedOn', 'DESC').all()
  },
)

const { data: tags } = await useAsyncData(
  'tags',
  async () => {
    const posts = await queryCollection('posts')
      .where('draft', '=', false)
      .select('tags')
      .all()
    const tagMap: Map<string, number> = new Map()
    for (const tag of posts.flatMap(post => post.tags ?? [])) {
      tagMap.set(tag, (tagMap.get(tag) ?? 0) + 1)
    }
    return tagMap
  },
)

useSeoMeta({
  title: 'Blog',
})
</script>

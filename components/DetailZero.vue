<script lang="ts" setup>
import BaseList from "~/components/Base/List.vue";
import TagList from "~/components/Base/TagList.vue";
import TagListItem from "~/components/Base/TagListItem.vue";
import CardTitle from "~/components/Base/CardTitle.vue";
import CardSubtitle from "~/components/Base/CardSubtitle.vue";

/**
 * Data
 */
const works = ref([
  "Developed Cookiecutter template for frontend projects with Backstage and CI.",
  "Created TypeScript SSR Toolkit for Vue.js on AWS with CDK.",
  "Built Feature Flag Library using Split.io and TypeScript APIs.",
  "Migrated four Vue 2 apps to Vue 3, integrating Storybook, mentoring juniors."
]);
const technologies = ref(["Vue 3", "SCSS", "Typescript", "Vite", "Vitest", "GitHub Actions", "Split.io"]);
</script>

<template>
  <CardTwoThree>
    <template #topLeft>
      <BaseList>
        <BaseListItem v-for="(work, i) in works" :key="i">
          {{ work }}
        </BaseListItem>
      </BaseList>
    </template>
    <template #topRight>
      <div class="flex h-full justify-end pl-8">
        <BaseInfiniteHorizontalScroll inner-class="h-full">
          <img
            src="/images/detail-zero/1.png"
            alt="dashboard"
            class="rounded-2xl"
          />
          <img
            src="/images/detail-zero/2.png"
            alt="recent-months-filter"
            class="rounded-2xl"
          />
          <img
            src="/images/detail-zero/3.png"
            alt="recent-months"
            class="rounded-2xl"
          />
          <img
              src="/images/detail-zero/4.png"
              alt="recent-months"
              class="rounded-2xl"
          />
          <img
              src="/images/detail-zero/5.png"
              alt="recent-months"
              class="rounded-2xl"
          />
        </BaseInfiniteHorizontalScroll>
      </div>
    </template>
    <template #bottomLeft>
      <div class="flex flex-wrap gap-4">
        <CardTitle> SMG Swiss Marketplace Group</CardTitle>
        <TagList>
          <TagListItem v-for="(technology, i) in technologies" :key="i">
            {{ technology }}
          </TagListItem>
        </TagList>
        <CardSubtitle>
          I built frontend solutions like a Cookiecutter template, SSR Toolkit, and Feature Flag Library, and migrated Vue 2 apps to Vue 3. Represented the company at Vue.js Amsterdam 2025, collaborated in Switzerland and Austria, and mentored juniors.
        </CardSubtitle>
      </div>
    </template>
  </CardTwoThree>
</template>

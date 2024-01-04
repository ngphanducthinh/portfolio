<script lang="ts" setup>
import { useAnimation } from "#imports";
import BaseList from "~/components/Base/List.vue";
import TagListItem from "~/components/Base/TagListItem.vue";
import TagList from "~/components/Base/TagList.vue";
import CardTitle from "~/components/Base/CardTitle.vue";
import CardSubtitle from "~/components/Base/CardSubtitle.vue";

/**
 * Data
 */
const works = ref([
  `Set up the tree-shakable library.`,
  `Develop essential UI components.`,
  `Set up StoryBook to showcase components interactively.`,
  `Develop flexible FormValidator composable.`,
  `Implement EventBus based on Publish/Subscribe pattern.`,
]);
const technologies = ref([
  "Vue 3",
  "Tailwind CSS",
  "Typescript",
  "Vite",
  "Vitest",
  "Storybook",
]);
const screenShotSectionRef = ref<HTMLElement | null>(null);
const projectInfoRef = ref<HTMLElement | null>(null);
useAnimation([screenShotSectionRef, projectInfoRef]);
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
      <div class="flex h-full justify-end pl-8" ref="screenShotSectionRef">
        <BaseInfiniteHorizontalScroll inner-class="h-full">
          <img
            src="/images/detail-three/design-system.png"
            alt="design-system"
            class="rounded-2xl"
          />
          <img
            src="/images/detail-three/design-system-2.png"
            alt="design-system"
            class="rounded-2xl"
          />
          <img
            src="/images/detail-three/design-system-3.png"
            alt="design-system"
            class="rounded-2xl"
          />
          <img
            src="/images/detail-three/design-system-4.png"
            alt="design-system"
            class="rounded-2xl"
          />
        </BaseInfiniteHorizontalScroll>
      </div>
    </template>
    <template #bottomLeft>
      <div class="flex flex-wrap gap-4" ref="projectInfoRef">
        <CardTitle>Diag - Design System</CardTitle>
        <TagList>
          <TagListItem v-for="(technology, i) in technologies" :key="i">
            {{ technology }}
          </TagListItem>
        </TagList>
        <CardSubtitle>
          A comprehensive library of reusable UI components and associated
          guidelines, ensuring consistent and efficient development practices.
        </CardSubtitle>
      </div>
    </template>
  </CardTwoThree>
</template>

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
  `Develop a "RangeGroup" component that displays multiple test result ranges, such as 0-10 (Low), 10-20 (Normal), and 20-∞ (High).`,
  `Develop chart to illustrate multiple test result values over time using Chart.js.`,
]);
const technologies = ref([
  "Vue 3",
  "Tailwind CSS",
  "Typescript",
  "Vite",
  "Vitest",
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
            src="/images/detail-two/diag-test-result-viewer.png"
            alt="diag-test-result-viewer"
            class="rounded-2xl"
          />
          <img
            src="/images/detail-two/diag-test-result-viewer-2.png"
            alt="diag-test-result-viewer-2"
            class="rounded-2xl"
          />
          <img
            src="/images/detail-two/diag-test-result-viewer-3.png"
            alt="diag-test-result-viewer-3"
            class="rounded-2xl"
          />
          <img
            src="/images/detail-two/diag-test-result-viewer-4.png"
            alt="diag-test-result-viewer-4"
            class="rounded-2xl"
          />
        </BaseInfiniteHorizontalScroll>
      </div>
    </template>
    <template #bottomLeft>
      <div class="flex flex-wrap gap-4" ref="projectInfoRef">
        <CardTitle>Diag - Test Result Viewer</CardTitle>
        <TagList>
          <TagListItem v-for="(technology, i) in technologies" :key="i">
            {{ technology }}
          </TagListItem>
        </TagList>
        <CardSubtitle>
          A complete shared "TestResultViewer" component, which is used across
          multiple teams, indicates detailed & friendly UI for users can read &
          understand their test results easily.
        </CardSubtitle>
      </div>
    </template>
  </CardTwoThree>
</template>

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
  `Develop screens for processing checkups with workflow.`,
  `Implement templates for PDF printing using HTML + CSS.`,
]);
const technologies = ref([
  "Vue 2",
  "Bootstrap",
  "Javascript",
  "Webpack",
  "Jest",
  "Cypress",
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
      <div class="flex h-full justify-end gap-4" ref="screenShotSectionRef">
        <img
          src="/images/detail-one/dashboard.png"
          alt="expense-management-dashboard"
          class="h-full rounded-2xl"
        />
        <img
          src="/images/detail-one/recent-months-filter.png"
          alt="expense-management-dashboard"
          class="mt-4 h-full rounded-2xl"
        />
        <img
          src="/images/detail-one/recent-months.png"
          alt="expense-management-recent-months"
          class="h-full rounded-2xl"
        />
      </div>
    </template>
    <template #bottomLeft>
      <div class="flex flex-wrap gap-4" ref="projectInfoRef">
        <CardTitle>Diag - Sapoche</CardTitle>
        <TagList>
          <TagListItem v-for="(technology, i) in technologies" :key="i">
            {{ technology }}
          </TagListItem>
        </TagList>
        <CardSubtitle>
          A system for Diag staff to perform customers' health checkups.
        </CardSubtitle>
      </div>
    </template>
    <template #bottomRight></template>
  </CardTwoThree>
</template>

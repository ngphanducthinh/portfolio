<script lang="ts" setup>
import { useAnimation } from "#imports";
import BaseList from "~/components/Base/List.vue";
import TagList from "~/components/Base/TagList.vue";
import TagListItem from "~/components/Base/TagListItem.vue";
import CardTitle from "~/components/Base/CardTitle.vue";
import CardSubtitle from "~/components/Base/CardSubtitle.vue";

/**
 * Data
 */
const works = ref([
  "Improve web performance using asynchronous components and image lazy-loading, based on Lighthouse reports.",
  "Implement Pie Chart & Bar Chart to indicate user expenses.",
]);
const technologies = ref(["Nuxt 3", "SCSS", "Javascript", "Playwright"]);
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
          alt="dashboard"
          class="h-full rounded-2xl"
        />
        <img
          src="/images/detail-one/recent-months-filter.png"
          alt="recent-months-filter"
          class="mt-4 h-full rounded-2xl"
        />
        <img
          src="/images/detail-one/recent-months.png"
          alt="recent-months"
          class="h-full rounded-2xl"
        />
      </div>
    </template>
    <template #bottomLeft>
      <div class="flex flex-wrap gap-4" ref="projectInfoRef">
        <CardTitle> Rakuten - Expense Management</CardTitle>
        <TagList>
          <TagListItem v-for="(technology, i) in technologies" :key="i">
            {{ technology }}
          </TagListItem>
        </TagList>
        <CardSubtitle>
          Enable bank customers to track and manage their expenses. It allows
          customers to categorize their expenses, set budgets, and monitor their
          spending habits.
        </CardSubtitle>
      </div>
    </template>
  </CardTwoThree>
</template>

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
  "Improve web performance using asynchronous components and image lazy-loading, based on Lighthouse reports.",
]);
const technologies = ref(["Nuxt 3", "SCSS", "Javascript", "Playwright"]);
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
            src="/images/detail-one/dashboard.png"
            alt="dashboard"
            class="rounded-2xl"
          />
          <img
            src="/images/detail-one/recent-months-filter.png"
            alt="recent-months-filter"
            class="rounded-2xl"
          />
          <img
            src="/images/detail-one/recent-months.png"
            alt="recent-months"
            class="rounded-2xl"
          />
        </BaseInfiniteHorizontalScroll>
      </div>
    </template>
    <template #bottomLeft>
      <div class="flex flex-wrap gap-4">
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

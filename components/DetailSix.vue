<script lang="ts" setup>
import { useAnimation } from "#imports";
import BaseList from "~/components/Base/List.vue";
import TagListItem from "~/components/Base/TagListItem.vue";
import TagList from "~/components/Base/TagList.vue";
import CardSubtitle from "~/components/Base/CardSubtitle.vue";
import CardTitle from "~/components/Base/CardTitle.vue";

/**
 * Data
 */
const works = ref([
  `Gained valuable experience working at Precio Fishbone Sweden (Stockholm & Malmo) and Precio Fishbone Denmark (Copenhagen) for a two-month duration.`,
  `Led the project initiation and collaborated within a 4-member team to develop a robust "Human Resources Management" system.`,
  `Contributed as a key member of a 5-person team in the development of a "Knowledge Management System"`,
]);
const technologies = ref([
  "Vue 2",
  "Vuetify",
  "Typescript",
  "C#",
  "SharePoint",
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
        <CardTitle>Precio Fishbone</CardTitle>
        <TagList>
          <TagListItem v-for="(technology, i) in technologies" :key="i">
            {{ technology }}
          </TagListItem>
        </TagList>
        <CardSubtitle>
          The company’s main product is an exemplary and innovative solution
          recognized for enhancing enterprise efficiency. It was honored as a
          top choice for SharePoint Intranet in Europe by
          <a href="https://clearbox.com/" class="underline" target="_blank"
            >ClearBox</a
          >
          in 2021.
        </CardSubtitle>
      </div>
    </template>
    <template #bottomRight></template>
  </CardTwoThree>
</template>

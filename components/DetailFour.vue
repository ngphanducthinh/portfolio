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
  `Apply micro-frontend architect for these portal web apps.`,
  `Develop multiple-step forms for home-kit registration.`,
]);
const technologies = ref([
  "Vue 3",
  "Tailwind CSS",
  "Typescript",
  "Webpack",
  "Jest",
  "Micro Frontends",
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
          src="/images/detail-four/portal.png"
          alt="portal"
          class="h-full rounded-2xl"
        />
        <img
          src="/images/detail-four/portal-2.png"
          alt="portal"
          class="mt-4 h-full rounded-2xl"
        />
        <img
          src="/images/detail-four/portal-3.png"
          alt="portal"
          class="h-full rounded-2xl"
        />
      </div>
    </template>
    <template #bottomLeft>
      <div class="flex flex-wrap gap-4" ref="projectInfoRef">
        <CardTitle>Diag - Portals</CardTitle>
        <TagList>
          <TagListItem v-for="(technology, i) in technologies" :key="i">
            {{ technology }}
          </TagListItem>
        </TagList>
        <CardSubtitle>
          User-friendly systems for Diag's customers to view their complex test
          results (blood tests, urine tests, etc.) through an intuitive UI.
        </CardSubtitle>
      </div>
    </template>
    <template #bottomRight></template>
  </CardTwoThree>
</template>
<script lang="ts" setup>
/**
 * Methods
 */
const downloadResume = () => {
  console.log("Download resume!");
};
</script>

<template>
  <CardTwoOne>
    <template #topLeft>
      <IntroductionTechnologyList />
    </template>
    <template #topRight>
      <div class="flex flex-wrap items-center justify-end gap-4">
        <div class="animation-slide-down">
          <div class="flex items-center rounded-3xl bg-white px-4 py-1">
            <span class="text-gray-600">{{ "Check out my" }}</span>
            &nbsp;
            <span class="font-semibold">{{ "Résumé" }}</span>
          </div>
        </div>
        <div
          class="animation-slide-down flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-black hover:bg-black/80"
          @click="downloadResume"
        >
          <BaseIcon
            icon="arrow-down-to-line"
            :height="36"
            :width="36"
            color="white"
          />
        </div>
      </div>

      <div class="mt-3 flex flex-wrap items-center justify-end gap-4">
        <div class="animation-slide-down">
          <div class="flex items-center rounded-3xl bg-white px-4 py-1">
            <span class="text-gray-600">{{ "Certified" }}</span>
            &nbsp;
            <span class="font-semibold">{{ "Vue.js Developer" }}</span>
          </div>
        </div>

        <a
          href="https://certificates.dev/vuejs/certificates/9a23b63b-5b56-4f47-8c7e-3760903b1ed2"
          class="animation-slide-down"
        >
          <img
            src="https://certificates.dev/images/developer.svg"
            alt="Certified Vue.js Developer"
            class="h-16 w-16"
          />
        </a>
      </div>
    </template>
    <template #bottomLeft>
      <div class="flex h-full flex-wrap">
        <div class="animation-slide-down w-full">
          <h1 class="text-5xl font-semibold">
            {{ "Nguyen Phan Duc Thinh" }}
          </h1>
          <h3 class="mt-2 text-3xl text-gray-600">
            {{ "Senior Frontend Engineer" }}
          </h3>
        </div>
        <div class="flex w-full items-end gap-2">
          <div
            class="animation-chevron h-[140px] w-[140px] rounded-full bg-[url('https://i.pinimg.com/736x/28/bc/24/28bc24a099da115672d1d77d7395f545.jpg')] bg-cover bg-center bg-no-repeat"
          />
          <a
            href="#"
            class="animation-chevron flex h-12 w-12 items-center justify-center rounded-full bg-gray-200"
          >
            <BaseIcon icon="linkedin-in" />
          </a>

          <a
            href="#"
            class="animation-chevron flex h-12 w-12 items-center justify-center rounded-full bg-gray-200"
          >
            <BaseIcon icon="github" />
          </a>
        </div>
      </div>
    </template>
    <template #bottomRight>
      <div class="flex h-full flex-col flex-wrap justify-between">
        <div class="animation-slide-down text-2xl text-gray-800">
          {{
            "Possess a professional background of 7 years as a Software Developer, with a primary emphasis on Frontend development for 6 years."
          }}
        </div>
        <div class="flex justify-end">
          <BaseIcon
            icon="hand-point-down"
            :width="36"
            :height="36"
            color="rgb(107 114 128)"
            class="animate-bounce"
          />
        </div>
      </div>
    </template>
  </CardTwoOne>
</template>

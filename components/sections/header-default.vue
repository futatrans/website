<template>
  <div>
    <section class="bg-white px-3 sm:px-8 mt-2">
      <div
        class=" mx-auto z-50 relative overflow-hidden bg-[#0A3A3C] py-20 mt-0 w-full  rounded-[50px] px-8"
        style="max-width: 1820px !important"
      >
        <div class="text-center z-50 relative">
          <nav
            aria-label="Fil d'ariane"
            class="mb-6 flex items-center justify-center text-sm text-gray-200"
          >
            <NuxtLink to="/"
              ><span class="text-gray-200"> Accueil </span></NuxtLink
            >
            <span class="mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span>{{ title_min }}</span>
          </nav>
          <h1
            class="text-4xl sm:text-5xl text-white font-bold leading-[1.3]"
            style="text-transform: none !important"
          >
            {{ title }}
          </h1>
          <p class="text-gray-300 mt-4">
            {{ description }}
          </p>
        </div>

        <div class="absolute top-0 right-0 z-10">
          <div class="-ml-24 sm:mt-0">
            <div class="thumbShape1">
              <img
                src="/vendors/images/shape/introThumbShape1_1.png"
                alt="thumbShape"
              />
            </div>
            <div class="thumbShape2">
              <img
                src="/vendors/images/shape/introThumbShape1_2.png"
                alt="thumbShape"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  title_min: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>

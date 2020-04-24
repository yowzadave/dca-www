<template>
  <div class="content text-left m-auto mt-4">
    <div
      v-if="images.length > 0"
      class="image-container flex w-full space-x-4"
    >
      <template v-for="(image, index) in images">
        <div
          v-if="isVideo(image.src)"
          :key="index"
          class="bg-grey-light w-full h-full"
        >
          <video loop autoplay muted class="object-cover h-full w-full">
            <source :src="image.src" type="video/mp4">
          </video>
        </div>
        <div
          v-else
          :key="index"
          class="bg-grey-light w-full h-full bg-cover bg-no-repeat bg-center"
          :style="{ 'background-image': `url('${image.src}')` }"
        >
          &nbsp;
        </div>
      </template>
    </div>
    <div
      class="flex flex-col sm:flex-row px-4 lg:px-0 pb-6 mb-8 border-b border-grey sm:space-x-4"
      :class="images.length > 0 && 'border-t my-8 py-6'"
    >
      <div class="mb-4 sm:w-64 flex-none">
        <h4>Project</h4>
        <h3>{{ title }}</h3>
        <slot name="info" />
      </div>
      <div>
        <h4>Description</h4>
        <div class="text-sm sm:text-base">
          <slot name="description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectEntry',
  props: {
    title: { type: String, default: '' },
    images: { type: Array, default: () => [] },
  },
  methods: {
    isVideo(path) {
      return path.match(/\.mp4$/);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;

  @media (min-width: 1024px) {
    width: 52rem;
  }
}

.image-container {
  height: 50vw;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 1024px) {
    height: 26rem;
    padding-left: 0;
    padding-right: 0;
  }
}

a, a:link {
  @apply border-b-8;
  border-color: theme('colors.coral');
}

</style>

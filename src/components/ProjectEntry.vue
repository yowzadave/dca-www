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
        />
      </template>
    </div>
    <div
      class="flex pb-6 mb-8 border-b border-grey space-x-4"
      :class="images.length > 0 && 'border-t my-8 py-6'"
    >
      <div class="w-64 flex-none">
        <h4>Project</h4>
        <h3>{{ title }}</h3>
        <slot name="info" />
      </div>
      <div>
        <h4>Description</h4>
        <slot name="description" />
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
  width: 52rem;
}

.image-container {
  height: 26rem;
}

a, a:link {
  @apply border-b-8;
  border-color: theme('colors.coral');
}

</style>

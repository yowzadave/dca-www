<template>
  <div class="content text-left m-auto mt-4">
    <div class="flex flex-col sm:flex-row px-4 sm:px-0 sm:space-x-4">
      <div class="sm:w-64 flex-none">
        <h3>{{ title }}</h3>
      </div>
      <div class="text-sm sm:text-base">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CvEntry',
  props: {
    title: { type: String, default: '' },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;

  @media (min-width: 1024px) {
    width: 52rem;
  }

  &:last-of-type {
    @apply border-b border-grey-light pb-4 mb-8;
  }
}

a, a:link {
  @apply border-b-8;
  border-color: theme('colors.coral');
}

</style>

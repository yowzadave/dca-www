<template>
  <div class="title-container">
    <div ref="title" class="title" @click="animate">
      <div
        v-for="(letter, index) in letterArray"
        :key="index"
        :ref="index"
        :style="z"
        class="letter"
      >
        {{ letter }}
      </div>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate';


export default {
  name: 'DaveTitle',
  data() {
    return {
      name: 'David Anderson',
    };
  },
  computed: {
    letterArray() {
      return this.name.split('');
    },
  },
  methods: {
    animate() {
      // console.log('parent', this.$refs.title);
      Velocity(this.$refs.title, {
        rotateY: '45deg',
        // translateY: '30px',
        // translateX: '30px',
        // opacity: 0,
        // transform: 'translateX(100px)',
        // transform: ['scale(0.3)', 'scale(1)'],
        // transform: 'rotate3d(0,0,1,15deg)',
        // top: '100rem',
      }, {
        duration: 400,
      });
      // .velocity(
      //   { top: 0 },
      //   { duration: 200 },
      // );
    },
  },
};
</script>

<style lang="scss" scoped>
.title-container {
  position: relative;
  overflow: visible;
}

.title {
  position:absolute;
  left: 50%;
  width: 20rem;
  margin-left: -10rem;
  font-size: 4rem;
  display: flex;
  justify-content: center;
}

.letter {
  position: relative;
}
</style>

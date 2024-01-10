<template>
  <div id="header" class="bg-black text-cream w-full">
    <div id="nav" class="bg-black px-8 w-full flex items-center justify-between h-16 z-10">
      <!-- Full size nav elements -->
      <transition name="drop">
        <div v-if="showTopNav" class="hidden sm:block font-bold text-lg flex-none">
          <a
            data-scroll
            href="#header"
            class="relative mail-link"
          >
            David Anderson
          </a>
        </div>
      </transition>
      <transition name="drop">
        <div v-if="showTopNav" class="top-nav-links">
          <a
            v-for="link in links"
            :key="link.id"
            data-scroll
            :class="{ current: link.id === currentSection }"
            :href="`#${link.id}`"
          >
            {{ link.name }}
          </a>
        </div>
      </transition>

      <!-- Hamburger menu for small screen sizes -->
      <transition name="drop">
        <div v-if="showTopNav" class="sm:hidden">
          <svg
            class="block h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            @click="showMenu = !showMenu"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2" d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div
            v-if="showMenu"
            class="mobile-menu"
          >
            <div
              v-for="link in links"
              :key="link.id"
            >
              <a
                :key="link.id"
                data-scroll
                :class="{ current: link.id === currentSection }"
                :href="`#${link.id}`"
                @click="showMenu = false"
              >
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>
      </transition>

      <div v-if="!showTopNav" />
      <div class="flex-none">
        <a href="mailto:david@davidcanderson.net" class="mail-link">
          david@davidcanderson.net
        </a>
      </div>
    </div>
    <div class="py-16">
      <div id="title-content" class="relative z-30">
        <h1>David Anderson</h1>
        <div class="description">
          <slot />
        </div>
      </div>
      <div class="nav-links">
        <a
          v-for="link in links"
          :key="link.id"
          data-scroll
          :class="{ current: link.id === currentSection }"
          :href="`#${link.id}`"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate';
import SmoothScroll from 'smooth-scroll';


export default {
  name: 'TopNav',
  data() {
    return {
      latestKnownScrollY: 0,
      headerHeight: 0,
      currentSection: 'software',
      ticking: false,
      links: [
        { id: 'software', name: 'Software' },
        { id: 'architecture', name: 'Architecture' },
        { id: 'cv', name: 'CV' },
      ],
      sections: [],
      scroll: null,
      showMenu: false,
    };
  },
  computed: {
    showTopNav() {
      return this.latestKnownScrollY > this.headerHeight;
    },
  },
  mounted() {
    this.headerHeight = document.getElementById('header').offsetHeight - document.getElementById('nav').offsetHeight - 40;
    this.sections = document.querySelectorAll('section');

    this.scroll = new SmoothScroll('a[href*="#"]', { speed: 500 });
    window.addEventListener('scroll', this.handleScroll, false);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (!this.ticking) {
        requestAnimationFrame(this.update);
      }
      this.ticking = true;
    },
    update() {
      this.latestKnownScrollY = window.pageYOffset
        || window.scrollY
        || document.documentElement.scrollTop;

      this.setCurrentSection();
      this.setHeaderOpacity();

      this.ticking = false;
    },
    setHeaderOpacity() {
      const el = document.getElementById('title-content');
      const opacity = this.latestKnownScrollY > el.offsetHeight
        ? 0
        : (el.offsetHeight - this.latestKnownScrollY) / el.offsetHeight;
      Velocity(
        el,
        { opacity },
        { duration: 0.2 },
      );
    },
    setCurrentSection() {
      let current = null;

      for (let i = 0; i < this.sections.length; i += 1) {
        const section = this.sections[i];
        if (section.offsetTop > this.latestKnownScrollY) {
          if (!current) current = section;
          break;
        } else {
          current = section;
        }
      }

      if (current) this.currentSection = current.id;
    },
  },
};
</script>

<style scoped>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.mobile-menu {
  @apply bg-black;
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  z-index: 10;

}

a.mobile-menu {
  @apply inline-block w-auto border-b-8 text-grey-dark;
  border-color: transparent;
  transition: color .3s, border-color .3s;

}

mobile-menu a:hover, mobile-menu a.current {
  @apply text-cream border-coral;
  transition: color .3s, border-color .3s;
}

.description {
  @apply text-sm;
  margin: auto;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 640px) {
    font-size: 1rem;
    width: 36rem;
    padding: 0;
  }
}

.description a:link:hover {
  text-decoration: underline;
}

.nav-links {
  @apply m-auto mt-8 font-bold text-base flex justify-around;
  width: 100%;

  @media (min-width: 640px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
    width: 30rem;
  }
}

.nav-links a {
  display: block;
  @apply border-b-8 text-grey-dark;
  border-color: transparent;
  transition: color .3s, border-color .3s;

}

.nav-links a:hover, .nav-links a.current {
  @apply text-cream border-coral;
  transition: color .3s, border-color .3s;
}

.top-nav-links {
  @apply m-auto font-bold text-lg hidden;
  width: 30rem;

}

@media (min-width: 640px) {
  .top-nav-links {
    @apply flex justify-around;
  }
}


.top-nav-links a {
  @apply pt-2;
  display: block;
  @apply border-b-8 text-grey-dark;
  border-color: transparent;
  transition: color .3s, border-color .3s;
}

.top-nav-links a:hover, .top-nav-links a.current {
  @apply text-cream border-coral;
  transition: color .3s, border-color .3s;
}

.mail-link {
  @apply pt-2;
  display: block;
  @apply border-b-8;
  border-color: transparent;
  transition: border-color .3s;

}

.mail-link a:hover {
  @apply border-coral;
  transition: border-color .3s;
}

.drop-enter-active, .drop-leave-active {
  transition: opacity .3s ease, transform 0.3s ease;
}

.drop-enter, .drop-leave-to {
  opacity: 0;
  transform: translate(0, -2rem);
}

</style>

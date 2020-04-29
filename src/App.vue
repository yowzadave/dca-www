<template>
  <div id="app">
    <top-nav>
      A product designer and software engineer, with a background in architecture. Multidisciplinary
      by disposition and training, I'm currently the project lead for several key initiatives
      by the team at <a href="https://www.crh.io" target="_blank">CRH&nbsp;Technology&nbsp;Studio</a>.
    </top-nav>
    <div class="pt-8 z-0">
      <section id="software" ref="software">
        <h2>Software</h2>
        <project-entry
          title="Showroom"
          :images="[{ src: '/images/showroom.mp4' }]"
        >
          <template v-slot:info>
            <a href="https://showroom.holoform.crh.io" target="_blank">Link</a>
          </template>
          <template v-slot:description>
            <p>
              <em>Showroom</em> is a tool intended for designers and architects specifying
              interior partition building products. These products are a key component of
              workspace interiors, but visualizing and specifying these products has typically
              been laborious and error-prone. To help designers who are selecting this product,
              we built an interactive visualizer and configurator: it allows architects to
              explore various design options, and to get instant physically accurate visual
              feedback as to the impact of their choices. Upon configuration, the app provides
              a selection of key product details and a custom-generated product brochure.
            </p>

            <p>
              The project combines a Javascript front-end (written in Vue JS) and a backend
              that includes an automated render pipeline so that all product permutations can
              be quickly generated as the product offering changes. I was the lead project
              manager, designer, and developer for this project.
            </p>
          </template>
        </project-entry>
        <project-entry
          title="Host"
          :images="[{ src: '/images/host.mp4' }]"
        >
          <template v-slot:description>
            <p>
              <em>Host</em> is a highly interactive and graphical product configuration tool for
              engineers and specifiers. It allows specifiers to quickly design and select
              custom-engineered products that historically would have required specialized expertise
              and multiple desktop software packages. The primary challenge in replacing this ad-hoc
              workflow with purpose-built web applications is one of complexity: there are many
              different products, each with their own particular design, engineering, and delivery
              requirements. Our solution was to develop an application that brought the combined
              functionality into one "host" application, and then provided a number of "plugin"
              applications that separate the product-specific business logic from the central
              application core. A library of shared functional and UI components was developed
              to limit re-invention in each plugin as much as possible.
            </p>

            <p>
              This project combines many elements: an architecture that allows the host application
              to integrate with many varied product "plugins", a Vue JS front-end that implements
              CAD-like functionality, services to enable creation of CAD documents (Revit and IFC
              formats), integrations with a cloud-based modeling tool (Onshape) and an in-house FEM
              analysis tool. I was project manager for this effort, and was the principal designer
              and developer of the Vue JS front-end and the Node back-end.
            </p>
          </template>
        </project-entry>
        <project-entry
          title="Concrete"
          :images="[{ src: '/images/concrete.png' }]"
        >
          <template v-slot:info>
            <a href="https://concrete.crh.io" target="_blank">Link</a>
          </template>
          <template v-slot:description>
            <p>
              An effort to build an open-source component library consisting of many of the
              components that are in use internally as part of the <em>Host</em> project. I am
              the primary designer/developer and maintainer for this project.
            </p>
          </template>
        </project-entry>
      </section>
      <section id="architecture">
        <h2>Architecture</h2>
        <project-entry
          title="Four Seasons Jeddah"
          :images="[
            { src: '/images/fs_jeddah_1.png' },
            { src: '/images/fs_jeddah_2.png' }
          ]"
        >
          <template v-slot:description>
            <p>Skidmore, Owings, and Merrill</p>
            <p>
              On the waterfront of the Red Sea, this project responds to the desert climate with
              a heavy stone exterior that conceals a lush interior courtyard that cascades through
              the shared spaces. Currently under construction in Jeddah.
            </p>

            <p>
              I was the team leader for this project from Concept Design through Design Development,
              leading a team of 5 designers.
            </p>
          </template>
        </project-entry>
        <project-entry
          title="Manhattan West"
          :images="[
            { src: '/images/manhattanwest_01.jpg' },
            { src: '/images/manhattanwest_02.jpg' },
          ]"
        >
          <template v-slot:info>
            <a
              href="http://www.som.com/projects/manhattan_west_development"
              target="_blank"
            >
              Link
            </a>
          </template>
          <template v-slot:description>
            <p>Skidmore, Owings, and Merrill</p>
            <p>
              A notable new presense on a previously undeveloped plot of land on Manhattan's
              West Side; this project is built atop an existing rail yard, and provides
              225,000 square feet of retail and dining amenities, and two acres of public
              open space.
            </p>

            <p>
              I was a leader of the design team of Tower 2 of this project during the Concept Design
              and Schematic Design phases, as well as the central courtyard and retail spaces.
            </p>
          </template>
        </project-entry>
      </section>
      <section id="cv">
        <h2>CV</h2>
        <cv-entry title="Github">https://github.com/yowzadave</cv-entry>
        <cv-entry title="Experience">
          <h4>Senior Architect, CRH Technology Studio</h4>
          <p>New York, New York — October 2015 - Present</p>
          <p>
            CRH offers a very broad range of building products, from building enclosure
            systems to hardware to raw materials. I’m currently the lead product designer,
            software engineer, and project manager for a set of digital tools that serve
            estimators, engineers, and customers. Previously I have been involved in new
            physical product development, product strategy, and product/market research.
          </p>
          <h4>Senior Architectural Licensed Professional, SOM</h4>
          <p>New York, New York — October 2011 - 2015</p>
          <p>
            As part of Gary Haney’s design studio, I was involved in the design of a number
            of high-profile projects. I was the team leader of the Four Seasons Jeddah from
            Concept Design through Design Development, managing a team of 5 designers.
            I was also an integral team member of the Shenzhen Shum Yip project from the
            initial masterplan competition entry to the development of two high-rise mixed-use
            towers, a Ballroom Pavilion, and two signature bridges. I was a part of the design
            team for a number of concept designs and competition submissions, including the
            winning concept for a new luxury hotel in Qatar. I was a leader of the design team
            for the Manhattan West project currently under construction as part of the Hudson
            Yards development.
          </p>
          <h4>Intern Architect, REX Architecture</h4>
          <p>New York, New York — May 2011 - August 2011</p>
          <p>
            Part of the design team for the concept development of a video game headquarters
            in Santa Monica, I worked making conceptual models, developing CAD drawings,
            drafting digital models, and refining the project’s argument.
          </p>
        </cv-entry>
        <cv-entry title="Education">
          <h4>Columbia University — M. Arch</h4>
          <p>
            Studios with Joshua Prince-Ramus, Benjamin Aranda, Robert Marino, and Charles
            Eldred, as well as Columbia’s collaborative Bulding Intelligence Project under
            Scott Marble, Laura Kurgan, and David Benjamin. I worked as a TA for a variety
            of cours- es, exploring advanced Rhino techniques (including Grasshopper) and
            the Re- think- ing BIM class. I also worked as a TA for courses studying advanced
            rendering techniques in 3ds Max.
          </p>
          <h4>University of Utah — B.S., Physics</h4>
          <p>
            Presenter at the Undergraduate Research Symposium, and also had my work in
            nano-scale imaging techniques published in the Undergraduate Abstracts Journal.
            I graduated a member of Sigma Pi Sigma, the physics honor society.
          </p>
        </cv-entry>
      </section>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav';
import ProjectEntry from '@/components/ProjectEntry';
import CvEntry from '@/components/CvEntry';


export default {
  name: 'App',
  components: { TopNav, ProjectEntry, CvEntry },
};
</script>

<style lang="scss">
@import 'assets/styles/tailwind.postcss';

html {
  @apply text-black bg-cream;
}

section {
  margin-top: -6rem;
  padding-top: 6rem;
}

h1 {
  @apply text-4xl font-bold mt-16;

  @media (min-width: 640px) {
    @apply text-6xl;
  }
}

h2 {
  @apply text-3xl font-bold border-b border-grey-light inline-block w-auto mb-4 mt-4;

  @media (min-width: 640px) {
    @apply text-5xl;
  }
}

h4 {
  @apply text-sm font-bold;
}

h3 {
  @apply text-2xl font-light mb-2;
}

p {
  margin-bottom: 1rem;
}

#app {
  font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  text-align: center;
}

</style>

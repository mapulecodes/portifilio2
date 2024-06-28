<template>
  <div class="container">
    <section class="row" id="landing">
       <LandingSection/>
    </section>
    <section class="row" id="about">
      <AboutSection/>
    </section>
    <section class="row" id="education">
      <EducationSection/>
    </section>
      <section class="row" id="experiences">
      <ExperiencesSection/>
    </section>
    <section class="row" id="resume">
    
    </section>
    <section class="row" id="projects">
    </section>
    <section class="row" id="testimonials">
    </section>
    <section class="row" id="reachme">
    </section>
  </div>
</template>
<script>

import LandingSection from '@/components/LandingSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import EducationSection from '@/components/EducationSection.vue';
import ExperiencesSection from '@/components/ExperiencesSection.vue'
export default {
  name: 'HomeView',
  components: {
    LandingSection,
    AboutSection,
    EducationSection,
    ExperiencesSection
  }
}
</script>
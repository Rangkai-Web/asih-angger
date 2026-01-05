<template>
  <section id="maps" ref="sectionRef" class="bg-white fade-in-section" :class="{ 'is-visible': isVisible }">
    <div class="w-full mx-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5044.196766635735!2d106.8346462!3d-6.375744799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed92d7313595%3A0x55b137697c92a50a!2sAlightvisual%20Photography!5e1!3m2!1sid!2sid!4v1766744215531!5m2!1sid!2sid"
        width="100%"
        height="450"
        style="border:0;"
        :allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Google Maps - Alightvisual Photography Location"
      ></iframe>
    </div>
  </section>
</template>

<script setup lang="ts">
const { elementRef: sectionRef, isVisible } = useFadeIn()
</script>

<style scoped>

</style>
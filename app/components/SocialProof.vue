<template>
  <section ref="sectionRef" class="py-16 border-y border-gray-100 bg-white fade-in-section" :class="{ 'is-visible': isVisible }">
    <div class="max-w-7xl mx-auto px-6">
      <p class="text-center text-xs uppercase tracking-widest text-gray-400 mb-10">
        Dikenal oleh Brand Profesional
      </p>
      <div class="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
        <div 
          v-for="(brand, index) in brands" 
          :key="index"
          class="text-xl font-bold brand-item"
          :style="{ transitionDelay: isVisible ? `${index * 0.1}s` : '0s' }"
        >
          {{ brand }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { elementRef: sectionRef, isVisible } = useFadeIn()

const brands = ["BUTTONSCARVES", 'PETITE BAKERY', 'FARADIS ORGANIK', 'KAL`S KITCHEN', 'SALADROWIS']
</script>

<style scoped>
.fade-in-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.brand-item {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}

.fade-in-section.is-visible .brand-item {
  opacity: 0.4;
  transform: translateY(0);
}
</style>


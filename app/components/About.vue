<template>
  <section id="about" ref="sectionRef" class="py-24 bg-white fade-in-section" :class="{ 'is-visible': isVisible }">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="relative">
          <NuxtImg
            :src="AsihAngger"
            alt="Asih Angger - Professional photographer and retoucher specializing in product, portrait, beauty, baby, and event photography"
            width="1000"
            height="1000"
            loading="lazy"
            class="shadow-2xl rounded-lg"
          />
          <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-primary -z-10 rounded-lg"></div>
        </div>
        <div>
          <h2 class="text-4xl font-bold mb-6">
            Minimalism Meets <span class="text-primary italic">Emotion</span>.
          </h2>
          <p class="text-lg text-gray-600 mb-6 leading-relaxed">
            Asih Angger is a photographer and retoucher who specializes in product photography, portrait photography, beauty photography, baby photography, event photography, and commercial photography.
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full overflow-hidden">
              <NuxtImg
                src="https://images.unsplash.com/photo-1520549233664-03f65c1d1327?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Asih Angger - Professional photographer and retoucher"
                width="48"
                height="48"
                loading="lazy"
              />
            </div>
            <div>
              <p class="font-bold uppercase tracking-widest text-sm">Asih Angger</p>
              <p class="text-xs text-gray-400">Photographer & Retoucher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AsihAngger from '/img/asih.webp';

const { elementRef: sectionRef, isVisible } = useFadeIn()
</script>

<style scoped>
.fade-in-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>


<template>
  <section id="testimonials" ref="sectionRef" class="py-24 bg-white overflow-hidden fade-in-section" :class="{ 'is-visible': isVisible }">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 uppercase tracking-tighter">Client Experiences</h2>
      </div>
      
      <Carousel
        :items-to-show="1"
        :items-to-scroll="1"
        :wrap-around="true"
        :autoplay="5000"
        :transition="500"
        :breakpoints="breakpoints"
        class="testimonials-carousel"
      >
        <Slide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="p-8 border-l-8 border-primary bg-gray-50 italic text-gray-600 relative h-full mx-2">
            <Icon name="lucide:quote" class="w-12 h-12 absolute -top-6 text-primary opacity-20" />
            <p class="mb-6 leading-relaxed">"{{ testimonial.quote }}"</p>
            <div class="mt-6 not-italic">
              <p class="font-bold uppercase text-xs tracking-widest">{{ testimonial.name }}</p>
              <p class="text-[10px] text-gray-400">{{ testimonial.role }}</p>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'

const { elementRef: sectionRef, isVisible } = useFadeIn()

const testimonials = [
  {
    quote: 'The product shots for our luxury watch brand were beyond expectations. Pure architectural precision.',
    name: 'Jameson Ford',
    role: 'CEO, ORO LOGIC',
  },
  {
    quote: 'Capturing my baby\'s first month was a dream. Asih Angger handled the process with such gentleness.',
    name: 'Elena Rossi',
    role: 'Private Client',
  },
  {
    quote: 'Professionalism at its peak. The event coverage was seamless and the delivery was ahead of schedule.',
    name: 'Sarah K.',
    role: 'Event Lead, TechGlobal',
  },
  {
    quote: 'The beauty portrait session exceeded all my expectations. Every detail was perfect, from lighting to final retouching.',
    name: 'Maria Santos',
    role: 'Fashion Model',
  },
  {
    quote: 'Working with Asih Angger transformed our product catalog. The images elevated our brand perception significantly.',
    name: 'David Chen',
    role: 'Marketing Director, Luxe Brands',
  },
]

const breakpoints = {
  1024: {
    itemsToShow: 3,
    itemsToScroll: 1,
  },
}
</script>

<style scoped>
.testimonials-carousel {
  padding: 2rem 0;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: var(--primary);
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background-color: var(--dark);
  transform: scale(1.1);
}

:deep(.carousel__pagination) {
  margin-top: 2rem;
}

:deep(.carousel__pagination-button) {
  background-color: var(--primary);
  opacity: 0.3;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 4px;
  transition: all 0.3s;
}

:deep(.carousel__pagination-button--active) {
  opacity: 1;
  width: 30px;
  border-radius: 5px;
}

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
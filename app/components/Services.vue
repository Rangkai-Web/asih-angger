<template>
  <section id="services" ref="sectionRef" class="py-24 bg-gray-50 fade-in-section" :class="{ 'is-visible': isVisible }">
    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-16">
        <h2 class="text-3xl font-bold uppercase tracking-tighter mb-2">Our Expertise</h2>
        <div class="w-20 h-2 bg-primary" role="presentation" aria-hidden="true"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="group cursor-default bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition service-item"
          :style="{ transitionDelay: isVisible ? `${index * 0.1}s` : '0s' }"
        >
          <div class="mb-6 inline-block px-4 py-3 bg-primary rounded-full group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
            <Icon :name="service.icon" class="w-8! h-8! text-white" />
          </div>
          <h3 class="text-xl font-bold mb-3">{{ service.title }}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { elementRef: sectionRef, isVisible } = useFadeIn()

const services = [
  {
    icon: 'lucide:package',
    title: 'Product Photography',
    description: 'Clean, commercial-grade shots designed to make your brand stand out in a crowded market.',
  },
  {
    icon: 'lucide:sparkles',
    title: 'Beauty Portrait',
    description: 'High-fashion lighting and studio-quality portraits that capture personality and elegance.',
  },
  {
    icon: 'lucide:baby',
    title: 'Baby Documentary',
    description: 'Authentic, candid storytelling of your little ones\' first milestones and precious moments.',
  },
  {
    icon: 'lucide:calendar',
    title: 'Event Coverage',
    description: 'Dynamic documentation of corporate functions and private events with a cinematic touch.',
  },
  {
    icon: 'lucide:edit-2',
    title: 'Editing & Retouching',
    description: 'Professional editing and retouching of your photos to enhance the quality and beauty of your photos.',
  },
]
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

.service-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.fade-in-section.is-visible .service-item {
  opacity: 1;
  transform: translateY(0);
}
</style>

<template>
  <section id="process" ref="sectionRef" class="py-24 bg-white fade-in-section" :class="{ 'is-visible': isVisible }">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 uppercase tracking-tighter">How We Work</h2>
        <p class="text-gray-500">A streamlined journey from initial idea to final delivery.</p>
      </div>

      <div class="relative">
        <div class="hidden lg:block absolute top-24 left-20 right-20 h-0.5 bg-primary/30"></div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          <div 
            v-for="(step, index) in steps" 
            :key="index"
            class="process-step group relative"
            :style="{ '--delay': index * 0.1 + 's' }"
          >
            <div class="bg-white p-8 rounded-lg border-2 border-primary hover:border-primary hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center">
              <div class="relative flex items-center justify-center mb-6">
                <div class="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon :name="step.icon" class="w-8! h-8! text-white group-hover:text-white transition-colors duration-300" />
                </div>
                <span class="absolute -top-4 w-8 h-8 rounded-full bg-dark text-white flex items-center justify-center text-xs font-bold">
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
              </div>
              
              <h3 class="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {{ step.title }}
              </h3>
              <p class="text-sm text-gray-600 leading-relaxed">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { elementRef: sectionRef, isVisible } = useFadeIn()

const steps = [
  {
    icon: 'lucide:message-circle',
    title: 'Consultation',
    description: 'Discussing your vision, goals, and style preferences over coffee or call.',
  },
  {
    icon: 'lucide:calendar-check',
    title: 'Booking',
    description: 'Securing your date and refining the creative brief for the session.',
  },
  {
    icon: 'lucide:camera',
    title: 'Shooting',
    description: 'The creative execution using professional lighting and high-end gear.',
  },
  {
    icon: 'lucide:package',
    title: 'Delivery',
    description: 'Culling, professional retouching, and delivery of high-res digital files.',
  },
  {
    icon: 'lucide:check-circle',
    title: 'Revision',
    description: 'Ensuring every detail is perfect with a final round of subtle adjustments.',
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

.process-step {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: var(--delay);
}

.fade-in-section.is-visible .process-step {
  opacity: 1;
  transform: translateY(0);
}
</style>
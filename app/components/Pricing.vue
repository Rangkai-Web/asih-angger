<template>
  <section id="pricing" ref="sectionRef" class="py-24 bg-gray-50 fade-in-section" :class="{ 'is-visible': isVisible }">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 uppercase tracking-tighter">Packages</h2>
        <p class="text-gray-500">Transparent pricing for premium quality.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(plan, index) in plans" 
          :key="index"
          class="bg-white p-10 border border-gray-100 hover:border-primary transition group pricing-item"
          :class="{ 'border-2 border-primary relative transform scale-105 shadow-xl': plan.popular }"
          :style="{ transitionDelay: isVisible ? `${index * 0.15}s` : '0s' }"
        >
          <div v-if="plan.popular" class="absolute top-0 right-0 bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-tighter">Most Popular</div>
          <h3 class="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">{{ plan.title }}</h3>
          <div class="text-4xl font-bold mb-6">{{ plan.price }}<span class="text-sm text-gray-400">/session</span></div>
          <ul v-if="plan.features" class="space-y-4 text-sm text-gray-600 mb-10">
            <li v-for="(feature, idx) in plan.features" :key="idx" class="flex items-center gap-2">
              <Icon name="lucide:check" class="w-4 h-4 text-primary" />
              {{ feature }}
            </li>
          </ul>
          <p v-else class="text-sm text-gray-600 mb-10">{{ plan.description }}</p>
          <a :href="plan.link" class="block text-center py-3 font-bold text-xs uppercase tracking-widest transition" :class="plan.popular ? 'bg-primary hover:brightness-105' : 'bg-gray-100 group-hover:bg-primary'" :aria-label="plan.ariaLabel">{{ plan.buttonText }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { elementRef: sectionRef, isVisible } = useFadeIn()

const plans = [
  {
    title: 'Portrait / Solo',
    price: 'Rp500.000',
    features: ['2 Hours Session', '10 Retouched Photos', 'Online Gallery Access'],
    link: '#contact',
    buttonText: 'Select Plan',
    ariaLabel: 'Select Portrait/Solo photography plan',
    popular: false,
  },
  {
    title: 'Commercial / Brand',
    price: 'Rp1.000.000',
    features: ['Full Day Session', '25 High-End Retouched', 'Full Commercial Rights', 'Express Delivery'],
    link: '#contact',
    buttonText: 'Select Plan',
    ariaLabel: 'Select Commercial/Brand photography plan',
    popular: true,
  },
  {
    title: 'Events / Large Scale',
    price: 'Rp1.500.000',
    description: 'Ideal for weddings, corporate events, or unique artistic collaborations.',
    link: '#contact',
    buttonText: 'Get Quote',
    ariaLabel: 'Get quote for Events/Large Scale photography',
    popular: false,
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

.pricing-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.fade-in-section.is-visible .pricing-item {
  opacity: 1;
  transform: translateY(0);
}

.text-primary {
  color: var(--primary);
}
</style>

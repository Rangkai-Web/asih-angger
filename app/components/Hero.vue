<template>
  <section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="grid grid-cols-2 h-full">
        <div class="bg-gray-200">
          <NuxtImg
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000"
            class="w-full h-full object-cover"
            alt="Professional product photography showcasing luxury watch with elegant lighting and composition"
            width="1000"
            height="1000"
            loading="eager"
            preload
            fetchpriority="high"
          />
        </div>
        <div class="bg-gray-300">
          <NuxtImg
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000"
            class="w-full h-full object-cover"
            alt="Professional portrait photography with studio lighting capturing natural beauty and elegance"
            width="1000"
            height="1000"
            loading="eager"
            preload
            fetchpriority="high"
          />
        </div>
      </div>
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 text-white text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
        Capturing the Essence of <span class="text-primary">Every Moment.</span>
      </h1>
      <p class="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto">
        High-end photography services for products, portraits, and life's milestones.
      </p>
      <div class="flex flex-col md:flex-row justify-center gap-4">
        <a href="#portfolio" class="px-10 py-4 border-2 border-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition" aria-label="View photography portfolio">View Portfolio</a>
        <a href="#contact" class="px-10 py-4 bg-primary text-black font-bold uppercase tracking-widest hover:brightness-105 transition" aria-label="Book a photography session">Book a Session</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-primary {
  color: var(--primary);
}
</style>


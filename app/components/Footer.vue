<template>
  <footer class="bg-[#111] text-white pt-24 pb-12">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
        <div class="lg:col-span-5">
          <div class="text-3xl font-bold tracking-tighter uppercase mb-6">
            Asih <span class="text-primary">Angger</span>
          </div>
          <p class="text-gray-400 mb-8 max-w-sm leading-relaxed">
            Asih Angger is a photographer and retoucher who specializes in product photography, portrait photography, beauty photography, baby photography, event photography, and commercial photography.
          </p>
          <!-- <form @submit.prevent class="flex w-full max-w-md border-b border-white/30 focus-within:border-primary transition-colors pb-2">
            <input
              type="email"
              placeholder="Email Address"
              class="bg-transparent w-full text-sm focus:outline-none placeholder:text-gray-600"
            />
            <button type="submit" class="text-primary hover:translate-x-1 transition-transform">
              <Icon name="lucide:arrow-right" />
            </button>
          </form> -->
        </div>
        
        <div class="lg:col-span-2">
          <h3 class="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-8">Navigation</h3>
          <ul class="space-y-4 text-sm font-medium">
            <li><a href="#about" class="footer-link text-gray-400" aria-label="Navigate to About section">About</a></li>
            <li><a href="#services" class="footer-link text-gray-400" aria-label="Navigate to Services section">Services</a></li>
            <li><a href="#process" class="footer-link text-gray-400" aria-label="Navigate to Process section">Process</a></li>
            <li><a href="#pricing" class="footer-link text-gray-400" aria-label="Navigate to Pricing section">Pricing</a></li>
            <li><a href="#portfolio" class="footer-link text-gray-400" aria-label="Navigate to Portfolio section">Portfolio</a></li>
            <li><a href="#testimonials" class="footer-link text-gray-400" aria-label="Navigate to Testimonials section">Testimonials</a></li>
            <li><a href="#contact" class="footer-link text-gray-400" aria-label="Navigate to Contact section">Contact</a></li>
          </ul>
        </div>

        <div class="lg:col-span-2">
          <h3 class="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-8">Expertise</h3>
          <ul class="space-y-4 text-sm text-gray-400">
            <li>Product Photography</li>
            <li>Beauty Portrait</li>
            <li>Baby Documentary</li>
            <li>Event Coverage</li>
            <li>Photo Retouching</li>
            <li>Editing & Retouching</li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <h3 class="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-8">Connect</h3>
          <ul class="space-y-4 text-sm">
            <li class="flex items-start gap-3 text-gray-400">
              <Icon name="lucide:map-pin" class="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Jl. Margonda Raya, Kota Depok, Jawa Barat, Indonesia</span>
            </li>
            <li class="flex items-start gap-3 text-gray-400">
              <Icon name="lucide:mail" class="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>asih.angger@gmail.com</span>
            </li>
            <li class="flex items-start gap-3 text-gray-400">
              <Icon name="lucide:instagram" class="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>@asihangger</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-sm tracking-widest text-gray-600">
          © {{ new Date().getFullYear() }} Asih Angger. Handcrafted for Visual Excellence.
        </div>
        <div class="flex gap-4">
          <a href="https://www.instagram.com/asihangger/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary transition duration-500" aria-label="Follow Asih Angger on Instagram">
            <Icon name="lucide:instagram" class="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/asihangger/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary transition duration-500" aria-label="Connect with Asih Angger on LinkedIn">
            <Icon name="lucide:linkedin" class="w-4 h-4" />
          </a>
        </div>
        <!-- <div class="flex gap-8 text-sm tracking-widest font-bold text-gray-600">
          <a href="#" class="hover:text-white transition">Privacy Policy</a>
          <a href="#" class="hover:text-white transition">Terms of Service</a>
        </div> -->
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  position: relative;
  transition: color 0.3s;
}

.footer-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: var(--primary);
  transition: width 0.3s;
}

.footer-link:hover::after {
  width: 100%;
}
</style>


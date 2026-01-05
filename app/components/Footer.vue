<template>
  <footer class="bg-[#111] text-white pt-24 pb-12">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
        <div class="lg:col-span-5">
          <div class="flex items-start flex-col gap-2 mt-2">
            <div class="text-3xl font-bold tracking-tighter uppercase">
              Asih <span class="text-primary">Angger</span>
            </div>
            <div class="text-sm font-medium uppercase tracking-widest">Fotografi</div>
          </div>
          <p class="text-gray-400 mb-8 max-w-sm leading-relaxed mt-6">
            Fotografer & Videografer kreatif dengan pengalaman lebih dari <b>4 tahun</b> di bidang fotografi komersial, lifestyle, dan produk. Berpengalaman dalam fotografi model, videografi, serta retouching. Telah berkolaborasi dengan berbagai brand dan figur publik seperti Dian Pelangi, Nagita Slavina, dan Marlene Hariman untuk menciptakan konten visual yang berdampak dan berkelas.
          </p>
        </div>
        
        <div class="lg:col-span-2">
          <h3 class="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-8">Navigasi</h3>
          <ul class="space-y-4 text-sm font-medium">
            <li><a href="#about" class="footer-link text-gray-400" aria-label="Navigate to About section">Tentang</a></li>
            <li><a href="#services" class="footer-link text-gray-400" aria-label="Navigate to Services section">Layanan</a></li>
            <li><a href="#process" class="footer-link text-gray-400" aria-label="Navigate to Process section">Alur Kerja</a></li>
            <li><a href="#pricing" class="footer-link text-gray-400" aria-label="Navigate to Pricing section">Paket</a></li>
            <li><a href="#portfolio" class="footer-link text-gray-400" aria-label="Navigate to Portfolio section">Portofolio</a></li>
            <li><a href="#testimonials" class="footer-link text-gray-400" aria-label="Navigate to Testimonials section">Testimoni</a></li>
            <li><a href="#contact" class="footer-link text-gray-400" aria-label="Navigate to Contact section">Hubungi Kami</a></li>
          </ul>
        </div>

        <div class="lg:col-span-2">
          <h3 class="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-8">Layanan Kami</h3>
          <ul class="space-y-4 text-sm text-gray-400">
            <li>Fotografi Produk</li>
            <li>Fotografi Beauty</li>
            <li>Fotografi Baby</li>
            <li>Fotografi Event</li>
            <li>Retouching & Editing</li>
            <li>Kelas Privat</li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <h3 class="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-8">Kontak</h3>
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
        <div class="text-base tracking-widest text-gray-600 text-center md:text-left">
          © {{ new Date().getFullYear() }} Asih Angger, dibuat dengan cinta <Icon name="lucide:heart" class="w-4 h-4 text-primary" />
        </div>
        <div class="flex gap-4">
          <a href="https://www.instagram.com/asihangger/" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary transition duration-500" aria-label="Follow Asih Angger on Instagram">
            <Icon name="lucide:instagram" class="w-6! h-6!" />
          </a>
          <a href="https://www.linkedin.com/in/angger-cahyaning-tyas-asih-4a7b21102/" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary transition duration-500" aria-label="Connect with Asih Angger on LinkedIn">
            <Icon name="lucide:linkedin" class="w-6! h-6!" />
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


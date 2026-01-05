<template>
  <section id="about" ref="sectionRef" class="py-24 bg-white fade-in-section" :class="{ 'is-visible': isVisible }">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="relative">
          <NuxtImg
            :src="AsihAngger"
            alt="Asih Angger - Fotografer & Retoucher Profesional. Spesialis fotografi produk, potret, beauty, baby, dan event"
            width="1000"
            height="1000"
            loading="lazy"
            class="shadow-2xl rounded-lg"
            draggable="false"
          />
          <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-primary -z-10 rounded-lg"></div>
        </div>
        <div>
          <h2 class="text-4xl font-bold mb-6">
            Minimalism Meets <span class="text-primary italic">Emotion</span>.
          </h2>
          <p class="text-lg text-gray-600 mb-6 leading-relaxed">
            Fotografer & Videografer kreatif dengan pengalaman lebih dari <b>4 tahun</b> di bidang fotografi komersial, lifestyle, dan produk. Berpengalaman dalam fotografi model, videografi, serta retouching. Telah berkolaborasi dengan berbagai brand dan figur publik seperti Dian Pelangi, Nagita Slavina, dan Marlene Hariman untuk menciptakan konten visual yang berdampak dan berkelas. <br/><br/>
            
            Menguasai Adobe Photoshop, Lightroom, dan CapCut, saya memadukan kreativitas dengan keahlian teknis untuk menghasilkan visual yang kuat dan menarik. Karya saya mencakup sektor beauty, lifestyle, health, serta food & beverage, dengan fokus menyampaikan cerita brand secara visual dan emosional. <br/><br/>
            
            Dengan latar belakang digital marketing dari RevoU, saya mengombinasikan storytelling visual dengan pendekatan berbasis data untuk memaksimalkan engagement audiens dan nilai brand.
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full overflow-hidden">
              <NuxtImg
                src="/img/others/others1.webp"
                alt="Asih Angger - Professional photographer and retoucher"
                width="48"
                height="48"
                loading="lazy"
              />
            </div>
            <div>
              <p class="font-bold uppercase tracking-widest text-sm">Asih Angger</p>
              <p class="text-xs text-gray-400">Fotografi</p>
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


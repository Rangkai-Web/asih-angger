<template>
  <section id="services" ref="sectionRef" class="py-24 bg-gray-50 fade-in-section relative z-10" :class="{ 'is-visible': isVisible }">
    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-16">
        <h2 class="text-3xl font-bold uppercase tracking-tighter mb-2">Layanan Kami</h2>
        <div class="w-20 h-2 bg-primary" role="presentation" aria-hidden="true"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
        <div 
          v-for="(category, index) in serviceCategories" 
          :key="index"
          :ref="el => { if (el) categoryRefs[index] = el as HTMLElement }"
          class="service-category relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-visible service-item flex flex-col"
          :class="{ 'is-expanded': expandedCategory === index }"
          :style="{ transitionDelay: isVisible ? `${index * 0.1}s` : '0s' }"
        >
          <div class="relative h-48 overflow-hidden rounded-t-xl">
            <NuxtImg
              :src="category.image"
              :alt="category.title"
              width="400"
              height="200"
              loading="lazy"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex items-center gap-3 mb-2">
                <div class="px-3 py-2 bg-primary rounded-full transition-transform duration-300" :class="{ 'scale-110': expandedCategory === index }">
                  <Icon :name="category.icon" class="w-5 h-5 text-white" />
                </div>
                <h3 class="text-xl font-bold text-white">{{ category.title }}</h3>
              </div>
            </div>
          </div>
          
          <div class="p-6 flex-1 flex flex-col">
            <p class="text-gray-600 text-sm mb-4">{{ category.description }}</p>

            <div 
              v-for="(subService, subIndex) in category.subServices" 
              :key="subIndex"
              class="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              :class="{'mb-0': subIndex === category.subServices.length - 1, 'mb-4': subIndex !== category.subServices.length - 1}"
              :style="{ transitionDelay: expandedCategory === index ? `${subIndex * 0.05}s` : '0s' }"
            >
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">{{ subService.title }}</h4>
                </div>
              </div>
            </div>
            
            <!-- <button
              @click.stop="toggleCategory(index)"
              class="w-full flex items-center justify-between text-left focus:outline-none focus:ring-0 rounded-lg p-2 -m-2"
            >
              <span class="text-sm font-semibold text-gray-700">
                {{ expandedCategory === index ? 'Sembunyikan' : 'Lihat Detail' }}
              </span>
              <Icon 
                :name="expandedCategory === index ? 'lucide:chevron-up' : 'lucide:chevron-down'" 
                class="w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0"
              />
            </button> -->
          </div>
          
          <!-- <div 
            class="sub-services-container absolute left-0 right-0 top-full mt-2 z-50 shadow-xl rounded-xl"
            :class="{ 'is-expanded': expandedCategory === index }"
          >
            <div class="bg-white rounded-xl border-2 border-primary p-6">
              <div class="space-y-3">
                <div 
                  v-for="(subService, subIndex) in category.subServices" 
                  :key="subIndex"
                  class="sub-service-item p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  :style="{ transitionDelay: expandedCategory === index ? `${subIndex * 0.05}s` : '0s' }"
                >
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">{{ subService.title }}</h4>
                      <p class="text-sm text-gray-600 leading-relaxed">{{ subService.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { elementRef: sectionRef, isVisible } = useFadeIn()

const expandedCategory = ref<number | null>(null)
const categoryRefs = ref<Record<number, HTMLElement>>({})

const toggleCategory = (index: number) => {
  expandedCategory.value = expandedCategory.value === index ? null : index
}

const handleClickOutside = (event: MouseEvent) => {
  if (expandedCategory.value === null) return

  const expandedElement = categoryRefs.value[expandedCategory.value]
  if (!expandedElement) return

  const target = event.target as HTMLElement
  if (!expandedElement.contains(target)) {
    expandedCategory.value = null
  }
}

watch(expandedCategory, (newValue) => {
  if (newValue !== null) {
    document.addEventListener('click', handleClickOutside)
  } else {
    document.removeEventListener('click', handleClickOutside)
  }
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const serviceCategories = [
  {
    icon: 'lucide:camera',
    title: 'Fotografi',
    description: 'Layanan fotografi profesional untuk berbagai kebutuhan dan acara.',
    image: '/img/others/others4.webp',
    subServices: [
      {
        title: 'Foto Produk',
        description: 'Hasil foto yang bersih dan berkualitas komersial untuk membuat brand Anda menonjol di pasar yang kompetitif.',
      },
      {
        title: 'Beauty Portrait',
        description: 'Pencahayaan high-fashion dan potret berkualitas studio yang menangkap kepribadian dan keanggunan.',
      },
      {
        title: 'Dokumentasi Bayi',
        description: 'Cerita autentik dan candid tentang momen-momen berharga dan milestone pertama si kecil.',
      },
      {
        title: 'Event Photography',
        description: 'Dokumentasi dinamis untuk acara korporat dan acara pribadi dengan sentuhan sinematik.',
      },
    ],
  },
  {
    icon: 'lucide:edit-2',
    title: 'Retouch & Editing',
    description: 'Layanan editing dan retouching profesional untuk meningkatkan kualitas foto Anda.',
    image: '/img/others/others5.webp',
    subServices: [
      {
        title: 'Basic Editing',
        description: 'Koreksi warna, penyesuaian eksposur, dan peningkatan dasar untuk foto Anda.',
      },
      {
        title: 'Advanced Retouching',
        description: 'Retouching kulit profesional, penghapusan objek, dan manipulasi foto yang detail.',
      },
      // {
      //   title: 'Commercial Retouching',
      //   description: 'Retouching tingkat tinggi untuk keperluan komersial dan iklan dengan perhatian pada detail.',
      // },
      // {
      //   title: 'Beauty Retouching',
      //   description: 'Retouching khusus untuk fotografi beauty dan portrait dengan hasil yang terlihat natural.',
      // },
    ],
  },
  {
    icon: 'lucide:graduation-cap',
    title: 'Kelas Privat',
    description: 'Pelajari keterampilan fotografi dan editing melalui kelas privat yang dipersonalisasi.',
    image: '/img/others/others6.webp',
    subServices: [
      {
        title: 'Kelas Fotografi',
        description: 'Pelajari dasar-dasar fotografi, komposisi, pencahayaan, dan teknik kamera.',
      },
      {
        title: 'Kelas Editing Foto',
        description: 'Kuasai teknik editing dan retouching foto menggunakan software profesional dan workflow yang tepat.',
      },
    ],
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

.sub-services-container {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-10px);
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-out, transform 0.3s ease-out;
  pointer-events: none;
}

.sub-services-container.is-expanded {
  max-height: 1500px;
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.sub-service-item {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.sub-services-container.is-expanded .sub-service-item {
  opacity: 1;
  transform: translateY(0);
}

.service-category.is-expanded {
  border: 2px solid var(--primary);
  box-shadow: 0 4px 12px rgba(236, 224, 63, 0.15);
}
</style>

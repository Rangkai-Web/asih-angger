<template>
  <section id="contact" ref="sectionRef" class="py-24 bg-gray-50 fade-in-section" :class="{ 'is-visible': isVisible }">
    <div class="max-w-3xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">Get in Touch</h2>
        <p class="text-gray-500">Silakan hubungi kami untuk mendapatkan informasi lebih lanjut.</p>
      </div>
      
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-400">Nama</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              name="name"
              class="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-400">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              name="email"
              class="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent"
              required
            />
          </div>
        </div>
        <div>
          <label for="service" class="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-400">Jenis Layanan</label>
          <select
            id="service"
            v-model="form.service"
            name="service"
            class="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent"
            required
          >
            <option value="">Pilih Layanan</option>
            <option value="Foto Produk">Foto Produk</option>
            <option value="Beauty Portrait">Beauty Portrait</option>
            <option value="Dokumentasi Bayi">Dokumentasi Bayi</option>
            <option value="Event Photography">Event Photography</option>
            <option value="Retouch & Editing">Retouch & Editing</option>
            <option value="Kelas Privat">Kelas Privat</option>
          </select>
        </div>
        <div>
          <label for="message" class="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-400">Pesan</label>
          <textarea
            id="message"
            v-model="form.message"
            name="message"
            rows="4"
            class="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-primary transition-colors resize-none bg-transparent"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-primary py-4 font-bold uppercase tracking-widest hover:brightness-105 transition mt-8 shadow-lg"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
const { elementRef: sectionRef, isVisible } = useFadeIn()

const form = reactive({
  name: '',
  email: '',
  service: '',
  message: '',
})

const whatsappNumber = '6283105612985'

const handleSubmit = () => {
  const message = `Halo, saya tertarik untuk menggunakan layanan fotografi Anda.
    *Informasi Kontak:*
    Nama: ${form.name}
    Email: ${form.email}

    *Detail Layanan:*
    Jenis Layanan: ${form.service}

    *Pesan:*
    ${form.message || 'Tidak ada pesan tambahan'}

    Terima kasih!
  `

  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
  
  if (typeof window !== 'undefined') {
    try {
      const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
      if (newWindow) {
        newWindow.opener = null
      }
    } catch (error) {
      window.location.href = whatsappUrl
    }
  }
}
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

.border-primary {
  border-color: var(--primary);
}
</style>


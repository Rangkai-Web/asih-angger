<template>
  <section id="contact" ref="sectionRef" class="py-24 bg-gray-50 fade-in-section" :class="{ 'is-visible': isVisible }">
    <div class="max-w-3xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">Get in Touch</h2>
        <p class="text-gray-500">Ready to start your next project? Let's talk about it.</p>
      </div>
      
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-400">Name</label>
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
            <label for="email" class="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-400">Email Address</label>
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
          <label for="service" class="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-400">Service Type</label>
          <select
            id="service"
            v-model="form.service"
            name="service"
            class="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent"
            required
          >
            <option value="">Select a service</option>
            <option value="Product Photography">Product Photography</option>
            <option value="Beauty Portrait">Beauty Portrait</option>
            <option value="Baby Documentary">Baby Documentary</option>
            <option value="Event Coverage">Event Coverage</option>
            <option value="Photo Retouching">Photo Retouching</option>
            <option value="Editing & Retouching">Editing & Retouching</option>
          </select>
        </div>
        <div>
          <label for="message" class="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-400">Message</label>
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
          Send Inquiry
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


<template>
  <a
    href="https://wa.me/6283105612985?text=Halo, saya tertarik untuk menggunakan layanan fotografi Anda."
    class="whatsapp-float"
    aria-label="Contact us on WhatsApp"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon name="lucide:phone" class="w-6 h-6" />
  </a>
</template>

<style scoped>
.whatsapp-float {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  right: 20px;
  background: #25D366;
  color: white;
  padding: 20px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 100;
  transition: transform 0.3s;
}

@media (min-width: 640px) {
  .whatsapp-float {
    bottom: 30px;
    right: 30px;
  }
}

.whatsapp-float:hover {
  transform: scale(1.1);
}

.whatsapp-float:active {
  transform: scale(0.95);
}
</style>


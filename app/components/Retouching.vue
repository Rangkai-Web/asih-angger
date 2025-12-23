<template>
  <section id="retouching" ref="sectionRef" class="py-24 bg-white fade-in-section" :class="{ 'is-visible': isVisible }">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-4xl font-bold mb-6">The Art of Retouching</h2>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            Beyond the shutter, we perfect every pixel. Our retouching services range from subtle skin enhancements to high-end color grading and background manipulation.
          </p>
          <ul class="space-y-4 mb-8">
            <li class="flex items-center gap-3">
              <Icon name="lucide:check-circle" class="text-primary w-5 h-5" />
              Advanced Skin Texture Retouching
            </li>
            <li class="flex items-center gap-3">
              <Icon name="lucide:check-circle" class="text-primary w-5 h-5" />
              Professional Color Correction
            </li>
            <li class="flex items-center gap-3">
              <Icon name="lucide:check-circle" class="text-primary w-5 h-5" />
              Background Clean-up & Composite
            </li>
          </ul>
        </div>
        <div class="comparison-slider" ref="sliderContainer">
          <NuxtImg
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1000"
            class="img-after"
            alt="Professional photo retouching result showing enhanced skin texture, color correction, and refined details"
            width="1000"
            height="500"
            loading="lazy"
          />
          <NuxtImg
            ref="beforeImage"
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1000&sat=-100&contrast=80"
            class="img-before"
            alt="Original photograph before professional retouching and enhancement"
            width="1000"
            height="500"
            loading="lazy"
          />
          <div class="slider-handle" ref="sliderHandle"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { elementRef: sectionRef, isVisible } = useFadeIn()

const sliderContainer = ref<HTMLElement>()
const beforeImage = ref<HTMLElement>()
const sliderHandle = ref<HTMLElement>()
const isDragging = ref(false)

const moveSlider = (e: MouseEvent | TouchEvent) => {
  if (!sliderContainer.value || !beforeImage.value || !sliderHandle.value) return
  
  const slider = sliderContainer.value
  const beforeImg = beforeImage.value as HTMLElement
  const handle = sliderHandle.value
  
  const rect = slider.getBoundingClientRect()
  const clientX = 'touches' in e ? (e.touches[0]?.clientX ?? 0) : (e.clientX ?? 0)
  let x = clientX - rect.left
  
  if (x < 0) x = 0
  if (x > rect.width) x = rect.width
  
  const percent = (x / rect.width) * 100
  beforeImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`
  handle.style.left = `${percent}%`
}

const handleMouseMove = (e: MouseEvent) => {
  if (isDragging.value) {
    moveSlider(e)
  }
}

const handleMouseDown = () => {
  isDragging.value = true
}

const handleMouseUp = () => {
  isDragging.value = false
}

const handleTouchMove = (e: TouchEvent) => {
  moveSlider(e)
  e.preventDefault()
}

onMounted(() => {
  if (!sliderContainer.value) return
  
  const slider = sliderContainer.value
  
  slider.addEventListener('mousedown', handleMouseDown)
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
  slider.addEventListener('touchstart', handleMouseDown)
  slider.addEventListener('touchmove', handleTouchMove)
  slider.addEventListener('touchend', handleMouseUp)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
})
</script>

<style scoped>
.comparison-slider {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 8px;
}

.comparison-slider img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.img-before {
  z-index: 10;
  clip-path: inset(0 50% 0 0);
}

.slider-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background: var(--primary);
  z-index: 20;
  cursor: ew-resize;
  transform: translateX(-50%);
}

.slider-handle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.fade-in-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.text-primary {
  color: var(--primary);
}
</style>


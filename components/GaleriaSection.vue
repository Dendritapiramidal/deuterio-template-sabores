<template>
  <section id="galeria" class="section section--alt">
    <div class="container">
      <p class="tag">Nuestros platos</p>
      <h2>Galería</h2>
      <div class="divider"></div>
      <div class="galeria">
        <div v-for="(item, i) in c.galeria" :key="i" class="galeria__item" :class="`galeria__item--${(i%5)+1}`">
          <img :src="item.imagen" :alt="item.titulo" />
          <div class="galeria__overlay"><span>{{ item.titulo }}</span></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const config = useRuntimeConfig()
const c = config.public.client
</script>
<style scoped>
.galeria { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 260px; gap: 6px; margin-top: 3rem; }
.galeria__item--1, .galeria__item--4 { grid-column: span 2; }
.galeria__item { position: relative; overflow: hidden; cursor: pointer; }
.galeria__item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
.galeria__item:hover img { transform: scale(1.06); }
.galeria__overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(26,15,0,0.85) 0%, transparent 60%); display: flex; align-items: flex-end; padding: 1.25rem; opacity: 0; transition: opacity 0.4s; }
.galeria__item:hover .galeria__overlay { opacity: 1; }
.galeria__overlay span { font-family: var(--font-display), serif; font-size: 1.1rem; color: var(--color-texto); }
@media (max-width: 768px) { .galeria { grid-template-columns: 1fr 1fr; grid-auto-rows: 180px; } .galeria__item--1, .galeria__item--4 { grid-column: span 1; } }
</style>

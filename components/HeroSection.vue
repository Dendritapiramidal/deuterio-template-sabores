<template>
  <section id="inicio" class="hero">
    <div class="hero__bg" v-if="hero.imagen">
      <img :src="hero.imagen" alt="Hero" />
      <div class="hero__overlay"></div>
    </div>
    <div class="container hero__content">
      <p class="tag">{{ c.rubro }}</p>
      <h1>{{ hero.titulo }}</h1>
      <div class="divider"></div>
      <p class="hero__sub">{{ hero.subtitulo }}</p>
      <div class="hero__actions">
        <a :href="`https://wa.me/${c.whatsapp}?text=Hola, quiero reservar una mesa`" target="_blank" class="btn btn--filled">{{ hero.cta }}</a>
        <a href="#menu" class="btn">Ver menú</a>
      </div>
    </div>
    <div class="hero__scroll">
      <span class="hero__scroll-line"></span>
      <span class="hero__scroll-label">Scroll</span>
    </div>
  </section>
</template>
<script setup>
const config = useRuntimeConfig()
const c = config.public.client
const hero = c.hero
</script>
<style scoped>
.hero { position: relative; min-height: 100svh; display: flex; align-items: center; overflow: hidden; }
.hero__bg { position: absolute; inset: 0; z-index: 0; }
.hero__bg img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
.hero__overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(26,15,0,0.92) 0%, rgba(26,15,0,0.55) 70%); }
.hero__content { position: relative; z-index: 1; max-width: 700px; padding-top: 8rem; }
.hero__content h1 { margin-bottom: 1.5rem; color: var(--color-texto); }
.hero__sub { font-size: 1.15rem; color: var(--color-texto-suave); max-width: 500px; margin-bottom: 2.5rem; }
.hero__actions { display: flex; flex-wrap: wrap; gap: 1rem; }
.hero__scroll { position: absolute; bottom: 2.5rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 0.5rem; z-index: 1; }
.hero__scroll-line { width: 1px; height: 48px; background: linear-gradient(to bottom, transparent, var(--color-acento)); animation: pulse 2s ease-in-out infinite; }
.hero__scroll-label { font-size: 0.6rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--color-acento); font-family: var(--font-body), sans-serif; }
@keyframes pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
@media (max-width: 600px) { .hero__actions { flex-direction: column; } }
</style>

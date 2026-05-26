<template>
  <section id="sobre" class="section">
    <div class="container sobre__inner">
      <div class="sobre__imagen">
        <img :src="sobre.imagen" :alt="c.nombre" />
        <div class="sobre__frame"></div>
      </div>
      <div class="sobre__texto">
        <p class="tag">Quiénes somos</p>
        <h2>{{ sobre.titulo }}</h2>
        <div class="divider"></div>
        <p>{{ sobre.texto }}</p>
        <div class="sobre__stats" v-if="sobre.stats">
          <div class="stat" v-for="s in sobre.stats" :key="s.label">
            <span class="stat__num">{{ s.num }}</span>
            <span class="stat__label">{{ s.label }}</span>
          </div>
        </div>
        <div class="sobre__horarios" v-if="c.horarios">
          <p class="tag" style="margin-top:2rem">Horarios</p>
          <div class="horario" v-for="h in c.horarios" :key="h.dia">
            <span>{{ h.dia }}</span>
            <span class="horario__hora">{{ h.hora }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const config = useRuntimeConfig()
const c = config.public.client
const sobre = c.sobre
</script>
<style scoped>
.sobre__inner { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
.sobre__imagen { position: relative; }
.sobre__imagen img { width: 100%; aspect-ratio: 4/5; object-fit: cover; position: relative; z-index: 1; }
.sobre__frame { position: absolute; top: 1.5rem; right: -1.5rem; width: 100%; height: 100%; border: 2px solid var(--color-acento); opacity: 0.3; z-index: 0; }
.sobre__stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2.5rem; padding-top: 2rem; border-top: 1px solid var(--color-borde); }
.stat__num { display: block; font-family: var(--font-display), serif; font-size: 2rem; color: var(--color-acento); line-height: 1; margin-bottom: 0.3rem; }
.stat__label { font-size: 0.75rem; color: var(--color-texto-suave); text-transform: uppercase; letter-spacing: 0.08em; }
.sobre__horarios { margin-top: 1.5rem; }
.horario { display: flex; justify-content: space-between; padding: 0.6rem 0; border-bottom: 1px solid var(--color-borde); font-size: 0.9rem; }
.horario__hora { color: var(--color-acento); font-weight: 700; }
@media (max-width: 768px) { .sobre__inner { grid-template-columns: 1fr; gap: 3rem; } .sobre__frame { display: none; } }
</style>

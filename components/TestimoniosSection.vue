<template>
  <section class="section">
    <div class="container">
      <p class="tag">Lo que dicen</p>
      <h2>Opiniones de nuestros clientes</h2>
      <div class="divider"></div>
      <div class="grid">
        <div v-for="(t, i) in c.testimonios" :key="i" class="card">
          <div class="card__estrellas">{{ '★'.repeat(t.estrellas) }}</div>
          <p class="card__texto">"{{ t.texto }}"</p>
          <div class="card__autor">
            <div class="card__avatar">{{ t.nombre.charAt(0) }}</div>
            <span>{{ t.nombre }}</span>
          </div>
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
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 3rem; }
.card { background: var(--color-secundario); border: 1px solid var(--color-borde); padding: 2rem; transition: border-color 0.3s; }
.card:hover { border-color: var(--color-acento); }
.card__estrellas { color: var(--color-acento); font-size: 1rem; letter-spacing: 2px; margin-bottom: 1rem; }
.card__texto { font-style: italic; font-size: 0.98rem; margin-bottom: 1.5rem; line-height: 1.75; }
.card__autor { display: flex; align-items: center; gap: 0.75rem; font-size: 0.88rem; color: var(--color-texto); font-weight: 700; }
.card__avatar { width: 36px; height: 36px; border-radius: 50%; background: var(--color-acento); color: var(--color-primario); display: flex; align-items: center; justify-content: center; font-family: var(--font-display), serif; font-size: 1rem; flex-shrink: 0; }
</style>

<template>
  <section id="menu" class="section section--alt">
    <div class="container">
      <p class="tag">Lo que preparamos</p>
      <h2>Nuestra carta</h2>
      <div class="divider"></div>

      <div class="categorias">
        <button
          v-for="cat in c.menu"
          :key="cat.categoria"
          class="cat-btn"
          :class="{ 'cat-btn--active': categoriaActiva === cat.categoria }"
          @click="categoriaActiva = cat.categoria"
        >
          {{ cat.categoria }}
        </button>
      </div>

      <div class="items" v-if="categoriaActual">
        <div v-for="item in categoriaActual.items" :key="item.nombre" class="item">
          <div class="item__info">
            <h3>{{ item.nombre }}</h3>
            <p>{{ item.descripcion }}</p>
          </div>
          <span class="item__precio">{{ item.precio }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const config = useRuntimeConfig()
const c = config.public.client
const categoriaActiva = ref(c.menu?.[0]?.categoria || '')
const categoriaActual = computed(() => c.menu?.find(m => m.categoria === categoriaActiva.value))
</script>
<style scoped>
.categorias { display: flex; flex-wrap: wrap; gap: 0.75rem; margin: 2.5rem 0; }
.cat-btn { padding: 0.6rem 1.5rem; background: none; border: 1px solid var(--color-borde); color: var(--color-texto-suave); font-family: var(--font-body), sans-serif; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; transition: all 0.3s; }
.cat-btn--active { border-color: var(--color-acento); color: var(--color-acento); }
.cat-btn:hover { border-color: var(--color-acento); color: var(--color-acento); }
.items { display: flex; flex-direction: column; gap: 0; }
.item { display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem; padding: 1.75rem 0; border-bottom: 1px solid var(--color-borde); transition: background 0.3s; }
.item:hover { padding-left: 0.5rem; }
.item__info { flex: 1; }
.item__info h3 { font-size: 1.15rem; color: var(--color-texto); margin-bottom: 0.3rem; }
.item__info p { font-size: 0.9rem; }
.item__precio { font-family: var(--font-display), serif; font-size: 1.3rem; color: var(--color-acento); white-space: nowrap; flex-shrink: 0; }
</style>

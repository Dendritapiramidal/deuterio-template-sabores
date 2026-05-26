<template>
  <section id="contacto" class="section section--alt">
    <div class="container contacto__inner">
      <div class="contacto__info">
        <p class="tag">Visitanos</p>
        <h2>Encontranos aquí</h2>
        <div class="divider"></div>
        <div class="contacto__links">
          <a :href="`https://wa.me/${c.whatsapp}`" target="_blank" class="contacto__link">
            <span class="contacto__link-icon">◈</span>
            <div><span class="contacto__link-label">WhatsApp</span><span class="contacto__link-value">+{{ c.whatsapp }}</span></div>
          </a>
          <a :href="`mailto:${c.email}`" class="contacto__link">
            <span class="contacto__link-icon">✉</span>
            <div><span class="contacto__link-label">Email</span><span class="contacto__link-value">{{ c.email }}</span></div>
          </a>
          <a :href="`https://instagram.com/${c.instagram}`" target="_blank" class="contacto__link">
            <span class="contacto__link-icon">◉</span>
            <div><span class="contacto__link-label">Instagram</span><span class="contacto__link-value">@{{ c.instagram }}</span></div>
          </a>
          <div class="contacto__link" v-if="c.direccion">
            <span class="contacto__link-icon">⌖</span>
            <div><span class="contacto__link-label">Dirección</span><span class="contacto__link-value">{{ c.direccion }}</span></div>
          </div>
        </div>
      </div>
      <div class="contacto__reserva">
        <p class="tag">Reservas</p>
        <h3>¿Querés reservar una mesa?</h3>
        <p style="margin: 1rem 0 2rem">Escribinos por WhatsApp y te confirmamos la disponibilidad al instante.</p>
        <a :href="`https://wa.me/${c.whatsapp}?text=Hola! Quiero reservar una mesa para el día`" target="_blank" class="btn btn--filled" style="width:100%; justify-content:center">
          Reservar por WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>
<script setup>
const config = useRuntimeConfig()
const c = config.public.client
</script>
<style scoped>
.contacto__inner { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
.contacto__links { display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem; }
.contacto__link { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.25rem; border: 1px solid var(--color-borde); background: var(--color-primario); transition: border-color 0.3s; cursor: pointer; }
.contacto__link:hover { border-color: var(--color-acento); }
.contacto__link-icon { font-size: 1.2rem; color: var(--color-acento); width: 24px; text-align: center; flex-shrink: 0; }
.contacto__link div { display: flex; flex-direction: column; gap: 0.1rem; }
.contacto__link-label { font-size: 0.68rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-texto-suave); }
.contacto__link-value { font-size: 0.9rem; color: var(--color-texto); }
.contacto__reserva { background: var(--color-primario); border: 1px solid var(--color-borde); padding: 2.5rem; }
.contacto__reserva h3 { font-size: 1.5rem; color: var(--color-texto); margin-top: 0.5rem; }
@media (max-width: 768px) { .contacto__inner { grid-template-columns: 1fr; gap: 3rem; } }
</style>

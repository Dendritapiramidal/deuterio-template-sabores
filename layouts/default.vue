<template>
  <div><slot /></div>
</template>
<script setup>
const config = useRuntimeConfig()
const c = config.public.client
const cssVars = computed(() => `
  :root {
    --color-primario:    ${c.colores.primario};
    --color-secundario:  ${c.colores.secundario};
    --color-acento:      ${c.colores.acento};
    --color-texto:       ${c.colores.texto};
    --color-texto-suave: ${c.colores.textoSuave};
    --color-borde:       ${c.colores.borde};
    --font-display:      '${c.fuentes.display}';
    --font-body:         '${c.fuentes.body}';
  }
`)
useHead({ style: [{ innerHTML: cssVars.value }] })
</script>

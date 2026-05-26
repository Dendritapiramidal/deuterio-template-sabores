import clientConfig from './client.config.js'

export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: clientConfig.seo.titulo,
      meta: [
        { name: 'description', content: clientConfig.seo.descripcion },
        { name: 'keywords',    content: clientConfig.seo.keywords },
        { property: 'og:title', content: clientConfig.seo.titulo },
        { property: 'og:description', content: clientConfig.seo.descripcion },
        { property: 'og:image', content: clientConfig.seo.ogImagen },
      ],
      link: [
        { rel: 'icon', href: clientConfig.favicon },
        {
          rel: 'stylesheet',
          href: `https://fonts.googleapis.com/css2?family=${clientConfig.fuentes.display.replace(/ /g,'+')}:wght@400;600;700&family=${clientConfig.fuentes.body.replace(/ /g,'+')}:wght@300;400;700&display=swap`
        }
      ]
    }
  },
  runtimeConfig: {
    public: { client: clientConfig }
  },
  nitro: { preset: 'static' }
})

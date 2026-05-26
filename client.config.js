// ============================================================
//  DEUTERIOTECH — TEMPLATE: SABORES (Gastronómico)
//  Editá solo este archivo para cada nuevo cliente.
// ============================================================

export default {
  nombre:      "La Trattoria",
  rubro:       "Restaurante Italiano",
  descripcion: "Cocina italiana auténtica en el corazón de la ciudad.",
  logo:        "/logo.png",
  favicon:     "/favicon.ico",

  whatsapp:    "5491134149059",
  email:       "hola@latrattoria.com",
  instagram:   "latrattoria",
  direccion:   "Av. Corrientes 1234, Buenos Aires",

  hero: {
    titulo:    "Una experiencia que perdura",
    subtitulo: "Sabores italianos auténticos, preparados con amor y los mejores ingredientes.",
    cta:       "Reservar mesa",
    imagen:    "/hero.jpg",
  },

  menu: [
    { categoria: "Entradas",   items: [
      { nombre: "Bruschetta al pomodoro", precio: "$2.800", descripcion: "Pan tostado con tomate fresco y albahaca" },
      { nombre: "Tabla de fiambres",      precio: "$4.200", descripcion: "Selección de quesos y embutidos importados" },
    ]},
    { categoria: "Pastas",    items: [
      { nombre: "Tagliatelle al ragù",    precio: "$5.500", descripcion: "Pasta fresca con salsa boloñesa casera" },
      { nombre: "Ravioles de ricotta",    precio: "$5.200", descripcion: "Con salsa de manteca y salvia" },
    ]},
    { categoria: "Postres",   items: [
      { nombre: "Tiramisú",              precio: "$2.400", descripcion: "Receta tradicional con mascarpone" },
      { nombre: "Panna cotta",           precio: "$2.100", descripcion: "Con coulis de frutos rojos" },
    ]},
  ],

  sobre: {
    titulo:  "Nuestra historia",
    texto:   "Desde 2010, La Trattoria lleva la auténtica cocina italiana a tu mesa. Cada plato es preparado con ingredientes frescos y recetas transmitidas por generaciones.",
    imagen:  "/about.jpg",
    stats: [
      { num: "14+",  label: "Años de historia" },
      { num: "50+",  label: "Platos en carta" },
      { num: "★4.9", label: "En Google" },
    ],
  },

  galeria: [
    { imagen: "/food1.jpg", titulo: "Tagliatelle al ragù" },
    { imagen: "/food2.jpg", titulo: "Bruschetta fresca" },
    { imagen: "/food3.jpg", titulo: "Tiramisú casero" },
    { imagen: "/food4.jpg", titulo: "Ambiente íntimo" },
    { imagen: "/food5.jpg", titulo: "Vista del salón" },
    { imagen: "/food6.jpg", titulo: "Nuestra cocina" },
  ],

  testimonios: [
    { nombre: "Martina G.", texto: "El mejor restaurante italiano de la ciudad. Las pastas son increíbles.", estrellas: 5 },
    { nombre: "Lucas P.",   texto: "Ambiente acogedor y comida deliciosa. Volvemos siempre.", estrellas: 5 },
    { nombre: "Ana V.",     texto: "El tiramisú es simplemente perfecto. Un lujo.", estrellas: 5 },
  ],

  horarios: [
    { dia: "Lunes a Viernes", hora: "12:00 – 15:00 / 20:00 – 23:30" },
    { dia: "Sábados",         hora: "12:00 – 16:00 / 20:00 – 00:00" },
    { dia: "Domingos",        hora: "12:00 – 16:00" },
  ],

  colores: {
    primario:   "#1A0F00",
    secundario: "#2C1A00",
    acento:     "#D4872A",
    texto:      "#F5EDD8",
    textoSuave: "#B8A080",
    borde:      "#3D2800",
  },

  fuentes: {
    display: "Playfair Display",
    body:    "Lato",
  },

  seo: {
    titulo:      "La Trattoria | Restaurante Italiano en Buenos Aires",
    descripcion: "Auténtica cocina italiana en Buenos Aires. Pastas frescas, ambiente íntimo y la mejor carta de vinos.",
    keywords:    "restaurante italiano buenos aires, pastas frescas, trattoria, cocina italiana",
    ogImagen:    "/og.jpg",
  },
}

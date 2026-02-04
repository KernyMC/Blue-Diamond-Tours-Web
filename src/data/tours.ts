export const CATEGORIES = [
  {
    name: "Snorkeling",
    icon: "ant-design:experiment-outlined",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=600&auto=format&fit=crop",
    href: "/tours",
  },
  {
    name: "Hiking",
    icon: "ant-design:compass-outlined",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
    href: "/tours",
  },
  {
    name: "Island Hopping",
    icon: "ant-design:rocket-outlined",
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=600&auto=format&fit=crop",
    href: "/tours",
  },
  {
    name: "Wildlife",
    icon: "ant-design:eye-outlined",
    image:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=600&auto=format&fit=crop",
    href: "/tours",
  },
  {
    name: "Relax",
    icon: "ant-design:coffee-outlined",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=600&auto=format&fit=crop",
    href: "/tours",
  },
];

export const TOURS_DATA = [
  {
    id: 1,
    title: "Tour Túneles - Isabela",
    duration: "5-6 Horas",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    difficulty: "Moderado",
    location: "Isabela",
    rating: 5.0,
    overview:
      "Los Túneles en Isabela es uno de los mejores lugares para hacer snorkeling en Galápagos. Nada con tortugas marinas, tiburones de punta blanca, rayas y caballitos de mar en aguas cristalinas y poco profundas formadas por lava volcánica.",
    includes: [
      "Equipo de Snorkel",
      "Almuerzo Box Lunch",
      "Guía Naturalista",
      "Transporte acuático",
      "Toallas",
    ],
    notIncludes: ["Propinas", "Impuestos de muelle", "Bebidas alcohólicas"],
    highlights: [
      "Nado con tiburones inofensivos",
      "Formaciones de lava únicas",
      "Avistamiento de piqueros de patas azules",
    ],
    itinerary: [
      {
        day: 1,
        title: "Salida y Exploración",
        description:
          "Salida desde Puerto Villamil. Navegación de 45 minutos hacia el sitio. Caminata sobre las formaciones de lava para observar aves.",
        meals: "Box Lunch",
      },
      {
        day: 1,
        title: "Snorkeling",
        description:
          "Inmersión en el agua para nadar a través de los túneles de lava y observar la vida marina.",
        meals: "-",
      },
    ],
    prep: {
      tips: "Lleva cámara acuática GoPro si tienes. No olvides protector solar biodegradable.",
      weather:
        "El agua puede estar fría entre julio y noviembre, proveemos trajes de neopreno largos.",
      fitness:
        "Se requiere habilidad básica de natación. Caminata corta sobre superficie irregular.",
    },
    accommodation: {
      name: "N/A (Tour de un día)",
      desc: "Este es un tour diario, no incluye alojamiento nocturno.",
      amenities: [],
      image:
        "https://images.unsplash.com/photo-1544551763-46a8723ba3f9?auto=format&fit=crop&q=80&w=800",
    },
  },
  {
    id: 2,
    title: "Kicker Rock (León Dormido)",
    duration: "Full Day",
    price: 160,
    image:
      "https://images.pexels.com/photos/18426871/pexels-photo-18426871.jpeg?_gl=1*dojgnz*_ga*MTQ0MjcxODcxLjE3NTcwNDgwMzM.*_ga_8JE65Q40S6*czE3NzAxNzY1MDUkbzUkZzEkdDE3NzAxNzY2MzIkajYwJGwwJGgw",
    difficulty: "Alto",
    location: "San Cristóbal",
    rating: 4.9,
    overview:
      "Kicker Rock es una formación volcánica gigante en medio del océano. Es un sitio de buceo y snorkel de clase mundial donde es común ver tiburones martillo, tortugas y una gran diversidad de peces.",
    includes: [
      "Equipo completo",
      "Almuerzo caliente",
      "Guía bilingüe",
      "Transporte",
      "Snacks",
    ],
    notIncludes: ["Cena", "Fotos del tour"],
    highlights: [
      "Posible avistamiento de Tiburones Martillo",
      "Paredes verticales de roca",
      "Vida marina abundante",
    ],
    itinerary: [
      {
        day: 1,
        title: "Navegación a la Roca",
        description: "Viaje en bote desde Baquerizo Moreno rodeando la costa.",
        meals: "Snack",
      },
      {
        day: 1,
        title: "Actividad Acuática",
        description: "Dos sesiones de snorkel o buceo alrededor de la roca.",
        meals: "Almuerzo",
      },
    ],
    prep: {
      tips: "Si sufres de mareo, toma medicación 30 minutos antes de zarpar.",
      weather: "Corrientes pueden ser fuertes.",
      fitness: "Nivel intermedio de natación recomendado.",
    },
    accommodation: {
      name: "N/A",
      desc: "Tour de día completo.",
      amenities: [],
      image:
        "https://images.unsplash.com/photo-1540206395-688085723adb?auto=format&fit=crop&q=80&w=800",
    },
  },
  {
    id: 3,
    title: "Bartolomé & Bahía Sullivan",
    duration: "Full Day",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800",
    difficulty: "Moderado",
    location: "Santa Cruz",
    rating: 4.8,
    overview:
      "Sube a la cima de la isla Bartolomé para la vista más icónica de Galápagos. Paisajes lunares volcánicos y pingüinos de Galápagos son los protagonistas.",
    includes: [
      "Desayuno y Almuerzo",
      "Toallas",
      "Equipo de snorkel",
      "Yate de primera clase",
    ],
    notIncludes: ["Bebidas gaseosas", "Propinas"],
    highlights: [
      "Pináculo de Bartolomé",
      "Pingüinos de Galápagos",
      "Paisaje volcánico",
    ],
    itinerary: [
      {
        day: 1,
        title: "Caminata al Mirador",
        description:
          "Ascenso por escalinatas de madera hasta el punto más alto.",
        meals: "Desayuno",
      },
      {
        day: 1,
        title: "Playa y Snorkel",
        description: "Tiempo de playa en Bahía Sullivan o playa dorada.",
        meals: "Almuerzo",
      },
    ],
    prep: {
      tips: "Zapatos cómodos para caminar son esenciales.",
      weather: "Muy soleado y seco, lleva sombrero.",
      fitness: "Hay que subir cerca de 370 escalones.",
    },
    accommodation: {
      name: "N/A",
      desc: "Tour de día completo en Yate.",
      amenities: [],
      image:
        "https://images.unsplash.com/photo-1540206395-688085723adb?auto=format&fit=crop&q=80&w=800",
    },
  },
];

export const PACKAGES_DATA = [
  {
    id: 101,
    title: "Lo Mejor de Isabela y Santa Cruz",
    duration: "5 Días / 4 Noches",
    price: 950,
    image:
      "https://images.unsplash.com/photo-1534533923997-76878b273449?auto=format&fit=crop&q=80&w=800",
    difficulty: "Fácil - Moderado",
    location: "Multidestino",
    rating: 5.0,
    overview:
      "Un paquete completo para explorar las dos islas más populares. Incluye visitas a la Estación Charles Darwin, Tortuga Bay, Tintoreras y el Volcán Sierra Negra.",
    includes: [
      "Alojamiento en Hoteles Clase Turista Superior",
      "Desayunos",
      "Almuerzos en tours",
      "Transporte entre islas (Ferry)",
      "Guías y equipo",
    ],
    notIncludes: [
      "Cenas",
      "Vuelos aéreos",
      "Entrada al Parque Nacional ($100)",
      "Tarjeta de Control ($20)",
    ],
    highlights: [
      "Tortugas Gigantes en libertad",
      "Cráter del Sierra Negra",
      "Snorkel con tintoreras",
      "Playa Tortuga Bay",
    ],
    itinerary: [
      {
        day: 1,
        title: "Llegada a Santa Cruz & Parte Alta",
        description:
          "Recepción en Baltra. Visita a los Gemelos y Rancho de Tortugas Gigantes. Transfer al hotel.",
        meals: "Almuerzo",
      },
      {
        day: 2,
        title: "Tour de Bahía & Tortuga Bay",
        description:
          "Por la mañana tour navegable por la bahía. Tarde libre en la hermosa playa de Tortuga Bay.",
        meals: "Desayuno",
      },
      {
        day: 3,
        title: "Ferry a Isabela & Tintoreras",
        description:
          "Lancha rápida a Isabela (2h). Tour al islote Tintoreras para ver tiburones y pingüinos.",
        meals: "Desayuno",
      },
      {
        day: 4,
        title: "Volcán Sierra Negra",
        description:
          "Caminata al cráter del segundo volcán activo más grande del mundo.",
        meals: "Desayuno, Box Lunch",
      },
      {
        day: 5,
        title: "Retorno y Salida",
        description:
          "Ferry temprano a Santa Cruz y transfer al aeropuerto de Baltra.",
        meals: "Desayuno",
      },
    ],
    prep: {
      tips: "Empaca ligero, el movimiento en lanchas es limitado.",
      weather: "Clima variable, lleva capas ligeras y rompevientos.",
      fitness: "Caminata al volcán requiere resistencia media (16km total).",
    },
    accommodation: {
      name: "Hotel Blue Marlin o Similar",
      desc: "Hoteles seleccionados por su confort, ubicación y servicio. Habitaciones con aire acondicionado, agua caliente y wifi.",
      amenities: ["Wifi", "Piscina", "Aire Acondicionado", "Desayuno Buffet"],
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    },
  },
  {
    id: 102,
    title: "Aventura Total - 3 Islas",
    duration: "8 Días / 7 Noches",
    price: 1450,
    image:
      "https://images.unsplash.com/photo-1454537756086-538446215286?auto=format&fit=crop&q=80&w=800",
    difficulty: "Moderado",
    location: "S. Cruz, Isabela, S. Cristóbal",
    rating: 4.9,
    overview:
      "La experiencia definitiva de Island Hopping. Conoce la diversidad única de cada isla principal habitada.",
    includes: [
      "Hoteles con vista al mar (según disponibilidad)",
      "Todos los traslados",
      "Tours diarios",
      "Comidas especificadas",
    ],
    notIncludes: ["Vuelos", "Impuestos PNG", "Cenas"],
    highlights: [
      "León Dormido",
      "Túneles",
      "Tortuga Bay",
      "Sierra Negra",
      "Lobería",
    ],
    itinerary: [
      {
        day: 1,
        title: "Llegada a San Cristóbal",
        description:
          "Recepción y visita al Centro de Interpretación y Cerro Tijeretas.",
        meals: "-",
      },
      {
        day: 2,
        title: "Kicker Rock",
        description: "Tour de día completo para snorkel en León Dormido.",
        meals: "Desayuno, Almuerzo",
      },
      {
        day: 3,
        title: "Ferry a Santa Cruz",
        description:
          "Traslado en lancha. Tarde visita Estación Charles Darwin.",
        meals: "Desayuno",
      },
      {
        day: 4,
        title: "Santa Cruz Highlands",
        description:
          "Visita a los túneles de lava y tortugas en estado salvaje.",
        meals: "Desayuno, Almuerzo",
      },
      {
        day: 5,
        title: "Ferry a Isabela",
        description:
          "Traslado temprano. Visita a Humedales y Muro de las Lágrimas.",
        meals: "Desayuno",
      },
      {
        day: 6,
        title: "Los Túneles",
        description: "El mejor tour de snorkel de Isabela.",
        meals: "Desayuno, Box Lunch",
      },
      {
        day: 7,
        title: "Día Libre en Isabela",
        description: "Disfruta de la playa de Puerto Villamil o haz kayak.",
        meals: "Desayuno",
      },
      {
        day: 8,
        title: "Salida",
        description: "Retorno a Baltra para vuelo de salida.",
        meals: "Desayuno",
      },
    ],
    prep: {
      tips: "Recomendamos pastillas para el mareo para los traslados inter-islas.",
      weather: "Sol fuerte, protección UV alta necesaria.",
      fitness: "Activo pero accesible para la mayoría.",
    },
    accommodation: {
      name: "Hoteles Boutique Seleccionados",
      desc: "Alojamiento en las mejores ubicaciones de cada puerto.",
      amenities: ["Wifi", "Ubicación Céntrica", "AC", "Atención Personalizada"],
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    },
  },
];

export const SCHEDULES_DATA = [
  {
    route: "Santa Cruz → Isabela",
    time: "07:00 AM",
    price: "$30",
    note: "Presentarse 6:30 AM en el muelle.",
  },
  {
    route: "Santa Cruz → Isabela",
    time: "02:00 PM",
    price: "$30",
    note: "Lancha rápida pública.",
  },
  {
    route: "Isabela → Santa Cruz",
    time: "06:00 AM",
    price: "$30",
    note: "Salida prioritaria.",
  },
  {
    route: "Isabela → Santa Cruz",
    time: "02:00 PM",
    price: "$30",
    note: "Sujeto a condiciones del mar.",
  },
  {
    route: "Santa Cruz → San Cristóbal",
    time: "07:00 AM",
    price: "$30",
    note: "Muelle de Puerto Ayora.",
  },
  {
    route: "San Cristóbal → Santa Cruz",
    time: "03:00 PM",
    price: "$30",
    note: "Muelle de Puerto Baquerizo Moreno.",
  },
];

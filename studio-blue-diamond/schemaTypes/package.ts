import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'package',
  title: 'Paquete',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    }),
    defineField({
      name: 'duration',
      title: 'Duración',
      type: 'string',
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría (Ideal para)',
      type: 'reference',
      to: [{type: 'categoria'}],
      description: 'Selecciona una categoría existente',
    }),
    defineField({
      name: 'featured',
      title: 'Destacado',
      type: 'boolean',
      description: 'Marcar como destacado para mostrar en la página principal',
      initialValue: false,
    }),
    defineField({
      name: 'price',
      title: 'Precio',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Imagen principal',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'gallery',
      title: 'Galería',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'difficulty',
      title: 'Dificultad',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Ubicación',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Calificación',
      type: 'number',
    }),
    defineField({
      name: 'overview',
      title: 'Resumen',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'includes',
      title: 'Incluye',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'notIncludes',
      title: 'No incluye',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'highlights',
      title: 'Destacados',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'itinerary',
      title: 'Itinerario',
      type: 'array',
      of: [{type: 'itineraryItem'}],
    }),
    defineField({
      name: 'prep',
      title: 'Información de preparación',
      type: 'prepInfo',
    }),
    defineField({
      name: 'bookingEnabled',
      title: 'Reserva activa (WeTravel)',
      type: 'boolean',
      description: 'Mostrar botón de reserva en la página del paquete',
      initialValue: false,
    }),
    defineField({
      name: 'bookingUuid',
      title: 'UUID de reserva (WeTravel)',
      type: 'string',
      description: 'Pega el UUID de WeTravel (ej: 18869763)',
    }),
    defineField({
      name: 'bookingUid',
      title: 'UID de cuenta (WeTravel)',
      type: 'string',
      description: 'Pega el UID de WeTravel (ej: 1067324)',
    }),
    defineField({
      name: 'bookingHref',
      title: 'URL de checkout (WeTravel)',
      type: 'url',
      description: 'Ej: https://www.wetravel.com/checkout_embed?uuid=18869763',
    }),
  ],
})

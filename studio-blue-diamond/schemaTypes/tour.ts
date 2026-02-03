import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tour',
  title: 'Tour',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'includes',
      title: 'Includes',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'notIncludes',
      title: 'Not Includes',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'itinerary',
      title: 'Itinerary',
      type: 'array',
      of: [{type: 'itineraryItem'}],
    }),
    defineField({
      name: 'prep',
      title: 'Preparation Info',
      type: 'prepInfo',
    }),
    defineField({
      name: 'accommodation',
      title: 'Accommodation',
      type: 'accommodation',
    }),
    defineField({
      name: 'bookingEnabled',
      title: 'Reserva activa (WeTravel)',
      type: 'boolean',
      description: 'Mostrar botón de reserva en la página del tour',
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

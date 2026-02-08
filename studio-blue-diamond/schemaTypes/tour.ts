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
      name: 'generalDescription',
      title: 'General Description',
      type: 'text',
      rows: 5,
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
      name: 'detailedDescription',
      title: 'Detailed Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'importantInfo',
      title: 'Important Info',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'whatToBring',
      title: 'What To Bring',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'extra-info-resumen',
      title: 'Info Extra - Resumen',
      type: 'array',
      of: [{type: 'itemText'}],
    }),
    defineField({
      name: 'extra-info-detalles',
      title: 'Info Extra - Detalles',
      type: 'array',
      of: [{type: 'itemText'}],
    }),
    defineField({
      name: 'extra-info-importante',
      title: 'Info Extra - Importante',
      type: 'array',
      of: [{type: 'itemText'}],
    }),
    defineField({
      name: 'bookingWidgetHtml',
      title: 'Widget HTML de WeTravel',
      type: 'text',
      rows: 8,
      description:
        'Pega aquí el código HTML completo del botón de WeTravel (incluyendo <script> y <style>)',
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

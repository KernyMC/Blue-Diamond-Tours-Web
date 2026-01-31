import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'itineraryItem',
  title: 'Item de Itinerario',
  type: 'object',
  fields: [
    defineField({
      name: 'day',
      title: 'Día',
      type: 'number',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'sitios',
      title: 'Sitios',
      type: 'string',
      description: 'Ej: Museo – Tijeretas – Playa Punta Carola – Playa Mann',
    }),
    defineField({
      name: 'duracion',
      title: 'Duración',
      type: 'string',
      description: 'Ej: 2:00 pm – 5:00 pm',
    }),
    defineField({
      name: 'description',
      title: 'Descripción de la actividad',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'modalidad',
      title: 'Modalidad',
      type: 'string',
      description:
        'Opcional. Ej: modalidad-independiente o modalidad-acompañamiento de guía certificado',
    }),
    defineField({
      name: 'meals',
      title: 'Comidas',
      type: 'string',
      description: 'Ej: Desayuno, Almuerzo, Box Lunch, -',
    }),
  ],
})

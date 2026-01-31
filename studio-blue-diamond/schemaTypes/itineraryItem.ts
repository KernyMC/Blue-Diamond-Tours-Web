import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'itineraryItem',
  title: 'Itinerary Item',
  type: 'object',
  fields: [
    defineField({
      name: 'day',
      title: 'Day',
      type: 'number',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'meals',
      title: 'Meals',
      type: 'string',
      description: 'Ej: Desayuno, Almuerzo, Box Lunch, -',
    }),
  ],
})

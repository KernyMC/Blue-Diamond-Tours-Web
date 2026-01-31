import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'prepInfo',
  title: 'Prep Info',
  type: 'object',
  fields: [
    defineField({
      name: 'tips',
      title: 'Tips',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'weather',
      title: 'Weather',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'fitness',
      title: 'Fitness',
      type: 'text',
      rows: 3,
    }),
  ],
})

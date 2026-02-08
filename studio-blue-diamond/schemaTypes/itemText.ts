import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'itemText',
  title: 'Item de Texto',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 4,
    }),
  ],
})

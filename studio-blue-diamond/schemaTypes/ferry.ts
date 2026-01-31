import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ferry',
  title: 'Ferry',
  type: 'document',
  fields: [
    defineField({
      name: 'numeroRuta',
      title: 'Número de Ruta',
      type: 'string',
      description: 'Ej: Route 1, Route 1.1, Route 2',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rutaPrincipal',
      title: 'Ruta Principal',
      type: 'string',
      description: 'Ej: San Cristóbal-Santa Cruz, Santa Cruz-Isabela',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'checkInMuelle',
      title: 'Check-in en Muelle',
      type: 'string',
      description: 'Ej: 6:15 AM',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lugarSalida',
      title: 'Lugar de Salida',
      type: 'string',
      description: 'Ej: San Cristóbal, Santa Cruz, Isabela',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'horaSalida',
      title: 'Hora de Salida',
      type: 'string',
      description: 'Ej: 7 AM',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lugarLlegada',
      title: 'Lugar de Llegada',
      type: 'string',
      description: 'Ej: Santa Cruz, Isabela',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'horaLlegada',
      title: 'Hora de Llegada',
      type: 'string',
      description: 'Ej: 9 AM',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'activo',
      title: 'Activo',
      type: 'boolean',
      description: 'Mostrar este horario en la página',
      initialValue: true,
    }),
    defineField({
      name: 'orden',
      title: 'Orden',
      type: 'number',
      description: 'Orden de aparición en la tabla (menor número aparece primero)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'rutaPrincipal',
      subtitle: 'numeroRuta',
      horaSalida: 'horaSalida',
      activo: 'activo',
    },
    prepare(selection) {
      const {title, subtitle, horaSalida, activo} = selection
      return {
        title: `${subtitle}: ${title}`,
        subtitle: `Salida: ${horaSalida}${activo ? '' : ' (Inactivo)'}`,
      }
    },
  },
})

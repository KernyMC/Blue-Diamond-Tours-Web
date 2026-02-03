import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'document',
  fields: [
    defineField({
      name: 'texto',
      title: 'Texto',
      type: 'string',
      description: 'Texto descriptivo del enlace',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'URL del enlace',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'redSocial',
      title: 'Red Social',
      type: 'string',
      description: 'Nombre de la red social',
      options: {
        list: [
          {title: 'Facebook', value: 'facebook'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'Twitter/X', value: 'twitter'},
          {title: 'LinkedIn', value: 'linkedin'},
          {title: 'YouTube', value: 'youtube'},
          {title: 'TikTok', value: 'tiktok'},
          {title: 'Pinterest', value: 'pinterest'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'texto',
      subtitle: 'redSocial',
    },
  },
})

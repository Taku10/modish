export default {
    name: 'instagram',
    title: 'Instagram',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'photographer',
        title: 'Photographer',
        type: 'string',
      },
      { 
        name: 'caption',
        title: 'Caption',
        type: 'text',
      },
    ]
  }
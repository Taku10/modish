export default {
    name: 'navbanner',
    title: 'Navbanner',
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
        name: 'title',
        title: 'title',
        type: 'string',
      },
    ]
  }
export default {
    name: 'accessories_category',
    title: 'Accessories-Category',
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
        title: 'Title',
        type: 'string',
      },
    ]
  }
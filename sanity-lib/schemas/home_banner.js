export default {
    name: 'home_banner',
    title: 'Home-Banner',
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
      { 
        name: 'collection',
        title: 'Collection',
        type: 'string',
      },
      
      { 
        name: 'arrival',
        title: 'Arrival',
        type: 'string',
      },
      { 
        name: 'shopbutton',
        title: 'Shopbutton',
        type: 'string',
      }
    ]
  }
  

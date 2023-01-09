export default {
    name: 'products',
    title: 'Products',
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
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 90,
        }
      },
      { 
        name: 'category',
        title: 'Category',
        type: 'string',
      }, 
      { 
        name: 'sub_category',
        title: 'Sub_Category',
        type: 'string',
      },
      { 
        name: 'sale',
        title: 'Sale',
        type: 'boolean',
      },
      { 
        name: 'newl',
        title: 'New',
        type: 'boolean',
      },
      { 
        name: 'bestseller',
        title: 'Bestseller',
        type: 'boolean',
      },
      { 
        name: 'featured',
        title: 'Featured',
        type: 'boolean',
      },
      { 
        name: 'top_rate',
        title: 'Top_Rate',
        type: 'boolean',
      },                       
      
    ]
  }
  

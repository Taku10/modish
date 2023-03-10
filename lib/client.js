import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '91wqx4zk',
    dataset: 'production',
    apiVersion: '2022-12-22',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageBuilder(client)

export const urlFor = (source)=>builder.image(source);
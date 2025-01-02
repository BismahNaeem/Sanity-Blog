import { type SchemaTypeDefinition } from 'sanity'
import { Hero } from './hero'
import { Blog } from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Hero , Blog],
}

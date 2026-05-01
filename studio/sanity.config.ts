import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Freelance Website',
  basePath: "/studio",

  projectId: 'xtdehwie',
  dataset: 'dev',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
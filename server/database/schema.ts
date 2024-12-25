import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const ideas = sqliteTable('ideas', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  category: text('category').notNull(),
  timestamp: integer('timestamp', { mode: 'timestamp' }).notNull(),
  votes: integer('votes').notNull(),
  isAiGenerated: integer('is_ai_generated', { mode: 'boolean' }).notNull(),
})

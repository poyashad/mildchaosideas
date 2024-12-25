import { tables, useDrizzle } from '~/server/utils/drizzle'

export default eventHandler(async () => {
  const ideas = await useDrizzle().select().from(tables.ideas).all()

  return ideas
})

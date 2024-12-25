import type { Idea } from '../utils/drizzle'
import { tables, useDrizzle } from '../utils/drizzle'

export default defineTask({
  meta: {
    name: 'db:seed',
    description: 'Run database seed task',
  },
  async run() {
    console.log('Running DB seed task...')
    const ideas = [
      {
        id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
        title: 'Rotate Family Photos',
        description:
          'Rotate all the family photos on the wall slightly to the left.',
        category: 'home_decoration',
        timestamp: new Date(),
        votes: 0,
        isAiGenerated: true,
      },
      {
        id: '7e9d5eb7-8c44-4f1a-9aa1-b01e90b12345',
        title: 'Adjust House Clocks',
        description:
          "Set all the clocks in your house to be 7 minutes fast. Don't tell anyone.",
        category: 'time_manipulation',
        timestamp: new Date(),
        votes: 0,
        isAiGenerated: true,
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440000',
        title: 'Stapler Swap',
        description:
          "Swap your coworker's stapler with yours (bonus if they're identical).",
        category: 'office_prank',
        timestamp: new Date(),
        votes: 0,
        isAiGenerated: true,
      },
      {
        id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
        title: 'Shoe Direction Change',
        description:
          'Turn one shoe of each pair in your shoe rack to face the wrong direction.',
        category: 'home_organization',
        timestamp: new Date(),
        votes: 0,
        isAiGenerated: true,
      },
      {
        id: '6ba7b811-9dad-11d1-80b4-00c04fd430c8',
        title: 'Mysterious Text',
        description:
          'Send someone a text saying, "Nevermind, wrong person." Then don\'t elaborate.',
        category: 'communication',
        timestamp: new Date(),
        votes: 0,
        isAiGenerated: true,
      },
      {
        id: '6ba7b812-9dad-11d1-80b4-00c04fd430c8',
        title: 'Loose Jar Lids',
        description: 'Slightly loosen the lids on all the jars in the fridge.',
        category: 'kitchen',
        timestamp: new Date(),
        votes: 0,
        isAiGenerated: true,
      },
      {
        id: '6ba7b813-9dad-11d1-80b4-00c04fd430c8',
        title: 'Cereal Storage Swap',
        description:
          'Put the cereal box where the bowls go and the bowls where the cereal goes.',
        category: 'kitchen',
        timestamp: new Date(),
        votes: 0,
        isAiGenerated: true,
      },
      {
        id: '6ba7b814-9dad-11d1-80b4-00c04fd430c8',
        title: 'Fake Meeting Notice',
        description:
          "Print a fake meeting invitation, stick it on a random colleague's desk, and watch.",
        category: 'office_prank',
        timestamp: new Date(),
        votes: 0,
        isAiGenerated: true,
      },
      {
        id: '6ba7b815-9dad-11d1-80b4-00c04fd430c8',
        title: 'Mismatched Lightbulb',
        description:
          'Replace one of the lightbulbs in a multi-light fixture with a different color.',
        category: 'home_decoration',
        timestamp: new Date(),
        votes: 0,
        isAiGenerated: true,
      },
      {
        id: '6ba7b816-9dad-11d1-80b4-00c04fd430c8',
        title: 'Drawer Content Swap',
        description:
          'Randomly swap two drawer contents in your kitchen or workspace.',
        category: 'organization',
        timestamp: new Date(),
        votes: 0,
        isAiGenerated: true,
      },
      {
        id: '6ba7b817-9dad-11d1-80b4-00c04fd430c8',
        title: 'Keyboard Letter Swap',
        description:
          "Carefully swap two letter keycaps on a colleague's keyboard. M and N are perfect candidates.",
        category: 'office_prank',
        timestamp: new Date(),
        votes: 0,
        isAiGenerated: true,
      },
      {
        id: '6ba7b818-9dad-11d1-80b4-00c04fd430c8',
        title: 'Reverse Book Order',
        description:
          'Rearrange all books on a shelf to face spine-inward. Watch people try to find their books.',
        category: 'home_organization',
        timestamp: new Date(),
        votes: 0,
        isAiGenerated: true,
      },
      {
        id: '6ba7b819-9dad-11d1-80b4-00c04fd430c8',
        title: 'Silent Phone Mode',
        description:
          "Change everyone's phone ringtone to silent during lunch break. Deny all involvement.",
        category: 'office_prank',
        timestamp: new Date(),
        votes: 0,
        isAiGenerated: true,
      },
      {
        id: '6ba7b820-9dad-11d1-80b4-00c04fd430c8',
        title: 'Spice Jar Shuffle',
        description:
          "Switch the contents of the salt and sugar containers. Perfect for April Fools'!",
        category: 'kitchen',
        timestamp: new Date(),
        votes: 0,
        isAiGenerated: true,
      },
      {
        id: '6ba7b821-9dad-11d1-80b4-00c04fd430c8',
        title: 'Calendar Confusion',
        description:
          'Change all office calendars to show a different month. Watch the meeting chaos unfold.',
        category: 'time_manipulation',
        timestamp: new Date(),
        votes: 0,
        isAiGenerated: true,
      },
      {
        id: '6ba7b822-9dad-11d1-80b4-00c04fd430c8',
        title: 'Furniture Shift',
        description:
          'Move all furniture in a room exactly 2 inches to the left. See who notices.',
        category: 'home_decoration',
        timestamp: new Date(),
        votes: 0,
        isAiGenerated: true,
      },
    ]
    await useDrizzle()
      .insert(tables.ideas)
      .values(ideas as Idea[])
    return { result: 'success' }
  },
})

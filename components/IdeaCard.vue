<template>
  <Card
    class="w-full max-w-md transition-transform transform hover:scale-105 bg-white shadow-md"
  >
    <CardHeader>
      <CardTitle
        class="text-lg flex justify-between items-center text-gray-900 font-serif"
      >
        {{ idea.title }}
        <Badge variant="secondary" class="bg-gray-200 text-gray-700">{{
          categoryToName(idea.category)
        }}</Badge>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p class="text-gray-700">{{ idea.description }}</p>
    </CardContent>
    <CardFooter class="flex justify-between">
      <div class="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          class="text-gray-700 border-gray-300"
          @click="handleVote('up')"
        >
          👍 {{ idea.votes.up }}
        </Button>
        <Button
          variant="outline"
          size="sm"
          class="text-gray-700 border-gray-300"
          @click="handleVote('down')"
        >
          👎 {{ idea.votes.down }}
        </Button>
      </div>
      <Button
        variant="secondary"
        size="sm"
        class="bg-gray-200 text-gray-700"
        @click="handleShare"
      >
        Share
      </Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import { useToast } from '@/components/ui/toast/use-toast'

interface Props {
  idea: {
    id: string
    title: string
    description: string
    category: string
    votes: { up: number; down: number }
  }
}

const props = defineProps<Props>()
const emit = defineEmits(['update-votes', 'vote'])

const { toast } = useToast()

const handleVote = (type: 'up' | 'down') => {
  emit('update-votes', props.idea.id, type)
}

const handleShare = () => {
  navigator.clipboard.writeText(
    `Check out this startup idea: ${props.idea.title} - ${props.idea.description}`
  )
  toast({
    title: 'Copied to clipboard',
    description: 'You can now share this idea with others!',
  })
}

const categoryToName = (category: string) => {
  return category.replace('_', ' ')
}
</script>

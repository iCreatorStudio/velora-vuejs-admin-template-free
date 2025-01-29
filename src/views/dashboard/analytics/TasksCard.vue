<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'

interface Task {
  id: number
  title: string
  date: string
  progress: string
  comments: number
  assignee: {
    avatar: string
    name: string
  }
  completed: boolean
}

const tasks = ref<Task[]>([
  {
    id: 1,
    title: 'Extend the data model',
    date: 'August 05, 2021',
    progress: '2/7',
    comments: 3,
    assignee: {
      avatar: avatar1,
      name: 'John Doe',
    },
    completed: true,
  },
  {
    id: 2,
    title: 'Verify the event flow',
    date: 'January 01, 2019',
    progress: '3/10',
    comments: 6,
    assignee: {
      avatar: avatar2,
      name: 'Jane Smith',
    },
    completed: false,
  },
  {
    id: 3,
    title: 'Database backup and maintenance',
    date: 'December 28, 2018',
    progress: '0/6',
    comments: 1,
    assignee: {
      avatar: avatar3,
      name: 'Bob Wilson',
    },
    completed: false,
  },
  {
    id: 4,
    title: 'Identify the implementation team',
    date: 'November 11, 2020',
    progress: '6/10',
    comments: 12,
    assignee: {
      avatar: avatar4,
      name: 'Alice Brown',
    },
    completed: true,
  },
  {
    id: 5,
    title: 'Define users and workflow',
    date: 'November 14, 2021',
    progress: '3/7',
    comments: 5,
    assignee: {
      avatar: avatar5,
      name: 'Charlie Davis',
    },
    completed: false,
  },
  {
    id: 6,
    title: 'Check Pull Requests',
    date: 'February 11, 2021',
    progress: '2/9',
    comments: 3,
    assignee: {
      avatar: avatar6,
      name: 'Eva Green',
    },
    completed: true,
  },
])
</script>

<template>
  <VCard>
    <VCardTitle class="text-h6 pt-4 pb-2">
      Tasks
    </VCardTitle>
    <VCardText>
      <VList>
        <VListItem
          v-for="task in tasks"
          :key="task.id"
          :class="{ 'text-grey': task.completed }"
        >
          <template #prepend>
            <VCheckbox
              v-model="task.completed"
              :color="task.completed ? 'success' : 'primary'"
              hide-details
              class="me-3"
            />
          </template>

          <VListItemTitle :class="{ 'text-decoration-line-through': task.completed }">
            {{ task.title }}
          </VListItemTitle>

          <template #append>
            <div class="d-flex align-center gap-3">
              <VChip
                size="small"
                :color="task.completed ? 'success' : 'primary'"
                variant="tonal"
              >
                {{ task.progress }}
              </VChip>
              <VIcon
                size="small"
                icon="bx-message"
              />
              <span class="text-caption">{{ task.comments }}</span>
              <VAvatar size="32">
                <VImg
                  :src="task.assignee.avatar"
                  :alt="task.assignee.name"
                />
              </VAvatar>
            </div>
          </template>

          <template #subtitle>
            <span class="text-caption">{{ task.date }}</span>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style scoped>
.gap-3 {
  gap: 12px;
}
</style>

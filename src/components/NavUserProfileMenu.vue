<script lang="ts" setup>
import avatar from '@images/avatars/avatar-6.png'

const user = ref()

onMounted(() => user.value = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData') as any) : {})
</script>

<template>
  <VAvatar class="cursor-pointer">
    <VImg :src="avatar" />

    <VMenu activator="parent">
      <VList>
        <VListItem
          v-if="user"
          :append-avatar="avatar"
        >
          <VListItemTitle>{{ user.fullName || 'John Doe' }}</VListItemTitle>
          <VListItemSubtitle>{{ user.email || 'admin@admin.com' }}</VListItemSubtitle>
        </VListItem>
        <VDivider class="mt-2" />
        <VListItem
          v-for="item in [{ title: 'Home', icon: 'bx-home' },
                          { title: 'Profile', icon: 'bx-user' },
                          { title: 'Settings', icon: 'bx-cog' }]"
          :key="item.title"
          :value="item.title"
          :append-icon="item.icon"
        >
          <VListItemTitle>{{ item.title }}</VListItemTitle>
        </VListItem>
        <VDivider />
        <VListItem
          append-icon="bx-log-out"
          to="/login"
        >
          <VListItemTitle>Logout</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </VAvatar>
</template>

<template>
  <VCard>
    <VCardItem class="bg-success">
      <VCardTitle>My Task</VCardTitle>
      <VCardSubtitle>Sept 16, 2019</VCardSubtitle>
    </VCardItem>

    <VList
      lines="three"
      select-strategy="classic"
    >
      <VListSubheader>General</VListSubheader>

      <VListItem value="mobile-app">
        <template #prepend="{ isActive }">
          <VListItemAction start>
            <VCheckboxBtn :model-value="isActive" />
          </VListItemAction>
        </template>

        <VListItemTitle class="mb-1">
          Create Mobile App UI.
        </VListItemTitle>

        <VListItemSubtitle>
          <VChip
            label
            color="success"
            density="comfortable"
          >
            <span class="text-xs">Mobile App</span>
          </VChip>
        </VListItemSubtitle>

        <template #append>
          <VListItemAction>
            <span class="text-xs">Today</span>
          </VListItemAction>
        </template>
      </VListItem>

      <VListItem value="web-api">
        <template #prepend="{ isActive }">
          <VListItemAction start>
            <VCheckboxBtn :model-value="isActive" />
          </VListItemAction>
        </template>

        <VListItemTitle class="mb-1">
          Check the new API standerds.
        </VListItemTitle>

        <VListItemSubtitle>
          <VChip
            label
            color="error"
            density="comfortable"
          >
            <span class="text-xs">Web API</span>
          </VChip>
        </VListItemSubtitle>

        <template #append>
          <VListItemAction>
            <span class="text-xs">Monday</span>
          </VListItemAction>
        </template>
      </VListItem>

      <VListItem value="mock-up">
        <template #prepend="{ isActive }">
          <VListItemAction start>
            <VCheckboxBtn :model-value="isActive" />
          </VListItemAction>
        </template>

        <VListItemTitle class="mb-1">
          Check the new Mockup of ABC.
        </VListItemTitle>

        <VListItemSubtitle>
          <VChip
            label
            color="info"
            density="comfortable"
          >
            <span class="text-xs">Mockup</span>
          </VChip>
        </VListItemSubtitle>

        <template #append>
          <VListItemAction>
            <span class="text-xs">Wednesday</span>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VCard>
</template>

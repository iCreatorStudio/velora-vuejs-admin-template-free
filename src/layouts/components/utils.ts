import { useRoute } from 'vue-router'
import type { HorizontalMenuItem, VerticalMenuItem } from './types'

type MenuItem = HorizontalMenuItem | VerticalMenuItem

export const isNavLinkActive = (item: MenuItem): boolean => {
  const route = useRoute()

  if (item.to)
    return item.to.name === route.name

  return false
}

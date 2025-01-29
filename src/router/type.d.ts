type LayoutOptions = 'content' | 'blank'

declare module 'vue-router' {
  interface RouteMeta {
    layout: LayoutOptions
    redirectIfLoggedIn?: boolean
    requiresAuth?: boolean
  }
}

export interface VerticalNav {
  path: string
  name: string
  component: () => Promise<unknown>
  meta: {
    layout: LayoutOptions
    redirectIfLoggedIn?: boolean
    requiresAuth?: boolean
  }

}

import type { VerticalMenuItem } from '@/layouts/components/types'

export default [
  { heading: 'Menus' },
  {
    name: 'Dashboard',
    icon: 'bxs-dashboard',
    children: [
      { name: 'eCommerce', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/dashboard/ecommerce', target: '_blank' },
      { name: 'Analytics', icon: 'bxs-circle', to: { name: 'dashboard-analytics' } },
      { name: 'Operations', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/dashboard/operations', target: '_blank' },
      { name: 'CRM', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/dashboard/crm', target: '_blank' },
    ],
  },
  { heading: 'Apps' },
  {
    name: 'Products',
    icon: 'bx-cube',
    children: [
      { name: 'List', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/ecommerce/products/list', target: '_blank' },
      { name: 'Overview', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/ecommerce/products/overview', target: '_blank' },
      { name: 'Edit', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/ecommerce/products/edit', target: '_blank' },
      { name: 'Add', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/ecommerce/products/add', target: '_blank' },
    ],
  },
  {
    name: 'Order',
    icon: 'bx-cart',
    children: [
      { name: 'List', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/ecommerce/order/list', target: '_blank' },
      { name: 'Overview', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/ecommerce/order/overview', target: '_blank' },
    ],
  },
  {
    name: 'Academy',
    icon: 'bx-file',
    children: [
      { name: 'Dashboard', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/ecommerce/academy/dashboard', target: '_blank' },
      { name: 'Explore', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/ecommerce/academy/explore', target: '_blank' },
      { name: 'Details', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/ecommerce/academy/details', target: '_blank' },
    ],
  },
  {
    name: 'Jobs',
    icon: 'bx-briefcase',
    children: [
      { name: 'List', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/ecommerce/jobs/list', target: '_blank' },
      { name: 'Details', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/ecommerce/jobs/details', target: '_blank' },
    ],
  },
  {
    name: 'Restaurant',
    icon: 'bx-store',
    children: [
      { name: 'Menu', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/ecommerce/restaurant/menu', target: '_blank' },
      { name: 'Orders', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/ecommerce/restaurant/orders', target: '_blank' },
    ],
  },
  { heading: 'Pages' },
  {
    name: 'Search',
    icon: 'bx-search',
    to: { name: 'search' },
  },
  {
    name: 'Pricing',
    icon: 'bx-dollar',
    href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/pages/pricing',
    target: '_blank',
  },
  {
    name: 'FAQs',
    icon: 'bx-help-circle',
    href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/pages/faq',
    target: '_blank',
  },
  {
    name: 'Crypto',
    icon: 'bx-bitcoin',
    to: { name: 'pages-crypto' },
  },
  {
    name: 'Card Examples',
    icon: 'bx-square',
    to: { name: 'pages-cards' },
  },
  {
    name: 'Authentications',
    icon: 'bx-shield-quarter',
    children: [
      { name: 'Login', icon: 'bxs-circle', to: { name: 'login' }, target: '_blank' },
      { name: 'Login v2', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/auth/login-v2', target: '_blank' },
      { name: 'Register', icon: 'bxs-circle', to: { name: 'register' }, target: '_blank' },
      { name: 'Register v2', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/auth/register-v2', target: '_blank' },
      { name: 'Forgot Password', icon: 'bxs-circle', to: { name: 'forgot-password' }, target: '_blank' },
      { name: 'Forgot Password v2', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/auth/forgot-password-v2', target: '_blank' },
      { name: 'Reset Password', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/auth/reset-password', target: '_blank' },
      { name: 'Reset Password v2', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/auth/reset-password-v2', target: '_blank' },
    ],
  },
  {
    name: 'Frontend',
    icon: 'bx-globe',
    children: [
      { name: 'Landing Page', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/front-end/landing', target: '_blank' },
    ],
  },
  { heading: 'UI Elements' },
  {
    name: 'Extensions',
    icon: 'bx-extension',
    children: [
      { name: 'Quill Editor', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/extensions/quill-editor', target: '_blank' },
      { name: 'Tiptap Editor', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/extensions/tiptap-editor', target: '_blank' },
      { name: 'Toastify', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/extensions/toastify', target: '_blank' },
      { name: 'Map - Leaflet', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/extensions/map', target: '_blank' },
      { name: 'Masonry Wall', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/extensions/masonry-wall', target: '_blank' },
      { name: 'Sortable', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/extensions/sortable', target: '_blank' },
      { name: 'Drop Zone', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/extensions/drop-zone', target: '_blank' },
      { name: 'Date Picker', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/extensions/date-picker', target: '_blank' },
      { name: 'Cleave Input', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/extensions/cleave-input', target: '_blank' },
      { name: 'Swiper', icon: 'bxs-circle', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/extensions/swiper', target: '_blank' },
    ],
  },
  { heading: 'Forms & Tables' },
  { name: 'Forms Advertising', icon: 'bx-clipboard', to: { name: 'forms-example-advertising' } },
  { name: 'Tables', icon: 'bx-grid-alt', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/tables', target: '_blank' },
  { name: 'Datatables', icon: 'bx-grid', href: 'https://demos.icreatorstudio.com/velora-vuejs-vuetify-admin-template/demo-1/datatables', target: '_blank' },
  { name: 'Documentation', icon: 'bx-file', href: 'https://docs.icreatorstudio.com/velora-vuejs-vuetify-admin-template-docs/', target: '_blank' },
] as VerticalMenuItem[]

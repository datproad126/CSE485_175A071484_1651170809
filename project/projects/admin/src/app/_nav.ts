interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    },
    attributes: { disabled: true }
  },
  {
    title: true,
    name: 'Admin'
  },
  {
    name: 'post',
    url: '/admin/post',
    icon: 'icon-star'
  },
  {
    name: 'category',
    url: '/admin/category',
    icon: 'icon-star'
  },
  {
    name: 'user',
    url: '/admin/user',
    icon: 'icon-star'
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    icon: 'icon-drop',
    attributes: { disabled: true }
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'icon-pencil',
    attributes: { disabled: true }
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle',
        attributes: { disabled: true }
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'icon-puzzle',
        attributes: { disabled: true }
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'icon-puzzle',
        attributes: { disabled: true }
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'icon-puzzle',
        attributes: { disabled: true }
      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'icon-puzzle',
        attributes: { disabled: true }
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle',
        attributes: { disabled: true }
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'icon-puzzle',
        attributes: { disabled: true }
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle',
        attributes: { disabled: true }
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle',
        attributes: { disabled: true }
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle',
        attributes: { disabled: true }
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle',
        attributes: { disabled: true }
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor',
        attributes: { disabled: true }
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor',
        attributes: { disabled: true }
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor',
        attributes: { disabled: true }
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart',
    attributes: { disabled: true }
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        },
        attributes: { disabled: true }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star',
        attributes: { disabled: true }
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        },
        attributes: { disabled: true }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star',
        attributes: { disabled: true }
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell',
        attributes: { disabled: true }
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell',
        attributes: { disabled: true }
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell',
    attributes: { disabled: true }
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star',
        attributes: { disabled: true },
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star',
        attributes: { disabled: true },
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star',
        attributes: { disabled: true },
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star',
        attributes: { disabled: true },
      }
    ],
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  },
  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'http://coreui.io/pro/angular/',
  //   icon: 'icon-layers',
  //   variant: 'danger',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // }
];

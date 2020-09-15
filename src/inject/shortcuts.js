const apps = [
  {
    label: 'Home',
    url: '/',
    icon: 'home',
    type: 'navigate'
  },
  {
    label: 'Reports',
    url: '/reports',
    icon: 'file-alt',
    type: 'navigate'
  },
  {
    label: 'Events',
    url: '/events',
    icon: 'calendar-alt',
    type: 'navigate'
  },
  {
    label: 'Coaching Logs',
    url: '/coaching',
    icon: 'users',
    type: 'navigate'
  },
  {
    label: 'Walkthroughs',
    url: '/walkthroughs',
    icon: 'clipboard',
    type: 'navigate'
  },
  {
    label: 'Evaluations',
    url: '/evaluations',
    icon: 'comment-alt',
    type: 'navigate'
  },
  {
    label: 'My Account',
    url: '/accounts/manage',
    icon: 'user-circle',
    type: 'navigate'
  },
  {
    label: 'Directory',
    url: '/directory',
    icon: 'address-book',
    type: 'navigate'
  },
  {
    label: 'Campaigns',
    url: '/campaigns',
    icon: 'envelope',
    type: 'navigate'
  },
  {
    label: 'Frameworks',
    url: '/frameworks',
    icon: 'sitemap',
    type: 'navigate'
  },
  {
    label: 'Shared Links',
    url: '/reports/manage/links',
    icon: 'share',
    type: 'navigate'
  },
  {
    label: 'Attributes',
    url: '/manage/attributes',
    icon: 'tags',
    type: 'navigate'
  },
  {
    label: 'Goals',
    url: '/goals',
    icon: 'flag',
    type: 'navigate'
  },
  {
    label: 'Surveys',
    url: '/manage/surveys',
    icon: 'clipboard',
    type: 'navigate'
  },
  {
    label: 'Auth Tokens',
    url: '/manage/auth-tokens',
    icon: 'coins',
    type: 'navigate'
  },
  {
    label: 'Switch District',
    url: '/switch_district',
    icon: 'building',
    type: 'navigate'
  },
  {
    label: 'Stop Impersonating',
    url: '/impersonate/stop',
    icon: 'theater-masks',
    type: 'navigate'
  },
];

const impersonate = [
  {
    label: 'Brock Boulder',
    sublabel: 'Impersonate',
    url: '/impersonate/12358',
    icon: 'user-secret',
    type: 'navigate'
  },
  {
    label: 'Bill Nye',
    sublabel: 'Impersonate',
    url: '/impersonate/4340',
    icon: 'user-secret',
    type: 'navigate'
  },
  {
    label: 'Ash Catchem',
    sublabel: 'Impersonate',
    url: '/impersonate/12357',
    icon: 'user-secret',
    type: 'navigate'
  },
  {
    label: 'Admin User',
    sublabel: 'Impersonate',
    url: '/impersonate/53411',
    icon: 'user-secret',
    type: 'navigate'
  },
];

const evaluations = [
  // {
  //   label: 'Sample Online/Blended Teacher Evaluation Cycle',
  //   sublabel: 'Evaluations',
  //   url: '/evaluations/13/roster/',
  //   icon: 'comment-alt'
  // }
];

const events = [
  // {
  //   label: 'Blended Learning 101 Workshop',
  //   sublabel: 'Events',
  //   url: '/events/browse/sJYc2yNxxqgPXK8eYkDq6D',
  //   icon: 'calendar-alt'
  // }
];

const actions = [
  {
    label: 'Open on staging',
    icon: 'link',
    type: 'open_staging_URL'
  },
  {
    label: 'Open locally',
    icon: 'link',
    type: 'open_local_URL'
  },
  {
    label: 'Log in modal',
    icon: 'lock',
    type: 'modal_login'
  },
];

const shortcuts = [
  ...apps,
  ...impersonate,
  ...evaluations,
  ...events,
  ...actions,
];
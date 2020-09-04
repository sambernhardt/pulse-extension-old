const apps = [
  {
    label: 'Home',
    url: '/',
    icon: 'home'
  },
  {
    label: 'Reports',
    url: '/reports',
    icon: 'file-alt'
  },
  {
    label: 'Events',
    url: '/events',
    icon: 'calendar-alt'
  },
  {
    label: 'Coaching Logs',
    url: '/coaching',
    icon: 'users'
  },
  {
    label: 'Walkthroughs',
    url: '/walkthroughs',
    icon: 'clipboard'
  },
  {
    label: 'Evaluations',
    url: '/evaluations',
    icon: 'comment-alt'
  },
  {
    label: 'My Account',
    url: '/accounts/manage',
    icon: 'user-circle'
  },
  {
    label: 'Directory',
    url: '/directory',
    icon: 'address-book'
  },
  {
    label: 'Campaigns',
    url: '/campaigns',
    icon: 'envelope'
  },
  {
    label: 'Frameworks',
    url: '/frameworks',
    icon: 'sitemap'
  },
  {
    label: 'Shared Links',
    url: '/reports/manage/links',
    icon: 'share'
  },
  {
    label: 'Attributes',
    url: '/manage/attributes',
    icon: 'tags'
  },
  {
    label: 'Goals',
    url: '/goals',
    icon: 'flag'
  },
  {
    label: 'Surveys',
    url: '/manage/surveys',
    icon: 'clipboard'
  },
  {
    label: 'Auth Tokens',
    url: '/manage/auth-tokens',
    icon: 'coins'
  },
  {
    label: 'Switch District',
    url: '/switch_district',
    icon: 'building'
  },
  {
    label: 'Stop Impersonating',
    url: '/impersonate/stop',
    icon: 'theater-masks'
  },
];

const impersonate = [
  {
    label: 'Brock Boulder',
    sublabel: 'Impersonate',
    url: '/impersonate/12358',
    icon: 'user-secret'
  },
  {
    label: 'Bill Nye',
    sublabel: 'Impersonate',
    url: '/impersonate/4340',
    icon: 'user-secret'
  },
  {
    label: 'Ash Catchem',
    sublabel: 'Impersonate',
    url: '/impersonate/12357',
    icon: 'user-secret'
  },
];

const evaluations = [
  {
    label: 'Sample Online/Blended Teacher Evaluation Cycle',
    sublabel: 'Evaluations',
    url: '/evaluations/13/roster/',
    icon: 'comment-alt'
  }
];

const events = [
  {
    label: 'Blended Learning 101 Workshop',
    sublabel: 'Events',
    url: '/events/browse/sJYc2yNxxqgPXK8eYkDq6D',
    icon: 'calendar-alt'
  }
];

const shortcuts = [
  ...apps,
  ...impersonate,
  ...evaluations,
  ...events,
];
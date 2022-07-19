// gitprofile.config.js

const config = {
  github: {
    username: 'esareynor', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'rachmanesa',
    twitter: 'rachmanesa99',
    facebook: '',
    instagram: 'esareynor',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'esareynor',
    website: 'https://rachmanesa.com/',
    phone: '',
    email: 'esareynor99@gmail.com',
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'React Native',
    'MySQL',
    'Git',
    'PHPUnit',
    'CSS',
    'Bootstrap',
  ],
  experiences: [
    {
      company: 'IMNI.CO.ID',
      position: 'E-Commerce (Full-Stack Developer)',
      from: '2017',
      to: '2017',
    },{
      company: 'Research and Develompent Office of East Java Province, Indonesia',
      position: 'Regional Research Information App (Full-Stack Developer)',
      from: '2019',
      to: '2019',
    },
    ,{
      company: 'Rosokku',
      position: 'Rosokku App (Mobile Developer)',
      from: '2020',
      to: '2020',
    },
    ,{
      company: 'CV. Nusantara Beton',
      position: 'ERP for Production, Marketing, and Inventory (Full-Stack Developer)',
      from: '2021',
      to: '2021',
    },
    ,{
      company: 'Wofwooden',
      position: 'Official E-Commerce (Full-Stack Developer)',
      from: '2021',
      to: '2021',
    },
    ,{
      company: 'PT. TATA CIPTA TEKNOLOGI INDONESIA',
      position: 'E-Government (Full-Stack Developer)',
      from: '2021',
      to: '2021',
    },
    ,{
      company: 'Pertamina Training and Consulting',
      position: 'Event Report App (Full-Stack Developer)',
      from: '2022',
      to: '2022',
    },
    ,{
      company: 'WakeUpMakeUp',
      position: 'Official E-Commerce (Full-Stack Developer)',
      from: '2022',
      to: '2022',
    },
    ,{
      company: 'PT. IDE Sehati',
      position: 'Accountant App (Full-Stack and Mobile Developer)',
      from: '2022',
      to: '2022',
    },
  ],
  education: [
    {
      institution: 'University of Pembangunan Nasional "Veteran", East Java, Indonesia ',
      degree: 'Bachelor of Computer Science',
      from: '2017',
      to: '2022',
    },
    {
      institution: 'Vocational High School of Pungging, East Java, Indonesia',
      degree: 'Diploma of Multimedia',
      from: '2014',
      to: '2017',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn',
  //   limit: 3, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;

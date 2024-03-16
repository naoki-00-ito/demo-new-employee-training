import updateEnvPath from '@/libs/updateEnvPath';

const links = [
  {
    name: 'HTML Only',
    href: updateEnvPath('/html-only'),
  },
  {
    name: 'HTML + CSS',
    href: updateEnvPath('/html-css'),
  },
  {
    name: updateEnvPath('HTML + CSS + JavaScript'),
    href: updateEnvPath('/'),
  },
];

export default links;

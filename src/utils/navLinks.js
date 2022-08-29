import { IoHome, IoInformationCircle, IoGameController } from 'react-icons/io5';

export const navLinks = [
  { name: 'home', path: '/', icon: <IoHome className='icon' /> },
  {
    name: 'products',
    path: '/products',
    icon: <IoGameController className='icon' />,
  },
  {
    name: 'about',
    path: '/about',
    icon: <IoInformationCircle className='icon' />,
  },
];

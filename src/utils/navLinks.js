import {
  IoHome,
  IoInformationCircle,
  IoGameController,
  IoPersonAdd,
  IoCart,
} from 'react-icons/io5';

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
  {
    name: 'cart',
    path: '/cart',
    icon: <IoCart className='icon' />,
  },
  {
    name: 'login',
    path: '/login',
    icon: <IoPersonAdd className='icon' />,
  },
];

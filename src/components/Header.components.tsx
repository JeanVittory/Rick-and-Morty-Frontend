import logo from '../assets/main-logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { MdOutlineMenu } from 'react-icons/md';
import { IconContext } from 'react-icons';

export const Header = () => {
  return (
    <header className='w-full bg-[#c7f9cc] flex items-center justify-between px-6 py-4 md:px-10'>
      <Link to='/'>
        <img src={logo} alt='Logo' className='w-32 md:w-40' />
      </Link>
      <nav className='hidden md:flex gap-6'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `font-nunito tracking-wider text-sm ${isActive ? 'font-bold' : ''}`
          }
        >
          HOME
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            `font-nunito tracking-wider text-sm ${isActive ? 'font-bold' : ''}`
          }
        >
          CONTACT
        </NavLink>
        <NavLink
          to='/support'
          className={({ isActive }) =>
            `font-nunito tracking-wider text-sm ${isActive ? 'font-bold' : ''}`
          }
        >
          SUPPORT US
        </NavLink>
      </nav>
      <div className='md:hidden'>
        <IconContext.Provider value={{ size: '1.8rem' }}>
          <MdOutlineMenu />
        </IconContext.Provider>
      </div>
    </header>
  );
};

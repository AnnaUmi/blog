import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import { APP_ROUTES } from './ulils/consts';

const menu = [
  {
    title: 'Posts',
    link: APP_ROUTES.posts,
  },
  {
    title: 'Create Post',
    link: APP_ROUTES.createPost,
  },
];
const Menu = () => (
  <nav>
    <ul>
      {menu.map((menuItem) => (
        <li key={menuItem.title}>
          <NavLink to={menuItem.link} />
          {menuItem.title}
        </li>
      ))}
    </ul>
  </nav>
);

const AppLayout = () => (
  <>
    <Menu />
    <Outlet />
  </>
);
export default AppLayout;

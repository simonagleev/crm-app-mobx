import ChartPage from '../../pages/ChartPage'
import HomePage from '../../pages/HomePage';
import {
ISwitchItem,
} from 'react-declarative';
import OneProfilePage from '../../pages/OneProfilePage';
import ProfilesPage from '../../pages/ProfilesPage';

export const routes: ISwitchItem[] = [
    {
      path: '/',
      element: HomePage,
    },
    {
      path: '/profiles-list',
      element: ProfilesPage,
    },
    {
      path: '/one-profile/:id',
      element: OneProfilePage,
    },
    {
      path: '/chart',
      element: ChartPage,
    },
  ];
  
  export default routes;
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
      component: HomePage,
    },
    {
      path: '/profiles-list',
      component: ProfilesPage,
    },
    {
      path: '/one-profile/:id',
      component: OneProfilePage,
    },
    {
      path: '/chart',
      component: ChartPage,
    },
  ];
  
  export default routes;
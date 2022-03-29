import ChartPage from '../../pages/ChartPage'
import HomePage from '../../pages/HomePage/HomePage';
import { ISwitchItem } from 'react-declarative';
import OneProfilePage from '../../pages/OneProfilePage/OneProfilePage';
import ProfilesPage from '../../pages/ProfilesPage/ProfilesPage';

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
      path: '/profiles-list/:id',
      element: OneProfilePage,
    },
    {
      path: '/chart',
      element: ChartPage,
    },
  ];
  
  export default routes;
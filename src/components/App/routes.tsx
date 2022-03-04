import HomePage from '../../pages/HomePage';
import {
ISwitchItem,
} from 'react-declarative';
import ProfilesPage from '../../pages/ProfilesPage';

export const routes: ISwitchItem[] = [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/profiles-;ist',
      component: ProfilesPage,
    },
    
  ];
  
  export default routes;
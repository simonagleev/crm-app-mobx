import { Scaffold, Switch } from "react-declarative";

import ioc from "../../lib/ioc";
import { observer } from "mobx-react";
import options from "./options";
import routes from "./routes";

export const App = () => {
  const handleMenuClick = (name: string) => {
    if (name === 'home-page') {
      ioc.routerService.push('/');
    } else if (name === 'profiles-list') {
      ioc.routerService.push('/profiles-list');
    } else if (name === 'chart') {
      ioc.routerService.push('/chart');
    }
  };
  return (
    <Scaffold onOptionClick={handleMenuClick} title="InfoLink CRM" options={options} >
      <Switch
        Loading={() => <p>Checking permissions (mock)</p>}
        NotFound={() => <p>Not found(</p>}
        history={ioc.routerService}
        items={routes}
      />
    </Scaffold>
  )
}


export default observer(App) as React.FC;

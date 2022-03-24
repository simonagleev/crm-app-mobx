import "./config"

import AlertService from "./base/AlertService";
import PersonService from "./base/PersonService";
import RouterService from "./base/RouterService";
import SessionService from "./base/SessionService";
import TYPES from "./types";
import { inject } from 'react-declarative';

export const ioc = {
    alertService: inject<AlertService>(TYPES.alertService),
    personService: inject<PersonService>(TYPES.personService),
    routerService: inject<RouterService>(TYPES.routerService),
    essionService: inject<SessionService>(TYPES.sessionService),
};

(window as any).ioc = ioc;

export default ioc;

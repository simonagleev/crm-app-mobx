import AlertService from "./base/AlertService";
import PersonService from "./base/PersonService";
import RouterService from "./base/RouterService";
import SessionService from "./base/SessionService";
import TYPES from "./types";
import { provide } from 'react-declarative';

provide(TYPES.alertService, () => new AlertService());
provide(TYPES.routerService, () => new RouterService());
provide(TYPES.personService, () => new PersonService());
provide(TYPES.sessionService, () => new SessionService());

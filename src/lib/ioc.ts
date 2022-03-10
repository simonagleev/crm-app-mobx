import PersonService from "./PersonService";
import RouterService from "./RouterService";
import SessionService from "./SessionService";

const routerService = new RouterService();
const sessionService = new SessionService();


const personService = new PersonService(
    routerService,
);

export const ioc = {
    routerService,
    personService,
    sessionService,
};

export default ioc;
import ApiService from "./ApiService";
import PersonService from "./PersonService";
import RouterService from "./RouterService";
import SessionService from "./SessionService";

const routerService = new RouterService();
const sessionService = new SessionService();

const apiService = new ApiService(
    sessionService,
    routerService,
);
const personService = new PersonService(
    apiService,
    routerService,
);

export const ioc = {
    routerService,
    personService,
    apiService,
    sessionService,
};

export default ioc;
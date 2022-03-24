import { makeAutoObservable } from "mobx";

interface IAlert {
    key: string;
    message: string;
    
}

const randomString = () => (Math.random() + 1).toString(36).substring(7);

export class AlertService {
    
    alerts: IAlert[] = [];

    get current() {
        if (this.alerts.length) {
            return this.alerts[0];
        } else {
            return null;
        }
    };
    
    constructor() {
        makeAutoObservable(this);
    }
    
    hideCurrent = () => {
        if (this.alerts.length > 0) {
            this.alerts.shift();
        }
    };

    notify = (message: string) => {
        this.hideCurrent();
        this.alerts.push({
            key: randomString(),
            message, 
        });
    };
    
}

export default AlertService;
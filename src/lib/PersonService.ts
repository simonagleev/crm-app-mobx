import { action, observable } from "mobx";

import { CC_ERROR } from "../config";
import IPerson from "../model/IPerson";
import RouterService from "../lib/RouterService"
import { makeObservable } from "mobx";
import profiles from '../mock/profiles.json'

class PersonService {
  static one(id: string) {
    throw new Error('Method not implemented.');
  }

  // state = new Map<string, string>();
  
  constructor(
    public routerService: RouterService,
  ) {
    makeObservable(this, {
      list: action.bound,
      // remove: action.bound,
      fallback: action.bound,
      one: action.bound,
      save: action.bound,
      // create: action.bound,
      routerService: observable,
      innerProfiles: observable
    });
  }
  
  innerProfiles = new Map(profiles.map(p => [p.id, p]))
  
  async list(   //Тут берем все данные для списка людей
  ) {  
    return [...this.innerProfiles.values()];    //Раньше тут былв логика получения данных с сервера, а сейчас просто из локального файла profiles.json
  };

  one(id: string) {
    return this.innerProfiles.get(id) || null;
  };

  save(person: IPerson) {
    console.log("SAVE PErson:")
    console.log(person)
    
    return this.innerProfiles.set(person.id, person);
  }

  create(person: IPerson) {
    return this.innerProfiles.set(person.id, person);
  }

  // async remove(person: IPerson) {
  //   await this.apiService.delete(`crud/${person.id}`);
  // };

  fallback(e: Error) {
    this.routerService.push(CC_ERROR);
    console.warn(e);
  }

};

export default PersonService;

import { action, observable } from "mobx";

import ApiService from "./ApiService";
import { CC_ERROR } from "../config";
import IPerson from "../model/IPerson";
import RouterService from "../lib/RouterService"
import { makeObservable } from "mobx";
import profiles from '../mock/profiles.json'

class PersonService {
  static one(id: string) {
    throw new Error('Method not implemented.');
  }

  state = new Map<string, string>();

  constructor(
    public apiService: ApiService,
    public routerService: RouterService,
  ) {
    makeObservable(this, {
      list: action.bound,
      remove: action.bound,
      fallback: action.bound,
      one: action.bound,
      save: action.bound,
      create: action.bound,
      apiService: observable,
      routerService: observable,
    });
  }
  
  
  async list(   //Тут берем все данные для списка людей
  ) {  
    return profiles;    //Раньше тут былв логика получения данных с сервера, а сейчас просто из локального файла profiles.json
  };

  one(id: string): Promise<IPerson | null> {
    console.log('ONE has happened')
    
      return this.apiService.get<IPerson>(`crud/${id}`);
    
  };

  save(person: IPerson) {
    return this.apiService.put(`crud/${person.id}`, person);
  }

  create(person: IPerson) {
    return this.apiService.post(`crud`, person);
  }

  async remove(person: IPerson) {
    await this.apiService.delete(`crud/${person.id}`);
  };

  fallback(e: Error) {
    this.routerService.push(CC_ERROR);
    console.warn(e);
  }

};

export default PersonService;

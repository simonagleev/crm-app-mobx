import { ListHandler, inject } from 'react-declarative';
import { action, computed, observable } from "mobx";

import { CC_ERROR } from "../../config";
import IPerson from "../../model/IPerson";
import RouterService from "./RouterService"
import TYPES from "../types";
import { makeObservable } from "mobx";
import profiles from '../../mock/profiles'

export class PersonService {
  static one(id: string) {
    throw new Error('Method not implemented.');
  }

  // state = new Map<string, string>();
  routerService = inject<RouterService>(TYPES.routerService)
  constructor(
    // public routerService: RouterService,
  ) {
    makeObservable(this, {
      list: action.bound,
      // remove: action.bound,
      fallback: action.bound,
      one: action.bound,
      save: action.bound,
      profilesList: computed,
      // create: action.bound,
      routerService: observable,
      innerProfiles: observable
    });
  }
  
  innerProfiles = new Map(profiles.map(p => [p.id, p]))

  get profilesList() {
    return [...this.innerProfiles.values()];
  }

  list: ListHandler = (data, {
    limit,
    offset,
  }) => {
    return {
      total: this.profilesList.length,
      rows: this.profilesList.slice(offset, limit + offset),
    };
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

  async remove(person: IPerson) {
    // await this.apiService.delete(`crud/${person.id}`);
  };

  fallback(e: Error) {
    this.routerService.push(CC_ERROR);
    console.warn(e);
  }

};

export default PersonService;

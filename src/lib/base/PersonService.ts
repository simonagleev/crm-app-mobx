import { ListHandler, RowId, inject } from 'react-declarative';
import { action, computed, observable } from "mobx";

import AlertService from './AlertService';
import { CC_ERROR } from "../../config";
import IPerson from "../../model/IPerson";
import RouterService from "./RouterService"
import TYPES from "../types";
import { findFlagUrlByCountryName } from "country-flags-svg";
import generatedProfiles from '../../mock/generatedProfiles'
import { makeObservable } from "mobx";
import { v4 as uuid } from 'uuid';

export class PersonService {
  static one(id: string) {
    throw new Error('Method not implemented.');
  }

  routerService = inject<RouterService>(TYPES.routerService)
  alertService = inject<AlertService>(TYPES.alertService)

  
  constructor() {
    makeObservable(this, {
      list: action.bound,
      remove: action.bound,
      fallback: action.bound,
      one: action.bound,
      save: action.bound,
      profilesList: computed,
      routerService: observable,
      innerProfiles: observable
    });
  }
  
  innerProfiles = new Map<RowId, IPerson>(generatedProfiles.map(p => [p.id, p]))

  get profilesList() {
    return [...this.innerProfiles.values()];
  }

  get countryList() {
    const values =  [...this.innerProfiles.values()]
    return values.map(i => i.country)
  }
  
  findCountry(person: IPerson) {
    return person.country
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
    if (id === 'create') {
      return null;
    } else {
      return this.innerProfiles.get(id) || null;
    }
  };

  async save(person: IPerson) {
    if (person.id === 'create') {
      person.id = uuid();
    }
    // await fetch(...
    return this.innerProfiles.set(person.id, person);
  }

  async remove(person: IPerson) {
    this.innerProfiles.delete(person.id)
  };

  delete(rows: RowId[]) {
    rows.forEach(i => {
      this.innerProfiles.delete(i)
    })
  };

  fallback(e: Error) {
    this.routerService.push(CC_ERROR);
    console.warn(e);
  };
};

export default PersonService;

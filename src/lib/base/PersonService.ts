import { ListHandler, RowId, inject } from 'react-declarative';
import { action, computed, observable, toJS } from "mobx";

import AlertService from './AlertService';
import { CC_ERROR } from "../../config";
import IPerson from "../../model/IPerson";
import RouterService from "./RouterService"
import TYPES from "../types";
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
    return [...this.innerProfiles.values()].map((profile) => toJS(profile));
  }

  get countryList() {
    const values =  [...this.innerProfiles.values()]
    return values.map(i => i.country)
  }
   
  list: ListHandler = (filterData, {
    limit,
    offset, 
  }, sort) => {
    let rows = this.profilesList;

    Object.entries(filterData).forEach(([key, value]) => {
      if (value) {
        rows = rows.filter((row) => String(row[key as keyof IPerson]).includes(value as string));
      }
    });

    sort.forEach(({
      field,
      sort,
    }) => {
      rows = rows.sort((a, b) => {
        const value1 = String(a[field as keyof IPerson]);
        const value2 = String(b[field as keyof IPerson]);
        return sort === 'asc' ? value1.localeCompare(value2) : value2.localeCompare(value1);
      });
    });

    rows = rows.slice(offset, limit + offset);

    return {
      rows,
      total: this.profilesList.length,
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

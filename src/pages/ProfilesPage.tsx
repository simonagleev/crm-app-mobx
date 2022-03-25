import {
  ActionType,
  ColumnType,
  FieldType,
  IListAction,
  IListApi,
  ListTyped,
  SelectionMode
} from 'react-declarative';

import IColumn from 'react-declarative/model/IColumn';
import IPerson from '../model/IPerson';
import PersonService from '../lib/base/PersonService';
import RouterService from '../lib/base/RouterService';
import TypedField from 'react-declarative/model/TypedField';
import ioc from '../lib/ioc';
import { observer } from 'mobx-react';
import { useRef } from 'react';

const filters: TypedField[] = [
  {
    type: FieldType.Text,
    name: 'firstName',
    title: 'First name',
  },
  {
    type: FieldType.Text,
    name: 'lastName',
    title: 'Last name',
  }
];

const columns: IColumn[] = [
  {
    type: ColumnType.Text,
    field: 'id',
    headerName: 'ID',
    width: '200px',
  },
  {
    type: ColumnType.Text,
    field: 'firstName',
    headerName: 'First name',
    width: '200px',
  },
  {
    type: ColumnType.Text,
    field: 'lastName',
    headerName: 'Last name',
    width: '200px',
  },
  {
    type: ColumnType.Text,
    field: 'gender',
    headerName: 'Gender',
    width: '200px',
  },
  {
    type: ColumnType.Text,
    field: 'phone',
    headerName: 'Phone number',
    width: '200px',
  },
  {
    type: ColumnType.Text,
    field: 'email',
    headerName: 'Email',
    width: '200px',
  },
  {
    type: ColumnType.Text,
    field: 'country',
    headerName: 'Country',
    width: '200px',
  },
  {
    type: ColumnType.CheckBox,
    field: 'active',
    headerName: 'Active',
    width: '200px',
  },
  {
    type: ColumnType.Action,
    headerName: 'Actions',
    sortable: false,
    width: '150px',
  },
];

const actions: IListAction[] = [
  {
    type: ActionType.Menu,
    options: [
      {
        action: 'create',
        label: 'Create new person',
      }
    ]
  },
];

const rowActions = [
  {
    label: 'Remove person',
    action: 'remove-action',
  },
];

const heightRequest = () => window.innerHeight - 100;
const widthRequest = () => window.innerWidth - 20;

interface IFilterData {
  firstName: string;
  lastName: string;
}


interface IListPagePrivate {
  routerService: RouterService;
  personService: PersonService;
}

export const ProfilesPage = () => {

  const apiRef = useRef<IListApi>(null);

  const handleRemove = async (person: IPerson) => {
    // await ioc.personService.remove(person);        //REMOVE from personservice
    apiRef.current?.reload();
  };

  const handleAction = (name: string) => {
    if(name ==='create'){
      ioc.routerService.push(`/profiles-list/create`);
    }
  }

  const handleClick = (person: IPerson) => {
    console.log(person)
    console.log('TEST NAME: ' + person.firstName)
    ioc.routerService.push(`/profiles-list/${person.id}`);      //переход пo конкретному ID
  };


  return (
    <ListTyped<IFilterData, IPerson>
      ref={apiRef}
      title="Profiles"
      filterLabel="Filters"
      selectionMode={SelectionMode.Multiple}
      heightRequest={heightRequest}
      widthRequest={widthRequest}
      rowActions={rowActions}
      actions={actions}
      filters={filters}
      columns={columns}
      handler={ioc.personService.list}
      fallback={ioc.personService.fallback}
      onRowAction={handleRemove}
      onRowClick={handleClick}
      onAction={handleAction}
    />
  );
};


export default observer(ProfilesPage) as React.FC;
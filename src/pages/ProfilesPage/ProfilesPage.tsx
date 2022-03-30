import {
  ActionType,
  ColumnType,
  FieldType,
  IListAction,
  IListApi,
  ListTyped,
  RowId,
  SelectionMode,
} from 'react-declarative';
import { useRef, useState } from 'react';

import CountryFlag from './components/CountryFlag';
import IColumn from 'react-declarative/model/IColumn';
import IPerson from '../../model/IPerson';
import TypedField from 'react-declarative/model/TypedField';
import ioc from '../../lib/ioc';
import { observer } from 'mobx-react';

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

const columns: IColumn<IPerson>[] = [
  {
    type: ColumnType.Text,
    field: 'id',
    headerName: 'ID',
    width: 'max(15vw, 150px)',
  },
  {
    type: ColumnType.Compute,
    field: 'name',
    headerName: 'Name',
    width: 'max(15vw, 100px)',
    compute: ({ firstName, lastName }) => `${firstName} ${lastName}`,  
  },
  {
    type: ColumnType.Text,
    field: 'gender',
    headerName: 'Gender',
    width: 'max(8vw, 75px)',
  },
  {
    type: ColumnType.Text,
    field: 'phone',
    headerName: 'Phone number',
    width: '10vw',
  },
  {
    type: ColumnType.Text,
    field: 'email',
    headerName: 'Email',
    width: '15vw',
  },
  {
    type: ColumnType.Component,
    field: 'countryFlag',
    headerName: 'Country',
    width: '13vw',
    element: CountryFlag,
  },
  {
    type: ColumnType.CheckBox,
    field: 'active',
    headerName: 'Active',
    width: 'max(5vw, 60px)',
  },
  {
    type: ColumnType.Action,
    headerName: 'Actions',
    sortable: false,
    width: 'max(5vw, 50px)',
  },
];

const actions: IListAction[] = [
  {
    type: ActionType.Menu,
    options: [
      {
        action: 'create',
        label: 'Create a new person',
      },
      {
        action: 'delete',
        label: 'Delete selected',
      },
    ]
  },
];

const rowActions = [
  {
    label: 'Remove this person',
    action: 'remove-action',
  },
];

const heightRequest = () => window.innerHeight - 100;
const widthRequest = () => window.innerWidth - 20;

interface IFilterData {
  firstName: string;
  lastName: string;
}

export const ProfilesPage = () => {

  const apiRef = useRef<IListApi>(null);

  const [selectedRows, setSelectedRows] = useState<RowId[]>([])

  const handleRemove = async (person: IPerson) => {
    await ioc.personService.remove(person);        //REMOVE from personservice
    apiRef.current?.reload();
  };

  const handleAction = (name: string) => {
    if (name === 'create'){
      ioc.routerService.push(`/profiles-list/create`);
    } else if (name === 'delete') {
      ioc.personService.delete(selectedRows);
      apiRef.current?.reload();
      setSelectedRows([]);
      ioc.alertService.notify('Deleted')
    }
  }

  const handleClick = (person: IPerson) => {
    console.log(person)
    console.log('TEST NAME: ' + person.firstName)
    ioc.routerService.push(`/profiles-list/${person.id}`);      //переход пo конкретному ID
  };

  const handleSelectedRows = (rows: RowId[]) => {
    setSelectedRows(rows)
    console.log(rows)
    console.log(ioc.personService.profilesList)
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
      onSelectedRows={handleSelectedRows}
      onRowAction={handleRemove}
      onRowClick={handleClick}
      onAction={handleAction}
    />
  );
};


export default observer(ProfilesPage) as React.FC;
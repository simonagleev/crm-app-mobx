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

import IColumn from 'react-declarative/model/IColumn';
import IPerson from '../model/IPerson';
import TypedField from 'react-declarative/model/TypedField';
import ioc from '../lib/ioc';
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

const columns: IColumn[] = [
  {
    type: ColumnType.Text,
    field: 'id',
    headerName: 'ID',
    width: '20%',
  },
  {
    type: ColumnType.Text,
    field: 'firstName',
    headerName: 'First name',
    width: '10%',
  },
  {
    type: ColumnType.Text,
    field: 'lastName',
    headerName: 'Last name',
    width: '10%',
  },
  {
    type: ColumnType.Text,
    field: 'gender',
    headerName: 'Gender',
    width: '10%',
  },
  {
    type: ColumnType.Text,
    field: 'phone',
    headerName: 'Phone number',
    width: '15%',
  },
  {
    type: ColumnType.Text,
    field: 'email',
    headerName: 'Email',
    width: '15%',
  },
  {
    type: ColumnType.Text,
    field: 'country',
    headerName: 'Country',
    width: '10%',
  },
  {
    type: ColumnType.CheckBox,
    field: 'active',
    headerName: 'Active',
    width: '5%',
  },
  {
    type: ColumnType.Action,
    headerName: 'Actions',
    sortable: false,
    width: '5%',
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
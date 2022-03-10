import {
     ActionType,
     ColumnType,
     FieldType,
     IListAction,
     IListApi,
     ListTyped,
     SelectionMode
} from 'react-declarative';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import IColumn from 'react-declarative/model/IColumn';
import IPerson from '../model/IPerson';
import PersonService from '../lib/PersonService';
import RouterService from '../lib/RouterService';
import TypedField from 'react-declarative/model/TypedField';
import ioc from '../lib/ioc';
import { observer } from 'mobx-react';
import { useRef } from 'react';

// Это handler вместо данных с сервера
// export const handler: IPerson[] = [
//   { id: '1', lastName: 'Snow', firstName: 'Jon', gender: 'M', email: 'hahah@mail.ru', country: 'Germany', age: 35, phone: '88005553535', active: true },
//   { id: '2', lastName: 'Lannister', firstName: 'Cersei', gender: 'F', email: 'hahah@mail.ru', country: 'Germany', age: 42, phone: '88005553535', active: true },
//   { id: '3', lastName: 'Lannister', firstName: 'Jaime', gender: 'M', email: 'hahah@mail.ru', country: 'Germany', age: 45, phone: '88005553535', active: true },
//   { id: '4', lastName: 'Stark', firstName: 'Arya', gender: 'M', email: 'hahah@mail.ru', country: 'Germany', age: 16, phone: '88005553535', active: true },
//   { id: '5', lastName: 'Targaryen', firstName: 'Daenerys', gender: 'F', email: 'hahah@mail.ru', country: 'Germany', age: 34, phone: '88005553535', active: true },
//   { id: '6', lastName: 'Melisandre', firstName: 'null', gender: 'M', email: 'hahah@mail.ru', country: 'Germany', age: 150, phone: '88005553535', active: true },
//   { id: '7', lastName: 'Clifford', firstName: 'Ferrara', gender: 'M', email: 'hahah@mail.ru', country: 'Germany', age: 44, phone: '88005553535', active: true },
//   { id: '8', lastName: 'Frances', firstName: 'Rossini', gender: 'M', email: 'hahah@mail.ru', country: 'Germany', age: 36, phone: '88005553535', active: true },
//   { id: '9', lastName: 'Roxie', firstName: 'Harvey', gender: 'F', email: 'hahah@mail.ru', country: 'Germany', age: 65, phone: '88005553535', active: true },
// ];


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
    type: ActionType.Add,
  },
  {
    type: ActionType.Menu,
    options: [
      {
        label: 'Create new person',
        // icon: Add,
      }
    ]
  },
];

const rowActions = [
    {
      label: 'Remove person',
      action: 'remove-action',
    //   icon: Delete,
    },
  ];

const heightRequest = () => window.innerHeight - 100;
const widthRequest = () => window.innerWidth - 20;

interface IFilterData {
    firstName: string;
    lastName: string;
}


interface IListPageProps {
}

interface IListPagePrivate {
  routerService: RouterService;
  personService: PersonService;
}

export const ProfilesPage = ({
    personService,
    routerService,
  }: IListPageProps & IListPagePrivate) => {

    const apiRef = useRef<IListApi>(null);

    const handleRemove = async (person: IPerson) => {
      // await ioc.personService.remove(person);        //REMOVE from personservice
      await apiRef.current?.reload();
    };
  
    const handleClick = (person: IPerson) => {
      console.log(person)
      console.log('TEST NAME: ' + person.firstName)
      ioc.routerService.push(`/one-profile/${person.id}`);      //переход пo конкретному ID
    };
   //   ${person.id}


    const handleCreate = () => {
      ioc.routerService.push(`/one-profile/create`);
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
      onAction={handleCreate}
      sizeByParent={false}
    />
    );
};


export default observer(ProfilesPage) as React.FC;
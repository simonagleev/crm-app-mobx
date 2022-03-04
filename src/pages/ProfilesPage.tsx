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
import RouterService from '../lib/RouterService';
import TypedField from 'react-declarative/model/TypedField';
import ioc from '../lib/base/ioc';
import { observer } from 'mobx-react';
import { useRef } from 'react';

// Это handler для <ListTyped<IFilterData, IPerson> (массив) - раньше назывался rows
const handler = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', gender: 'M', email: 'hahah@mail.ru', country: 'Germany', age: 35, phone: 88005553535, active: true },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', gender: 'F', email: 'hahah@mail.ru', country: 'Germany', age: 42, phone: 88005553535, active: true },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', gender: 'M', email: 'hahah@mail.ru', country: 'Germany', age: 45, phone: 88005553535, active: true },
  { id: 4, lastName: 'Stark', firstName: 'Arya', gender: 'M', email: 'hahah@mail.ru', country: 'Germany', age: 16, phone: 88005553535, active: true },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', gender: 'F', email: 'hahah@mail.ru', country: 'Germany', age: null, phone: 88005553535, active: true },
  { id: 6, lastName: 'Melisandre', firstName: null, gender: 'M', email: 'hahah@mail.ru', country: 'Germany', age: 150, phone: 88005553535, active: true },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', gender: 'M', email: 'hahah@mail.ru', country: 'Germany', age: 44, phone: 88005553535, active: true },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', gender: 'M', email: 'hahah@mail.ru', country: 'Germany', age: 36, phone: 88005553535, active: true },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', gender: 'F', email: 'hahah@mail.ru', country: 'Germany', age: 65, phone: 88005553535, active: true },
];


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
interface IPerson {
    id: string;
    lastName: string;
    firstName: string;
    gender: string;
}

interface IListPageProps {
}

interface IListPagePrivate {
    
    routerService: RouterService;
  }

  export const ProfilesPage = ({

    routerService,
  }: IListPageProps & IListPagePrivate) => {

    const apiRef = useRef<IListApi>(null);

    // const handleRemove = async (person: IPerson) => {
    // //   await personService.remove(person);
    //   await apiRef.current?.reload();
    // };
  
    const handleClick = (person: IPerson) => {
      console.log('test ' + person.id)
      ioc.routerService.push(`/one-profile/${person.id}`);
      
    };
//   ${person.id}


    // const handleCreate = () => {
    //   routerService.push(`/some-list/create`);
    // };     

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
      handler={handler}
    //   fallback={personService.fallback}
    //   onRowAction={handleRemove}
      onRowClick={handleClick}
    //   onAction={handleCreate}
      sizeByParent={false}
    />
    );
  };


  export default observer(ProfilesPage) as React.FC;
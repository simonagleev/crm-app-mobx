import { Breadcrumbs, FieldType, OneTyped, TypedField } from "react-declarative";

import IPerson from "../lib/model/IPerson";
import RouterService from "../lib/RouterService"
import { observer } from "mobx-react";
import { useState } from "react";

const fields: TypedField<IPerson>[] = [
    {
        type: FieldType.Rating,
        title: 'Pcccc',
      },
    {
      type: FieldType.Line,
      title: 'Profile data',
    },
    {
      name: 'firstName',
      type: FieldType.Text,
      title: 'First name',
      isInvalid({
        firstName,
      }) {
        if (!/\b([A-Za-z]{3,20}$)+/gm.test(firstName)) {
          return "It should contain letters, from 3 to 20 symbols. Not empty";
        } else {
          return null;
        }
      },
      description: 'Required',
    },
    {
      name: 'lastName',
      type: FieldType.Text,
      title: 'Last name',
      isInvalid({
        lastName,
      }) {
        if (!/\b([A-Za-z]{3,20}$)+/gm.test(lastName)) {
          return "It should contain letters, from 3 to 20 symbols";
        } else {
          return null;
        }
      },
      description: 'Required',
    },
    {
      name: 'gender',
      type: FieldType.Text,
      title: 'Gender',
      description: 'Required',
    },
];



interface IOnePageProps {
   id: string;
}
  
interface IOnePagePrivate {
  // personService: PersonService;
  routerService: RouterService;
}


export const OneProfilePage = ({
    
    routerService,
    id,
  }: IOnePageProps & IOnePagePrivate) => {
  
    const [ data, setData ] = useState<IPerson | null>(null);
  
    const handleChange = (data: IPerson, initial: boolean) => {
      if (!initial) {
        setData(data);
      }
    };
    const handleSave = () => {
        alert('save')
    }
    const handleBack = () => {
      routerService.push(`/`);
    };
  
    return (
      <>
        <Breadcrumbs
            title="Profiles"
            subtitle="???"
            onSave={handleSave}
            onBack={handleBack}
        />
       <OneTyped<IPerson>
            fields={fields}
            // handler={handler}
            // fallback={personService.fallback}
            change={handleChange}
         />
       
      </>
    );
};

export default observer(OneProfilePage) as React.FC;
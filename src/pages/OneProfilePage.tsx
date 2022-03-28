import { AutoSizer, Breadcrumbs, FieldType, One, TypedField, useList } from "react-declarative";

import IPerson from "../model/IPerson";
import { findFlagUrlByCountryName } from "country-flags-svg";
import ioc from "../lib/ioc";
import { observer } from "mobx-react";
import { useState } from "react";

const fields: TypedField[] = [
  {
    type: FieldType.Group,
    fieldBottomMargin: "0",
    fields: [
      {
        type: FieldType.Group,
        columns: "2",
        fields: [
          {
            type: FieldType.Component,
            element: () => (
              <AutoSizer style={{ height: 225 }}>
                {({ height, width }) => (
                  <div>
                    <img src="https://image.shutterstock.com/image-vector/blank-avatar-photo-place-holder-260nw-1114445501.jpg"
                      alt="Profile pic" style={{ height: width, width: width }}
                    />
                  </div>
                )}
              </AutoSizer>)
          },
          {
            type: FieldType.Rating,
            fieldBottomMargin: "0",
            name: "rating",
            defaultValue: 3
          }
        ]
      },
      {
        type: FieldType.Group,
        fieldBottomMargin: "0",
        columns: "10",
        fields: [
          {
            type: FieldType.Group,
            fieldBottomMargin: "0",
            columns: "2",
            fields: [
              {
                type: FieldType.Switch,
              },
            ]
          },
          {
            type: FieldType.Group,
            fieldBottomMargin: "0",
            columns: "5",
            fields: [
              {
                type: FieldType.Text,
                outlined: false,
                title: "Identificator",
                name: "id",

              }
            ]
          },
          {
            type: FieldType.Group,
            fieldBottomMargin: "0",
            columns: "5",
            fields: [
              {
                name: "id",
                type: FieldType.Text,
                outlined: false,
                title: "Outer ID",
              },
            ]
          },
          {
            name: 'firstName',
            type: FieldType.Text,
            title: 'First name',
            description: 'Required',
          },
          {
            name: 'lastName',
            type: FieldType.Text,
            title: 'Last name',
            description: 'Required',
          },

          {
            type: FieldType.Combo,
            title: "Gender",
            placeholder: "Choose",
            name: "gender",
            itemList: [
              "Male",
              "Female",
              "Other"
            ]
          },
          {
            type: FieldType.Group,
            fieldBottomMargin: "0",
            columns: "5",
            fields: [
              {
                type: FieldType.Line,
                title: "Contact Data"
              },
              {
                name: 'email',
                type: FieldType.Text,
                title: 'E-mail',
              },
              {
                name: 'country',
                type: FieldType.Text,
                title: 'Country',
              },
              {
                name: 'phone',
                type: FieldType.Text,
                title: 'Phone number',
              },
            ]
          },
          {
            type: FieldType.Group,
            fieldBottomMargin: "0",
            columns: "5",
            fields: [
              {
                type: FieldType.Line,
                title: "Chatting History"
              },
            ]
          }
        ]
      }
    ]
  }
]

interface IOnePageProps {
  id: string;
}

export const OneProfilePage = ({
  id,
}: IOnePageProps) => {


  const [data, setData] = useState<IPerson | null>(null);


  const handleChange = (data: IPerson, initial: boolean) => {
    if (!initial) {
      setData(data);
    }
  };
  
  const handleSave = async () => {
    if (data) {
      data.id = id;
      await ioc.personService.save(data);
      ioc.routerService.push(`/profiles-list/${data.id}`);
      ioc.alertService.notify('Saved');
    } else {
      console.log("NOTHING CHANGED")
    }
  }

  const handleBack = () => {
    ioc.routerService.push(`/`);
  };

  const handler = () => ioc.personService.one(id);
  
  const test = () => {
    const test1 = ioc.personService.countryList
    console.log(test1)
  }
  const person = ioc.personService.one(id)
  const flag = findFlagUrlByCountryName(ioc.personService.findCountry(person!))
  
  return (
    <>
      <Breadcrumbs
        title="Profiles"
        disabled={!data}
        subtitle={id}
        onSave={handleSave}
        onBack={handleBack}
      />
      <One
        fields={fields}
        handler={handler}
        fallback={ioc.personService.fallback}
        onChange={handleChange}
      />
      <div onClick={test}><img src={flag} alt="flag" /></div>
    </>
  );
};

export default observer(OneProfilePage) as React.FC;
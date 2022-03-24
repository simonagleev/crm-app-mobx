import { AutoSizer, Breadcrumbs, FieldType, One, TypedField } from "react-declarative";

import IPerson from "../model/IPerson";
import PersonService from "../lib/base/PersonService";
import RouterService from "../lib/base/RouterService"
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
                type: FieldType.Text,
                outlined: false,
                title: "Outer ID",
                name: "id",

              },
            ]
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
                name: 'facebook',
                type: FieldType.Text,
                title: 'Facebook',
              },
              {
                name: 'instagram',
                type: FieldType.Text,
                title: 'Instagram',
              },
              {
                name: 'whatsapp',
                type: FieldType.Text,
                title: 'Whatsapp',
              },
              {
                name: 'telegram',
                type: FieldType.Text,
                title: 'Telegram',
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

interface IOnePagePrivate {
  personService: PersonService;
  routerService: RouterService;
}


export const OneProfilePage = ({
  routerService,
  id,
}: IOnePageProps & IOnePagePrivate) => {


  const [data, setData] = useState<IPerson | null>(null);


  const handleChange = (data: IPerson, initial: boolean) => {
    if (!initial) {
      setData(data);
    }
    console.log('TEST handleCHANGE из oneprofilepage')
    console.log(data)
  };

  const handleSave = async () => {
    if (data) {
      if (id === 'create') {
        await ioc.personService.create(data);
        routerService.push(`/${data.id}`);
      } else {
        ioc.personService.save(data)
        console.log('DATA IF happened')
        console.log(data)
      }
    } else {
      console.log("NOTHING CHANGED")
    }
  }

  const handleBack = () => {
    ioc.routerService.push(`/`);
  };

  const handler = () => ioc.personService.one(id);

  return (
    <>
      <Breadcrumbs
        title="Profiles"
        subtitle={id}
        onSave={handleSave}
        onBack={handleBack}
      />
      <One
        fields={fields}
        handler={handler}
        fallback={ioc.personService.fallback}
        change={handleChange}
      />
    </>
  );
};

export default observer(OneProfilePage) as React.FC;
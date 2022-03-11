import { AutoSizer, Breadcrumbs, FieldType, One } from 'react-declarative';

import BarChart from './components/BarChart';
import BarChartLight from './components/BarChartLight';
import TypedField from 'react-declarative/model/TypedField';

const createCard = (): TypedField => ({
    type: FieldType.Hero,
    columns: '6',
    height: '100vh',
    right: '10px',
    bottom: '10px',
    child: {
        type: FieldType.Component,
        element: () => (
            <AutoSizer>
                {({ width, height }) => {
                    console.log('TEST ' + height, width);
                    return (
                        <BarChart height={height} width={width} /> 
                    );
                }}
            </AutoSizer>
        )
    },
})

const fields: TypedField[] = [
    {
        type: FieldType.Group,
        fieldBottomMargin: "0",
        fields: [
            {
                type: FieldType.Group,
                columns: "12",
                fields: [
                    createCard(),
                    {
                        type: FieldType.Text,
                        columns: '6',
                        outlined: false,
                        title: "Identificator",
                        name: "id",
                    }
                ]
            }
        ]
    }
]

//                   {
//                     type: FieldType.Component,
//                     element: () =>(
//                         <AutoSizer style={{ height: 200 }}>
//                             {({ height, width }) => (
//                                 <div style={{ height: height, width: width }}>
//                                    <BarChart  /> 
//                                 </div>
//                             )}
//                         </AutoSizer> 
//                     )
//                   },
//                 //   {
//                 //     type: FieldType.Text,
//                 //     columns: "6",
//                 //     outlined: true,
//                 //     title: "Outer ID",
//                 //     name: "id",

//                 //   }
//                 ]
//             },
//             {
//                 type: FieldType.Group,
//                 columns: "6",
//                 fields: [
//                   {
//                     type: FieldType.Component,
// element: () =>(
//     <AutoSizer>
//         {({ height, width }) => (
//             <BarChartLight height={height} width={width} /> 
//         )}
//     </AutoSizer>                      
// )
//                   },
//                 ]
//             }
//         ]
//     }
// ]
//


// const fields: TypedField[] = [
//     createCard(),
//     {
//         type: FieldType.Text,
//         outlined: false,
//         title: "Identificator",
//         name: "id",
//     }
// ];



interface IOneChartProps {
    height: number,
}

export const ChartPage = () => (
    <>
        <Breadcrumbs
            title="Chart"
            subtitle={'subtitle'}
        />
        <One
            fields={fields}
        />
    </>
)

export default ChartPage;
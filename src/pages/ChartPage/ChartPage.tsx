import { AutoSizer, Breadcrumbs, FieldType, One } from 'react-declarative';

import BarChart from './components/BarChart';
import { Circle } from './components/Circle';
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
                    },
                ]
            }
        ]
    }
]

export const ChartPage = () => (
    <>
        <Breadcrumbs
            title="Chart"
            subtitle={'subtitle'}
        />
        <One
            fields={fields}
        />
        <Circle 
            progress={90}
        />
    </>
)

export default ChartPage;
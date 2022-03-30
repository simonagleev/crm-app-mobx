import { AutoSizer, Breadcrumbs, FieldType, One } from 'react-declarative';

import IndicatorChart from '../../components/common/IndicatorChart';
import TypedField from 'react-declarative/model/TypedField';

const createCard = (): TypedField => ({
    type: FieldType.Hero,
    columns: '12',
    height: '50vh',
    right: '',
    bottom: '10px',
    child: {
        type: FieldType.Component,
        element: () => (
            <IndicatorChart/>
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
        {/* <Circle 
            progress={90}
        /> */}
    </>
)

export default ChartPage;
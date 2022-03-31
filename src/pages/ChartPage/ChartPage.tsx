import { AutoSizer, Breadcrumbs, FieldType, One } from 'react-declarative';

import { Box } from '@mui/material';
import IndicatorChart from '../../components/common/IndicatorChart';
import IndicatorCircle from '../../components/common/IndicatorCircle';
import TypedField from 'react-declarative/model/TypedField';

const createCard = (): TypedField => ({
    type: FieldType.Hero,
    columns: '6',
    height: '70vh',
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
        columns: "12",
        phoneColumns: '12',
        tabletColumns: '2',
        fields: [
            {
                type: FieldType.Group,
                columns: "12",
                phoneColumns: '12',
                tabletColumns: '2',
                fields: [
                    {
                        type: FieldType.Component,
                        columns: "6",
                        element: () => (
                            <Box></Box>
                        )
                    },
                    createCard(),
                ]
            },
            {
                type: FieldType.Hero,
                columns: '12',
                height: '30vh',
                right: '',
                bottom: '10px',
                child: {
                    type: FieldType.Component,
                    element: () => (
                        <IndicatorCircle/>
                    )
                },  
            }    
        ]
    },
    

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
    </>
)

export default ChartPage;
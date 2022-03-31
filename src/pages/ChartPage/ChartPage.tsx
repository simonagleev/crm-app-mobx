import { AutoSizer, Breadcrumbs, FieldType, One } from 'react-declarative';
import { Box, Stack } from '@mui/material';

import IndicatorChart from '../../components/common/IndicatorChart';
import { IndicatorChartBottom } from '../../components/common/IndicatorCircle';
import TypedField from 'react-declarative/model/TypedField';

const createCard = (): TypedField => ({
    type: FieldType.Hero,
    columns: '6',
    height: '80vh',
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
                        type: FieldType.Hero,
                        columns: '6',
                        height: '80vh',
                        right: '10px',
                        bottom: '10px',
                        child: {
                            type: FieldType.Component,
                            element: () => (
                                
                                    <Box>
                                        
                                        <IndicatorChartBottom/>
                                    </Box>
                                
                                
                                
                                
                            )
                        },  
                    },
                    createCard(),
                ]
            },
            // {
            //     type: FieldType.Hero,
            //     columns: '6',
            //     height: '30vh',
            //     right: '',
            //     bottom: '10px',
            //     child: {
            //         type: FieldType.Component,
            //         element: () => (
            //             <Box>
            //                 <IndicatorChartBottom/>
            //             </Box>
                        
            //         )
            //     },  
            // }    
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
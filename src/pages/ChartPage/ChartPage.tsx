import { Breadcrumbs, FieldType, One } from 'react-declarative';

import IndicatorChart from '../../components/common/IndicatorChart';
import { IndicatorChartBottom } from '../../components/common/IndicatorCircle';
import TypedField from 'react-declarative/model/TypedField';

const fields: TypedField[] = [
    {
        type: FieldType.Hero,
        columns: '12',
        height: 'calc(100vh - 250px)',
        bottom: '10px',
        child: {
            type: FieldType.Component,
            element: () => (
                <IndicatorChart/>
            )
        },
    },
    {
        type: FieldType.Hero,
        columns: '12',
        height: '200px',
        child: {
            type: FieldType.Component,
            element: () => (
                <IndicatorChartBottom/>
            )
        },  
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
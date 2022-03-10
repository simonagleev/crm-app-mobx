import BarChart from './components/BarChart';
import { One } from 'react-declarative';

export const ChartPage = () => (
    <div>CHART PAGE
        <BarChart/>
        <One fields={[]} />
    </div> // one тут должен быть компонент
    
)

export default ChartPage;
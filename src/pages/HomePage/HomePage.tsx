import {
  FieldType,
  One,
  TypedField,
} from 'react-declarative';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import Card from './Card';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import WorkIcon from '@mui/icons-material/Work';

const CC_CELL_PADDING = "7px";


const createCard = (idx: number, num: number, columns = "6", color: string): TypedField => ({
  type: FieldType.Hero,
  columns: (window.innerWidth>450) ? columns: "12",
  height: `33vh`,
  right: CC_CELL_PADDING,
  bottom: '10px',
  child: {
    type: FieldType.Component,
    element: (obj) => <Card obj={{ ...obj, upperIndex: idx }} idx={idx} upperIndex={idx} num={num} color={color}/>     //тут происходит spread syntax, мы выдергиваем индекс из obj и еще отдельно передаем его как upperIndex, чтоб потом из Card передать его в Counter
  },
})

const fields: TypedField[] = [
  createCard(0, 58, "6", 'blue'),
  createCard(1, 15, "6", 'OrangeRed'),
  createCard(2, 37, "4", 'orange'),
  createCard(3, 5, "4", 'RoyalBlue'),
  createCard(4, 1, "4", 'green'),
  createCard(5, 1, "6", 'darkBlue'),
  createCard(6, 0, "6", 'red'),
];

export const HomePage = () => (
  <One
    handler={() => ({
      value0: {
        label: "New chats",
        currentNumber: 1,
        icon: <MarkChatUnreadIcon color='primary'/>,
      },
      value1: {
        label: "New sales",
        currentNumber: 2,
        icon: <PointOfSaleIcon sx={{ color: 'OrangeRed' }}/>,
      },
      value2: {
        label: "Hours worked",
        currentNumber: 1,
        icon: <WorkIcon sx={{ color: 'orange' }}/>,
      },
      value3: {
        label: "Late arrivals",
        currentNumber: 1,
        icon: <AssignmentLateIcon sx={{ color: 'RoyalBlue' }}/>,
      },
      value4: {
        label: "Absence hours",
        currentNumber: 1,
        icon: <DirectionsRunIcon sx={{ color: 'green' }}/>,
      },
      value5: {
        label: "Overtime",
        currentNumber: 1,
        icon: <AccessTimeIcon sx={{ color: 'darkBlue' }}/>,
      },
      value6: {
        label: "Downtime",
        currentNumber: 7,
        icon: <HighlightOffIcon sx={{ color: 'red' }}/>,
      },
    })}
    fields={fields}
  />
);

export default HomePage;

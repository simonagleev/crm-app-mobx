import {
  FieldType,
  One,
  TypedField,
} from 'react-declarative';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IndicatorCard from '../../components/common/IndicatorCard';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import WorkIcon from '@mui/icons-material/Work';

const fields: TypedField[] = [
  {
    type: FieldType.Hero,
    columns: "6",
    phoneColumns: "12",
    height: `33vh`,
    right: '10px',
    bottom: '10px',
    child: {
      type: FieldType.Component,
      element: () => (
        <IndicatorCard
          color="blue"
          label='New chats'
          value='58'
          icon={MarkChatUnreadIcon}
        />
      ),
    },
  },
  {
    type: FieldType.Hero,
    columns: "6",
    phoneColumns: "12",
    height: `33vh`,
    right: '10px',
    bottom: '10px',
    child: {
      type: FieldType.Component,
      element: () => (
        <IndicatorCard
          color="OrangeRed"
          label='New sales'
          value='15'
          icon={PointOfSaleIcon }
        />
      ),
    },
  },
  {
    type: FieldType.Hero,
    columns: "4",
    phoneColumns: "12",
    height: `33vh`,
    right: '10px',
    bottom: '10px',
    child: {
      type: FieldType.Component,
      element: () => (
        <IndicatorCard
          color="orange"
          label='Hours worked'
          value='37 of 40'
          icon={WorkIcon}
        />
      ),
    },
  },
  {
    type: FieldType.Hero,
    columns: "4",
    phoneColumns: "12",
    height: `33vh`,
    right: '10px',
    bottom: '10px',
    child: {
      type: FieldType.Component,
      element: () => (
        <IndicatorCard
          color="DodgerBlue"
          label='Late arrivals'
          value='5'
          icon={AssignmentLateIcon}
        />
      ),
    },
  },
  {
    type: FieldType.Hero,
    columns: "4",
    phoneColumns: "12",
    height: `33vh`,
    right: '10px',
    bottom: '10px',
    child: {
      type: FieldType.Component,
      element: () => (
        <IndicatorCard
          color="green"
          label='Absence hours'
          value='1'
          icon={DirectionsRunIcon}
        />
      ),
    },
  },
  {
    type: FieldType.Hero,
    columns: "6",
    phoneColumns: "12",
    height: `33vh`,
    right: '10px',
    bottom: '10px',
    child: {
      type: FieldType.Component,
      element: () => (
        <IndicatorCard
          color="Indigo"
          label='Overtime'
          value='1'
          icon={AccessTimeIcon}
        />
      ),
    },
  },
  {
    type: FieldType.Hero,
    columns: "6",
    phoneColumns: "12",
    height: `33vh`,
    right: '10px',
    bottom: '10px',
    child: {
      type: FieldType.Component,
      element: () => (
        <IndicatorCard
          color="#d70040"
          label='Downtime'
          value='0'
          icon={HighlightOffIcon}
        />
      ),
    },
  },
];

export const HomePage = () => (
  <One
    fields={fields}
  />
);

export default HomePage;

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

const CC_CELL_PADDING = "7px";

const fields: TypedField[] = [
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
          label='test'
          value='123'
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
          color="yellow"
          label='test'
          value='123'
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
          label='test'
          value='123'
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

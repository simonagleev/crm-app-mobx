import { IValue } from '../../../pages/HomePage/Card';
import Typography from '@mui/material/Typography';

interface IIndicatorCard {
    idx: number;
    num: number;
    color: string;
}

export const IndicatorCard = ({
    idx,
    num,
    color,

}: IIndicatorCard ) => {

    return (
        <Typography variant ='h4' color = {color}>
            {idx !== 2 ? num : num + ' of 40'}
        </Typography>
    )
};

export default IndicatorCard
    
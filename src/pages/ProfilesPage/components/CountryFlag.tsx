import Box from '@mui/material/Box';
import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import countryMap from './countryMap';

interface ICountryFlagProps {
    country: string;
}

export const CountryFlag = ({
    country,
}: ICountryFlagProps) => {

    const Flag = countryMap[country] || (() => <React.Fragment />);

    return (
        <Box style={{display: 'flex', alignItems: 'center'}}>
            <Stack direction={'row'} spacing={0}>
                <Flag height={30} width={50}/>
                <Typography>{country}</Typography> 
            </Stack>
        </Box>
    )
}

export default CountryFlag;



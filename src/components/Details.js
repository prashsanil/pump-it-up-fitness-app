import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';


const Details = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  
  const extraDetail = [
    {
        icon: BodyPartImage,
        name: bodyPart
    },
    {
        icon: TargetImage,
        name: target
    },
    {
        icon: EquipmentImage,
        name: equipment
    }
]

  return (
    <Stack gap="60px" sx={{
        flexDirection: { lg: 'row' },
        p: '20px',
        alignItems: 'center'
    }}>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{
            gap: {lg: '35px', xs: '20px'}
        }}>
            <Typography variant="h4" textTransform="capitalize">
                {name}
            </Typography>
            <Typography variant="h5">
            <span style={{ textTransform: 'capitalize' }}>{name} {' '}</span> is one of the best exercises to target your <span style={{color: '#FF2625', textTransform: 'capitalize'}}>{target}</span>.
                This will help improve your {bodyPart}. 
                It uses just uses {equipment} and no other equipment.
                {/* <br /><br />
                Sore today, strong tomorrow. 💪🏽 */}
            </Typography>
            {extraDetail.map((item) => (
                <Stack key={item.name} direction="row" 
                gap="24px" alignItems="center">
                    <Button sx={{
                      background: '#FFF2db',
                      borderRadius: '50%',
                      width: '100pz'
                    }}>
                        <img src={item.icon} alt={bodyPart} 
                          style={{ width: '40px', height: '40px' }} />
                    </Button>
                    <Typography variant="h5" textTransform='capitalize'>
                        {item.name}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Details
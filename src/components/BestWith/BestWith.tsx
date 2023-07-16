import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { IBeer } from '../../models/IBeer';

type BestWithProps = {
  beer: IBeer
}

const BestWith: React.FC<BestWithProps> = ({ beer }) => {
  return <>
  {beer.food_pairing.map(e => 
    <ListItem key={e}>
      <ListItemIcon>
        <KeyboardDoubleArrowRightIcon />
      </ListItemIcon>
      <ListItemText>
      {e}
      </ListItemText>
    </ListItem>
    )}
  </>
};

export default BestWith;
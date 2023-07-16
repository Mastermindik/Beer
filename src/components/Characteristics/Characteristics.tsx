import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { IBeer } from '../../models/IBeer';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

type CharacteristicsProps = {
  beer: IBeer
}

const Characteristics: React.FC<CharacteristicsProps> = ({ beer }) => {
  return <>
    <ListItem>
      <ListItemIcon>
        <KeyboardDoubleArrowRightIcon />
      </ListItemIcon>
      <ListItemText>
      Alcohol content in beer: {beer.abv}%
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <KeyboardDoubleArrowRightIcon />
      </ListItemIcon>
      <ListItemText>
      European Brewery Convention: {beer.ebc}
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <KeyboardDoubleArrowRightIcon />
      </ListItemIcon>
      <ListItemText>
      Standard Reference Method: {beer.srm}
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <KeyboardDoubleArrowRightIcon />
      </ListItemIcon>
      <ListItemText>
      International Bitterness Units: {beer.ibu}
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <KeyboardDoubleArrowRightIcon />
      </ListItemIcon>
      <ListItemText>
      Potential of hydrogen: {beer.ph}
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <KeyboardDoubleArrowRightIcon />
      </ListItemIcon>
      <ListItemText>
      Attenuation level: {beer.attenuation_level}
      </ListItemText>
    </ListItem>
  </>
};

export default Characteristics;
import React from 'react';
import styles from './Malt.module.scss';
import { IMalt } from '../../models/IBeer';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

type MaltProps = {
  malt: IMalt[]
}

const Malt: React.FC<MaltProps> = ({ malt }) => {
  return <div className={styles.malt}>
    <p>Malt</p>
    <List dense={true}>
      {malt.map(e =>
        <ListItem key={e.name}>
          <ListItemIcon>
            <KeyboardDoubleArrowRightIcon />
          </ListItemIcon>
          <ListItemText>
            {e.amount.value + " " + e.amount.unit} of "{e.name}"
          </ListItemText>
        </ListItem>
      )}
    </List>
  </div>
};

export default Malt;

import React from 'react';
import styles from './Hops.module.scss';
import { IHops } from '../../models/IBeer';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

type HopsProps = {
  hops: IHops[]
}

const Hops: React.FC<HopsProps> = ({ hops }) => {
  return <div className={styles.hops}>
    <p>Hops</p>
    <List dense={true}>
      {hops.map(e =>
        <ListItem key={e.name}>
          <ListItemIcon>
            <KeyboardDoubleArrowRightIcon />
          </ListItemIcon>
          <ListItemText>
            {e.amount.value + " " + e.amount.unit} of "{e.name}" adding at the {e.add}. Atribute: {e.attribute}
          </ListItemText>
        </ListItem>
      )}
    </List>
  </div>
};

export default Hops;

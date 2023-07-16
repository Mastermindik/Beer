import React from 'react';
import styles from './Method.module.scss';
import { IBeer } from '../../models/IBeer';

type MethodProps = {
  beer: IBeer
}

const Method: React.FC<MethodProps> = ({ beer }) => {
  return <div className={styles.methods}>
    <p className={styles.name}>Methods:</p>
    <div className={styles.fermentation}>
      <b>Fermentation temp:</b>
      <p>{beer.method.fermentation.temp.value}&deg; {beer.method.fermentation.temp.unit}</p>
    </div>
    <div className={styles.mash}>
      <b>Mash temp:</b>
      {beer.method.mash_temp.map(e => <p>
        {e.temp.value}&deg; {e.temp.unit} {e.duration ? "for " + e.duration + " minutes" : ""}
      </p>)}
    </div>
  </div>
};

export default Method;

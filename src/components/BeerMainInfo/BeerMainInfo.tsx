import React, { useEffect } from 'react';
import styles from './BeerMainInfo.module.scss';
import { IBeer } from '../../models/IBeer';
import { List } from '@mui/material';
import Characteristics from '../Characteristics/Characteristics';
import BestWith from '../BestWith/BestWith';
import 'aos/dist/aos.css';
import AOS from 'aos';

type BeerMainInfoProps = {
  beer: IBeer
}

const BeerMainInfo: React.FC<BeerMainInfoProps> = ({ beer }) => {
  useEffect(() => {
    AOS.init()
  }, [])

  return <div className={styles.beer_main_info} data-aos="fade-left">
    <div className={styles.title}>
      <h1>{beer.name} &mdash; {beer.tagline}</h1>
    </div>
    <div className={styles.contributed}>
      <p>Contributed by:</p>
      <h3>{beer.contributed_by}</h3>
    </div>
    <div className={styles.descr}>
      Beer the <b>{beer.name}</b> was first brewed on <b>{beer.first_brewed.replace("/", ".")}</b>. {beer.description}
    </div>
    <div className={styles.characteristics}>
      <p>Characteristics:</p>
      <List dense={true}>
        <Characteristics beer={beer} />
      </List>
    </div>
    <div className={styles.food_pairing}>
      <p>Goes best with:</p>
      <List dense={true}>
        <BestWith beer={beer} />
      </List>
    </div>
  </div>
};

export default BeerMainInfo;
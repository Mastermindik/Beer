import React from 'react';
import styles from './BeerCard.module.scss';
import { IBeer } from '../../models/IBeer';
import { Link } from 'react-router-dom';

type BeerCardProps = {
  beer: IBeer,
  check: Function
}

const BeerCard: React.FC<BeerCardProps> = ({ beer, check }) => {

  return <Link to={`${beer.id}`} className={styles.beer_card} onContextMenu={(e) => check(e, beer.id)}>
    <div className={styles.name}>
      <h3>
        {beer.name}
      </h3>
    </div>
    <div className={styles.photo}>
      <img src={beer.image_url} alt="" />
    </div>
    <div className={styles.tag}>
      <p>"{beer.tagline}"</p>
    </div>
    <div className={styles.contributed}>
      <p>Contributed by:</p>
      <p><b>{beer.contributed_by}</b></p>
    </div>
    <div className={styles.descr}>
      <p>{beer.description}</p>
    </div>
  </Link>
};

export default BeerCard;
import React from 'react';
import styles from './BeerRecipe.module.scss';
import { IBeer } from '../../models/IBeer';
import Hops from '../Hops/Hops';
import Malt from '../Malt/Malt';
import Method from '../Method/Method';

type BeerRecipeProps = {
  beer: IBeer
}

const BeerRecipe: React.FC<BeerRecipeProps> = ({ beer }) => {
  return <div className={styles.beer_recipe}>
    <div className={styles.ingredients}>Ingredients:</div>
    <Hops hops={beer.ingredients.hops} />
    <Malt malt={beer.ingredients.malt} />
    <div className={styles.yeast}>
      <span>Yeast</span> &mdash; {beer.ingredients.yeast}
    </div>
    <Method beer={beer} />
    <div className={styles.tips}>
      <b>Brewers tips:</b>
      <p>{beer.brewers_tips}</p>
    </div>
  </div>
};

export default BeerRecipe;
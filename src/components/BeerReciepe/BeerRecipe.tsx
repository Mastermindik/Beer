import React, { useEffect } from 'react';
import styles from './BeerRecipe.module.scss';
import { IBeer } from '../../models/IBeer';
import Hops from '../Hops/Hops';
import Malt from '../Malt/Malt';
import Method from '../Method/Method';
import 'aos/dist/aos.css';
import AOS from 'aos';
type BeerRecipeProps = {
  beer: IBeer
}

const BeerRecipe: React.FC<BeerRecipeProps> = ({ beer }) => {
  useEffect(() => {
    AOS.init()
  }, [])
  return <div className={styles.beer_recipe} data-aos="fade-up">
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
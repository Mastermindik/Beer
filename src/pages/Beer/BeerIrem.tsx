import { useEffect } from "react"
import styles from "./BeerItem.module.scss"
import useBeerStore from "../../store/store";
import { useParams } from "react-router-dom";
import BeerMainInfo from "../../components/BeerMainInfo/BeerMainInfo";
import BeerRecipe from "../../components/BeerReciepe/BeerRecipe";

type Params = {
  id: string
}

function BeerItem() {
  const params = useParams<Params>();
  const beer = useBeerStore((state) => state.beers.filter(e => `${e.id}` === params.id)[0]);
  const beers = useBeerStore(state => state.beers);
  const fetch = useBeerStore(state => state.fetchBeers)

  useEffect(() => {
    if (!beers.length) {
      const page = params.id ? parseInt(params.id) : 0;
      fetch(Math.floor(page / 25) + 1);
    }
  }, [])

  return <section className={styles.beer_item}>
    <div className={`container ${styles.container}`}>
      <div className={styles.wraper}>
        <div className={styles.photo}>
          <img src={beer.image_url} alt="" />
        </div>
        <BeerMainInfo beer={beer} />
        <BeerRecipe beer={beer} />
      </div>
    </div>
  </section>
}

export default BeerItem
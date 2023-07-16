import { useEffect, useRef, useState } from "react";
import useBeerStore from "../../store/store";
import styles from "./BeerStore.module.scss"
import BeerCard from "../../components/BeerCard/BeerCard";
import { Button, Skeleton } from "@mui/material";
import 'aos/dist/aos.css';
import AOS from 'aos';

function BeerStore() {
  const { beers, beersToDelete, isLoading, fetchBeers, toggleBeerToDelete, deleteBears, fetchMoreBeers } = useBeerStore();
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(15);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    deleteBears()
    fetchBeers(page).then(() => setPage(page + 1));
      AOS.init()
  }, [])

  function check(e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) {
    e.preventDefault();
    e.currentTarget.classList.toggle(styles.checked);
    toggleBeerToDelete(id)
  }

  useEffect(() => {
    if (beers.length && beers.length <= end) {
      fetchMoreBeers(page).then(() => setPage(page + 1))
    }
  }, [end, beers.length])

  window.addEventListener("scroll", () => {
    if (sectionRef.current?.scrollHeight && (sectionRef.current?.scrollHeight / 3 * 2) < window.scrollY) {
      setStart(start + 5);
      setEnd(end + 5);
    } else if (sectionRef.current?.scrollHeight && (sectionRef.current?.scrollHeight / 6) > window.scrollY && end > 5 && start > 0) {
      setStart(start - 5);
      setEnd(end - 5);
    }
  })



  return <>
    <section className={styles.section_beer_store} ref={sectionRef}>
      <div className="container" >
        <div className={styles.wraper} data-aos="fade-up">
          {beers.slice(start, end).map(beer => <BeerCard beer={beer} check={check} key={beer.id} />)}
          {isLoading ? Array.from(Array(5)).map((_, index) => <Skeleton variant="rectangular" height={"40.8rem"} width={"16.1rem"} key={index} />) : ""}
        </div>
      </div>
      {beersToDelete.length ?
        <Button variant="contained" color="error" className={styles.btn_delete} onClick={deleteBears}>Delete</Button> : ""}
    </section>
  </>
}

export default BeerStore
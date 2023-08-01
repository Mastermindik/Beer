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
    deleteBears();
    fetchBeers(page).then(() => setPage(page + 1));
    AOS.init()
    window.addEventListener('scroll', handle);

    return () => {
      window.removeEventListener("scroll", handle);
    }
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

  function handle() {
    if (sectionRef.current?.getBoundingClientRect().bottom === window.innerHeight - 11) {
      setTimeout(() => {
        setStart((start) => start + 5);
        setEnd((end) => end + 5);
      }, 200);
      return
    } else if (sectionRef.current?.getBoundingClientRect().top === 0) {
      setTimeout(() => {
        setStart(start => start - 5 >= 0 ? start - 5 : start);
        setEnd(end => end - 5 >= 15 ? end - 5 : end);
      }, 200);
      return
    }
  }

  return <>
    <section className={styles.section_beer_store} >
      <div className="container" >
        <div className={styles.wraper} data-aos="fade-up" ref={sectionRef}>
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
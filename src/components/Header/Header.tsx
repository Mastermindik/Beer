import { Link } from "react-router-dom"
import styles from "./Header.module.scss"

type HeaderProps = {
}

const Header: React.FC<HeaderProps> = ({ }) => {
  return <header className={styles.header}>
    <div className="container">
      <Link to={"/"}>
        <h1>Beer ricipes</h1>
      </Link>
    </div>
  </header>
}

export default Header
import NavBar from './NavBar';
import styles from './styles.module.sass'

const renderName = () => {
  return <span>Leo LeBlanc III</span>
}

function Header() {
  // TODO: add navbar items
    return (
    <div className={`${styles.horizontal}`}>
      {renderName()}
      <NavBar/>
    </div>
    )
}

export default Header;
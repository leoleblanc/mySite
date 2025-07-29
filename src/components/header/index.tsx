import Link from 'next/link';
import NavBar from './NavBar';
import styles from './headerStyles.module.sass'
import navStyles from './NavBar/NavElementStyles.module.sass';

const Header = () => {

  const renderName = () => {
    return <Link className={`bold ${navStyles.navOpacity}`} href={'/'}>Leo LeBlanc III</Link>
  }

  return (
    <div id={'header'} className={`theme-background-header background-blur ${styles.headerBackground}`}>
      <div className={styles.innerContainer}>
        {renderName()}
        <NavBar />
      </div>
    </div>
  )
}

export default Header;
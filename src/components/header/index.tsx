import Link from 'next/link';
import NavBar from './NavBar';
import styles from './headerStyles.module.sass'

const Header = () => {

  const renderName = () => {
    return <Link className={`bold`} href={'/'}>Leo LeBlanc III</Link>
  }

  return (
    <div className={styles.headerBackground}>
      <div className={styles.innerContainer}>
        {renderName()}
        <NavBar />
      </div>
    </div>
  )
}

export default Header;
'use client';

import { useRouter } from 'next/navigation';
import NavBar from './NavBar';
import styles from './headerStyles.module.sass'

const Header = () => {
  const router = useRouter();
  const goHome = () => {
    router.push('/');
  }

  const renderName = () => {
    return <a onClick={goHome}>Leo LeBlanc III</a>
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
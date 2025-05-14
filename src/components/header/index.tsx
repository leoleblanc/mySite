'use client';

import { useRouter } from 'next/navigation';
import NavBar from './NavBar';
import styles from './header.module.sass'

const Header = () => {
  const router = useRouter();
  const goHome = () => {
    router.push('/');
  }

  const renderName = () => {
    return <span onClick={goHome}>Leo LeBlanc III</span>
  }

  return (
    <div className={`${styles.horizontal}`}>
      {renderName()}
      <NavBar />
    </div>
  )
}

export default Header;
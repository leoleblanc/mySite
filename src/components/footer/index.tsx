import styles from './footerStyles.module.sass';

const Footer = () => {
  // TODO: add footer items. Maybe a copyright thing or some such
  const currentYear = new Date().getFullYear()
  return (
    <div className={`theme-background-header padding-header ${styles.footer}`}>
      <div className={`bold`}>
        © <span>{currentYear}</span> Leo LeBlanc III
      </div>
    </div>
  )
}

export default Footer;
import CustomImage from '@/components/CustomImage';
import { LOGOS } from '@/global/constants'
import styles from './homeStyles.module.sass'
import portrait from '@/images/professionalPhoto.jpg';
import BlankSpace from '@/components/BlankSpace';


const HomePage = () => {
  // TODO: allow contractions to work with build process...
  const banner = () => {
    return <div className={styles.bannerContainer}>

      <CustomImage src={portrait}
        alt="portrait"
        width={200}
        height={200}
        circular={true} />
      <BlankSpace space={3} />
      <div>Placeholder banner!</div>
    </div>
  }

  const welcome = () => {
    return (
      <div className={styles.welcomeContainer}>
        <div>
          Welcome to my site! I'm Leo LeBlanc III and I'm a full stack software engineer who works across all areas of the tech stack.<br />
          See which projects I have contributed to <a href={""}>here!</a>
        </div>
      </div>
    )
  }

  const displayImages = () => {
    return Object.keys(LOGOS).map((logo, index) => {
      const { name, path, adjustForLightMode, adjustForDarkMode } = LOGOS[logo];

      let imageStyle = '';
      if (adjustForLightMode) {
        imageStyle = styles.adjustForLightMode;
      } else if (adjustForDarkMode) {
        imageStyle = styles.adjustForDarkMode;
      }

      return <CustomImage
        className={`${imageStyle}`}
        key={name + index}
        src={path}
        height={45}
        width={45}
        alt={name}
      />
    })
  }

  const siteBuiltTech = () => {
    return (
      <div className={styles.siteBuiltContainer}>
        This site is built with the following technologies:<br />
        <BlankSpace space={2} />
        <div className={styles.logosContainer}>
          {displayImages()}
        </div>

      </div>
    )
  }

  return (
    <div className={styles.homeContainer}>
      {banner()}
      {welcome()}
      {siteBuiltTech()}
    </div>
  )
}

export default HomePage;
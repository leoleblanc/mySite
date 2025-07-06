import CustomImage from '@/components/CustomImage';
import { LOGOS } from '@/global/constants'
import styles from './homeStyles.module.sass'
import portrait from '@/images/professionalPhoto.jpg';
import BlankSpace from '@/components/BlankSpace';

const welcomeBannerTextA = `I'm a full stack software engineer with 5 years of industry
            experience driving impactful feature enhancements
            for frontend platforms serving over 1 million users.
            I've worked across many aspects of the tech stack, specializing
            in Next.js with React, TypeScript and Node.js.`

const welcomeBannerTextB = `I'm a full stack software engineer with 5 years of industry
            experience across many aspects of the tech stack: <list techs>
            I specialize in Next.js with React, TypeScript, Sass (CSS) and Node.js.`


const HomePage = () => {
  const banner = () => {
    // TODO: use Next/Image for the portrait
    return (
      <div className={`${styles.homeContentFragmentContainer} ${styles.bannerContainer}`}>
        <div className={styles.portraitContainer}>
          <img
            src={portrait.src}
            className={styles.portrait} />
          {/* <CustomImage
            src={portrait}
            alt="portrait"
            className={styles.portrait}
            fill /> */}
        </div>
        <BlankSpace space={1} />
        <div className={styles.welcomeDescription}>
          <div>
            <div className={styles.contentTitle}>Welcome to my site!</div>
            <BlankSpace space={2} />
            {welcomeBannerTextA}
          </div>
        </div>
      </div>
    )
  }

  const checkIt = () => {
    return (
      <div className={`${styles.homeContentFragmentContainer} ${styles.fillContainer}`}>
        <div>
          Check out what I've worked on!<br />
          *insert project cards here*
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

      return (
        <div key={name + index} className={`${styles.logoItem}`}>
          <CustomImage
            className={imageStyle}
            key={name + index}
            src={path}
            fill
            alt={name}
          />
        </div>
      )
    })
  }

  const siteBuiltTech = () => {
    return (
      <div className={`${styles.homeContentFragmentContainer} ${styles.homeContentVertical} ${styles.siteTechContainer}`}>
        <div className={styles.contentTitle}>
          This site is built with the following technologies:<br />
        </div>
        <BlankSpace space={1} />
        <div className={styles.logosContainer}>
          {displayImages()}
        </div>

      </div>
    )
  }

  return (
    <div className={styles.homeContainer}>
      {banner()}
      {checkIt()}
      {siteBuiltTech()}
    </div>
  )
}

export default HomePage;
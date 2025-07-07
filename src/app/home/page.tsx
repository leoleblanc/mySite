import CustomImage from '@/components/CustomImage';
import { LOGOS } from '@/global/constants'
import styles from './homeStyles.module.sass'
import portrait from '@/images/professionalPhoto.jpg';
import BlankSpace from '@/components/BlankSpace';
import ProjectCards from '@/components/ProjectCards';
import { PROJECTS_WORKED_ON } from '@/global/constants';

const welcomeBannerText = `I'm a full stack software engineer with 5 years of industry
            experience driving impactful feature enhancements
            for frontend platforms serving over 1 million users.
            I've worked across many aspects of the tech stack, specializing
            in Next.js with React, TypeScript, Sass (CSS) and Node.js.`

const HomePage = () => {
  const banner = () => {
    return (
      <div className={`${styles.bannerContainer}`}>
        <div className={`${styles.homeContentFragmentContainer}`} style={{ maxWidth: '2560px' }}>
          <div className={styles.portraitContainer}
          >
            <CustomImage src={portrait} style={{ aspectRatio: 1 }}
              alt="portrait"
              className={styles.portrait}
              fill
            />
          </div>
          <BlankSpace space={1} />
          <div className={styles.welcomeDescription}>
            <div>
              <div className={styles.contentTitle}>Hi, I'm Leo!</div>
              <BlankSpace space={2} />
              {welcomeBannerText}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const checkIt = () => {
    return (
      <div className={`${styles.homeContentFragmentContainer} ${styles.homeContentVertical} ${styles.fillContainer}`}>
        Check out what I've worked on!<br />
        <BlankSpace space={.5} />
        <ProjectCards {...PROJECTS_WORKED_ON} />
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
        <div>
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
      <BlankSpace space={.5} />
      {checkIt()}
      <BlankSpace space={.5} />
      {siteBuiltTech()}
    </div>
  )
}

export default HomePage;
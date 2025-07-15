import CustomImage from '@/components/CustomImage';
import { LOGOS } from '@/global/constants'
import styles from './homeStyles.module.sass'
import portrait from '@/images/spainPhoto.jpg';
import BlankSpace from '@/components/BlankSpace';
import ProjectCards from '@/components/ProjectCards';
import { PROJECTS_WORKED_ON } from '@/global/constants';

const HomePage = () => {
  const banner = () => {
    return (
      <div className={`${styles.bannerContainer}`}>
        <div className={'flex flex-space-between flex-align-center padding-lg'}>
          <div className={`flex aspect-one circular ${styles.portrait}`}>
            {/* TODO: there are two circulars here. Something isn't quite right. */}
            <CustomImage src={portrait}
              alt="portrait"
              circular
              fill
            />
          </div>
          <div className={'width-half'}>
            <div className={'text-xxlg bold text-left'}>Hi, I'm Leo!</div>
            <BlankSpace space={2} />
            <div className={`bold text-slight-lg text-left`}>
              I'm a software engineer with <span>5 years of industry
                experience</span> driving impactful feature enhancements for platforms
              serving over 1 million users. I've worked across many aspects of
              the tech stack, specializing in Next.js with React, TypeScript,
              Sass (CSS) and Node.js.
            </div>
          </div>
        </div>
      </div>
    )
  }

  const checkIt = () => {
    return (
      <div className={`flex flex-justify-center flex-align-center flex-col flex-fill`}>
        <div className={`text-xlg bold`}>
          Check out what I've worked on!
        </div>
        <BlankSpace space={3} />
        <ProjectCards {...PROJECTS_WORKED_ON} />
      </div>
    )
  }

  const displayImages = () => {
    return Object.keys(LOGOS).map((logo, index) => {
      const { name, path, purpose, adjustForLightMode, adjustForDarkMode } = LOGOS[logo];

      let imageStyle = '';
      if (adjustForLightMode) {
        imageStyle = styles.adjustForLightMode;
      } else if (adjustForDarkMode) {
        imageStyle = styles.adjustForDarkMode;
      }

      // I'll render the technology, its name, and... a description

      return (
        <div key={name + index} className={`flex flex-row`}>
          <div className={`${styles.logoItem}`}>
            <CustomImage
              className={imageStyle}
              src={path}
              fill
              alt={name}
            />
          </div>
          <div className={`flex flex-fill flex-col flex-space-between padding-md text-left`}>
            <div className={`text-slight-lg bold`}>
              {name}
            </div>
            <BlankSpace space={2} />
            <div>
              {purpose}
            </div>

          </div>
        </div>
      )
    })
  }

  const siteBuiltTech = () => {
    return (
      <div className={`flex flex-justify-center flex-align-center flex-col theme-background-light rounded-edge padding-md width-full ${styles.siteTechnologies}`}>
        <div className={`text-xlg bold`}>
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
      <BlankSpace space={3} />
      {checkIt()}
      <BlankSpace space={3} />
      {siteBuiltTech()}
      <BlankSpace space={3} />
    </div>
  )
}

export default HomePage;
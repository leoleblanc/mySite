import CustomImage from '@/components/CustomImage';
import { LOGOS } from '@/global/constants'
import styles from './homeStyles.module.sass'
import portrait from '@/images/spainPhoto.jpg';
import BlankSpace from '@/components/BlankSpace';
import ProjectCards from '@/components/ProjectCards';
import { PROJECT_LIST } from '@/projectInfo/projects'
import ThemedBox from '@/components/ThemedBox';

const HomePage = () => {
  const banner = () => {
    return (
      <div className={`${styles.bannerContainer}`}>
        <div className={'flex flex-row flex-space-between flex-align-center padding-lg'}>
          <div className={`aspect-one circular ${styles.portrait}`}>
            {/* TODO: there are two circulars here. Something isn't quite right. */}
            <CustomImage src={portrait}
              alt="portrait"
              circular
              fill
            />
          </div>
          <div className={'width-half'}>
            <div className={'bold text-xxlg text-left'} style={{ textIndent: '-.25vw' }}>Hi, I'm Leo!</div>
            <BlankSpace space={3} />
            <div className={`bold text-lgr text-left`}>
              I think, therefore I build.
            </div>
            <BlankSpace space={2} />
            <div className={`bold text-slight-lg text-left`}>
              At heart, I'm a problem solver who thrives in understanding the "why" behind processes.
              And with more than 5 years of industry experience delivering impactful platform enhancements
              for over 1 million users, I'm looking for my next challenge.
            </div>
          </div>
        </div>
      </div>
    )
  }

  const checkIt = () => {
    return (
      <div className={`flex flex-justify-center flex-align-center flex-col width-full`}>
        <div className={`text-xlg bold`}>
          My Projects
        </div>
        <BlankSpace space={3} />
        <ProjectCards {...PROJECT_LIST} />
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
      <div className={`flex flex-justify-center flex-align-center flex-col width-full ${styles.siteTechnologies}`}>
        <ThemedBox>
          <div className={`text-xlg bold`}>
            This site uses these technologies:<br />
          </div>
          <BlankSpace space={1.5} />
          <div className={styles.logosContainer}>
            {displayImages()}
          </div>
        </ThemedBox>
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
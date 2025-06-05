'use client'

import CustomImage from '@/components/CustomImage';
import { LOGOS } from '@/global/constants'
import styles from './homeStyles.module.sass'

const HomePage = () => {
  // TODO: allow contractions to work with build process...
  const banner = () => {
    return <div>Placeholder banner!</div>
  }

  const welcome = () => {
    return (
      <div>
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
      <div>
        This site is built with the following technologies:<br />
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
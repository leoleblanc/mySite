import styles from './PreviewBanner.module.sass'

interface PreviewBannerProps {
    isPreview?: boolean
}

const PreviewBanner = ({ isPreview = false }: PreviewBannerProps) => {
    if (isPreview) {
        return <div className={`center bold ${styles.previewBanner}`} >
            <span className={`brightness-double`}>Coming Soon!</span>
        </div>
    }
}

export default PreviewBanner;
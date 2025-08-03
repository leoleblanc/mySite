import styles from './PreviewBanner.module.sass'

interface PreviewBannerProps {
    isPreview?: boolean
}

const PreviewBanner = ({ isPreview = false }: PreviewBannerProps) => {
    if (isPreview) {
        return <div className={`center bold ${styles.previewBanner}`} >
            Coming Soon!
        </div>
    }
}

export default PreviewBanner;
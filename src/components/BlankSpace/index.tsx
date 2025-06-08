interface BlankSpaceProps {
    space: number
}

const BlankSpace = (props: BlankSpaceProps) => {
    const { space } = props

    return <div style={{ padding: `${space}%` }} />
}

export default BlankSpace
interface BlankSpaceProps {
    space: number
}

const BlankSpace = (props: BlankSpaceProps) => {
    const { space } = props

    return <div style={{ margin: `${space}rem` }} />
}

export default BlankSpace
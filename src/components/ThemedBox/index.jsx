const ThemedBox = (props) => {
    return (
        <div className={'theme-background-light padding-sm'}>
            {props.children}
        </div>
    )
}

export default ThemedBox;
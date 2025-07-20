import React from "react";

interface ThemedBoxProps {
    children: React.ReactNode
}

const ThemedBox = ({ children }: ThemedBoxProps): React.ReactNode => {
    return (
        <div className={'theme-background-light padding-md width-full'}>
            {children}
        </div>
    )
}

export default ThemedBox;
import React from "react";

interface ThemedBoxProps {
    children: React.ReactNode
}

const ThemedBox = ({ children }: ThemedBoxProps): React.ReactNode => {
    return (
        <div className={'theme-background-banner-light padding-md width-full overflow-hidden'}>
            {children}
        </div>
    )
}

export default ThemedBox;
import React from 'react';

type ContainerProps = {
    className?: string,
    children?: React.ReactNode,
}

const index = ({ className, children }: ContainerProps) => {
    return (
        <div className={`${className} max-w-[1300px] w-11/12 lg:w-10/12 mx-auto `}>
            {children}
        </div>
    )
}

export default index
import React from 'react'

type ButtonProps = {
    className?: string,
    children?: React.ReactNode,

}

const index = ({className, children}: ButtonProps) => {
  return (
    <button className={`py-2.5 px-6 bg-white rounded-[48px] text-[#334] ${className}`}>
        {children}
    </button>
  )
}

export default index
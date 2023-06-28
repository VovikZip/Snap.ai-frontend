import React, { FC } from 'react'

export enum MyButtonVariant {
    black = 'blac'
}

interface MyButtonProps {
    background?: string;
    text: string;
}

const MyButton : FC<MyButtonProps> = ({background, text}) => {
  return (
    <button className='btn ' >{text}</button>
  )
}

export default MyButton

// style={{background}}
import React from 'react'
import "./Styles.css"

const Btn1 = (props) => {
  return (
        <button className={`p-[5px_35px_5px_5px] btn1 text-white flex items-center gap-[16px] ${props.className}`}>
            <img src={props.img} alt="" />
            <h1 className='font-[700] text-[16px] leading-[15px]'>
                {props.text}
            </h1>
        </button>
  )
}

export default Btn1
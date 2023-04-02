import React from 'react'

const ColorThemeToggle = () => {
  return (
    <div className='color-theme-toggle'>
        <div className='color-theme-toggle__btns'>
            <div className='bg'></div>
            <div className='black'>
                <div className='dot'></div>
            </div>
            <div className='color'>
                <div className='dot'></div>
            </div>
        </div>
        <p className='color-theme-toggle__title'>
            color theme
        </p>
    </div>
  )
}

export default ColorThemeToggle
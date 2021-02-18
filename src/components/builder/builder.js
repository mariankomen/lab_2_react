import React, {useState} from 'react'

import './builder.css'

const Builder = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const RGB = `(${red}${green}${blue})`
    const ChangeColorFunction = () => {
        document.getElementById('changed').style.background = `rgb(${red},${green},${blue})`
    }

    return (
        <div className='builder'>

            <input
                className='inp'
                type='number' min='0' max='255'
                placeholder='Введіть Red code: '
                onChange={(e) => setRed(e.target.value)}
            />
            <input
                className='inp'
                type='number' min='0' max='255'
                placeholder='Введіть Green code: '
                onChange={(e) => setGreen(e.target.value)}
            />
            <input
                className='inp'
                type='number' min='0' max='255'
                placeholder='Введіть Blue code: '
                onChange={(e) => setBlue(e.target.value)}
            />
            <button type="button"
                    className="btn btn-outline-success"
                    onClick={()=>ChangeColorFunction()}
            >Намалювати</button>
            <div id='changed'></div>
        </div>
    )
}

export default Builder;
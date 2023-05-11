import React, { useState } from 'react'
import style from './modual.module.css'

type ModualProps = {
  onSubmit: (name: string, phoneNumber: string) => void
}

const Modual = ({onSubmit}: ModualProps) => {
  const [name, setName] = useState("")
  const [pho, setPho]   = useState('0')

  const click = () => {
    onSubmit(name, pho);
  }

  return (
    <div className={style.modual}>
        <div className={style.box}>

        <label className={style.label}>
          <span>Name</span>
          <input onChange={(e) => setName(e.target.value)} type="text" className={style.input}/>
        </label>
        <label className={style.label}>
          <span>Phonenumber</span>
          <input onChange={(e) => setPho(e.target.value)} type="text" className={style.input}/>
        </label>
        <button className={style.button} onClick={click}>Save</button>
        </div>
    </div>
  )
}

export default Modual
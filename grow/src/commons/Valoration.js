import React, { useState } from 'react'
import "../style/Valoration.css"

const Valoration = () => {
    const [start1, setStart1] = useState(false)
    const [start2, setStart2] = useState(false)
    const [start3, setStart3] = useState(false)
    const [start4, setStart4] = useState(false)
    const [start5, setStart5] = useState(false)

    const startA = ()=>{
        setStart1(true)
        setStart2(false)
        setStart3(false)
        setStart4(false)
        setStart5(false)
    }
    const startB = ()=>{
        setStart1(true)
        setStart2(true)
        setStart3(false)
        setStart4(false)
        setStart5(false)
    }
    const startC = () => {
        setStart1(true)
        setStart2(true)
        setStart3(true)
        setStart4(false)
        setStart5(false)
    }
    const startD = () => {
        setStart1(true)
        setStart2(true)
        setStart3(true)
        setStart4(true)
        setStart5(false)
    }
    const startE = () => {
        setStart1(true)
        setStart2(true)
        setStart3(true)
        setStart4(true)
        setStart5(true)
    }
   
    return (
        <div className="starts">
            <button className={(start1 ? "start1" : "start11")} onMouseOver={() => startA()} onClick={() => { setStart1(start1) }}><ion-icon name="star-sharp"></ion-icon></button>
            <button className={(start2 ? "start2" : "start22")} onMouseOver={() => startB()} onClick={() => { setStart1(start2) }} ><ion-icon name="star-sharp"></ion-icon></button>
            <button className={(start3 ? "start3" : "start33")} onMouseOver={() => startC()} onClick={() => { setStart1(start3) }} ><ion-icon name="star-sharp"></ion-icon></button>
            <button className={(start4 ? "start4" : "start44")} onMouseOver={() => startD()} onClick={() => { setStart1(start4) }} ><ion-icon name="star-sharp"></ion-icon></button>
            <button className={(start5 ? "start5" : "start55")} onMouseOver={() => startE()} onClick={() => { setStart1(start5) }} ><ion-icon name="star-sharp"></ion-icon></button>
        </div>
    )
}
export default Valoration;
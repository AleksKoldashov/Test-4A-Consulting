import './timer.css'
import { React , useEffect, useState} from 'react'


export default function Timer({setSec, setMin}) {

    const [flag, setFlag] = useState(true)
    const [flag1, setFlag1] = useState('blink')
    const [timerLeft, setTimerLeft]=useState(1*60) 
    
    const minutes = Math.floor(timerLeft/60)
    const second = Math.floor(timerLeft - minutes*60)
    
    useEffect(()=>{
        const interval = setInterval(()=>{
           if(flag === true){
            setTimerLeft((timeLeft)=>(timeLeft > 1 ? timeLeft -1 : 0))
           }
        },1000)
        return ()=>{
          clearInterval(interval)
        }
    },[flag])
    const min = minutes.toString().padStart(2,'0')
    const sec = second.toString().padStart(2,'0')
    setSec(sec)
    setMin(min)
  
    return(
        <div className="item-1">
                Скидка действует:  
                {
                  min==='00' && sec<30 
                    ? 
                    <h1 className={flag1}><div className='min'><span style={{color:'#FD4D35', paddingTop:'15px'}}>{min}</span>МИНУТ</div> <div className='item-1-2'>:</div> <div className='sec'><span style={{color:'#FD4D35', paddingTop:'15px'}}>{sec}</span>СЕКУНД</div> </h1>
                    : 
                    <>
                    <div className='min'><span>{min}</span>МИНУТ</div> 
                    <div className="item-1-1">:</div> 
                    <div className='sec'><span>{sec}</span>СЕКУНД</div>  
                    </>
                }   
                     
        </div>
    )
}
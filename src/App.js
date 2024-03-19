import { useState, useEffect } from 'react';
import './App.css';
import Timer from './components/Timer/Timer';
import imgMen from './img/img-men.svg'
import { data1 } from './data';
import CardNoSale from './components/Card/CardNoSale';
import CardNoSale2 from './components/Card2/CardNoSale2';
import ModalCard from './components/Modal/Modal';
import Card from './components/Card/Card';
import Card2 from './components/Card2/Card2';
import sale30 from './img/sale30.svg'
import sale40 from './img/sale40.svg'
import sale50 from './img/sale50.svg'
import s999 from './components/Card/img/s999.svg'
import s1299 from './components/Card/img/s1299.svg'
import s5990 from './components/Card/img/s5990.svg'
function App() {
  const [data, setData] = useState([])
    
  useEffect(()=>{
    fetch('https://t-pay.iqfit.app/subscribe/list-test')
    .then(response => response.json())
    .then(json => setData(json))
    .catch(console.error)
  },[])
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')


  const [blink, setBlink] = useState("blink-btn")


if(data.length!==0){
  return (
    <div className='app'>
        <div className='conteiner'>
              <Timer setMin={setMin} setSec={setSec}/>
              <div className="item-2">Выберите подходящий тарифный план</div>
              <div className='content'>
             
                   <img alt='men' src={imgMen} className="item-4" />
              
                <div className='block-1'>
                    <div className="item-3">
                    {
                    min==='00' && sec=== '00' 
                    ?  
                    data1.map((item,index)=><CardNoSale item={item} key={index}/>) 
                    : 
                    data1.map((item,index)=><Card item={item} key={index}/>)
                  }
                   {
                    min==='00' && sec < '10' 
                    ? 
                    <div className='hide'>
                    <img alt='sale30%' src={sale30} className='sale31'/>
                    <img alt='sale30%' src={sale40} className='sale41'/>
                    <img alt='sale30%' src={sale50} className='sale51'/> 
                    </div>
                    : 
                    <>
                    <img alt='sale30%' src={sale30} className='sale30'/>
                    <img alt='sale30%' src={sale40} className='sale40'/>
                    <img alt='sale30%' src={sale50} className='sale50'/> 
                    <img alt='s999' src={s999} className='s999'/> 
                    <img alt='s1299' src={s1299} className='s1299'/> 
                    <img alt='s5990' src={s5990} className='s5990'/> 
                    </>
                  }
                    </div>
                    <div className="item-5">
                    {
                    min==='00' && sec=== '00' 
                    ?  
                    data1.map((item,index)=><CardNoSale2 item={item} key={index}/>) 
                    : 
                    data1.map((item,index)=><Card2 item={item} key={index}/>)
                  }
                    {
                      min==='00' && sec=== '00' ? <ModalCard/> : <></>
                    }
                    </div>
                    <div className="item-6">Следуя плану на 3 месяца, люди получают в 2 раза лучший результат, чем за 1 месяц</div>
                    <div className="item-7"><input type="checkbox" checked/> <span>Я соглашаюсь с <a href='#'>Правилами сервиса</a> и  условиями <a  href='#'>Публичной оферты.</a></span> </div>
                    <button className={blink} onClick={()=>{setBlink("blink-btn")}}>Купить</button>
                    <div className="item-9">Нажимая «Купить», Пользователь соглашается на автоматическое списание денежных средств по истечению купленного периода. 
                        Дальнейшие списания по тарифам участвующим в акции осуществляются по полной стоимости согласно оферте.
                    </div>
    
                </div>
              </div>
              
        </div>
    </div>
      )
} return (
    <div className='app'>     
        <div className='conteiner'>
              <Timer setMin={setMin} setSec={setSec}/>
              <div className="item-2">Выберите подходящий тарифный план</div>
              <div className='content'>
                <img alt='men' src={imgMen} className='item-4'/>
                <div className='block-1'>
                    <div className="item-3">
                    {
                    min==='00' && sec=== '00' 
                    ?  
                    data1.map((item,index)=><CardNoSale item={item} key={index}/>) 
                    : 
                    data1.map((item,index)=><Card item={item} key={index}/>)
                  }
                   {
                    min==='00' && sec=== '00' 
                    ? 
                     <>
                    <div className='hide'>
                    <img alt='sale30%' src={sale30} className='sale31'/>
                    <img alt='sale30%' src={sale40} className='sale41'/>
                    <img alt='sale30%' src={sale50} className='sale51'/> 
                    </div>
                     </>
                    : 
                    <>
                    <img alt='sale30%' src={sale30} className='sale30'/>
                    <img alt='sale30%' src={sale40} className='sale40'/>
                    <img alt='sale30%' src={sale50} className='sale50'/> 
                    <img alt='s999' src={s999} className='s999'/> 
                    <img alt='s1299' src={s1299} className='s1299'/> 
                    <img alt='s5990' src={s5990} className='s5990'/> 
                    </>
                  }
                    </div>
                    <div className="item-5">
                    {
                    min==='00' && sec=== '00' 
                    ?  
                    data1.map((item,index)=><CardNoSale2 item={item} key={index}/>) 
                    : 
                    data1.map((item,index)=><Card2 item={item} key={index}/>)
                  }
                    { min==='00' && sec=== '00' ? <ModalCard/> : <></>}
                    </div>
                    <div className="item-6">Следуя плану на 3 месяца, люди получают в 2 раза лучший результат, чем за 1 месяц</div>
                    <div className="item-7"><input type="checkbox" checked/> <span>Я соглашаюсь с <a href='#'>Правилами сервиса</a> и  условиями <a  href='#'>Публичной оферты.</a></span> </div>
                    <button className="item-8">Купить</button>
                    <div className="item-9">Нажимая «Купить», Пользователь соглашается на автоматическое списание денежных средств по истечению купленного периода. 
                        Дальнейшие списания по тарифам участвующим в акции осуществляются по полной стоимости согласно оферте.
                    </div>
    
                </div>
              </div>
              
        </div>
    </div>
      )
}
  


export default App;

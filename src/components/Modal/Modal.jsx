import {  React , useState, useEffect } from "react"
import './styles/modal.css'
import sale40 from './img/sale40.svg'
import sale50 from './img/sale50.svg'
import sale60 from './img/sale60.svg'
import s999 from './img/cell/s999.svg'
import s1299 from './img/cell/s1299.svg'
import s5990 from './img/cell/s5990.svg'
import { data1 } from "../../data";
import CardSale from "./CardSale";




const Modal = (props) => {

  const [data, setData] = useState([])
    
  useEffect(()=>{
    fetch('https://t-pay.iqfit.app/subscribe/list-test')
    .then(response => response.json())
    .then(json => setData(json))
    .catch(console.error)
  },[])
    const onClick = e => {
      if (e.target.classList.contains('close') || !e.target.closest('.modal-content')) {
        props.close();
      }
    }
    if(data.length!==0){
      return (<div className="modal" onClick={onClick}>
      <div className="modal-content">
        <span className="close">&times;</span>
          <div className="modal-body">
            <h1>НЕ УПУСТИ СВОЙ <strong>ПОСЛЕДНИЙ ШАНС</strong></h1>
            <h2>Мы знаем, как трудно начать.. <bold>Поэтому!</bold></h2>
            <h5>Дарим скидку для лёгкого старта 🏃‍♂️</h5>
            <h4>Посмотри, что мы для тебя приготовили 🔥</h4>
            <div className="modal-card">
            {data.map((item)=><CardSale item={item}/>)}
            </div>
            <button className="btn-1">Начать тренироваться</button>
            {props.children}
          </div>
          <img alt="40%" src={sale40} className="i-2"/>
          <img alt="50%" src={sale50} className="i-3"/>
          <img alt="60%" src={sale60} className="i-4"/>
          <img alt="s999" src={s999} className="i-5"/>
          <img alt="s1299" src={s1299} className="i-6"/>
          <img alt="s5990" src={s5990} className="i-7"/>
      </div>
    </div>
  );
    }else{
      return (<div className="modal" onClick={onClick}>
          <div className="modal-content">
            <span className="close">&times;</span>
              <div className="modal-body">
                <h1>НЕ УПУСТИ СВОЙ <strong>ПОСЛЕДНИЙ ШАНС</strong></h1>
                <h2>Мы знаем, как трудно начать.. <bold>Поэтому!</bold></h2>
                <h5>Дарим скидку для лёгкого старта 🏃‍♂️</h5>
                <h4>Посмотри, что мы для тебя приготовили 🔥</h4>
                <div className="modal-card">
                {data1.map((item)=><CardSale item={item}/>)}
                </div>
                <button className="btn-1">Начать тренироваться</button>
                {props.children}
              </div>
              <img alt="40%" src={sale40} className="i-2"/>
              <img alt="50%" src={sale50} className="i-3"/>
              <img alt="60%" src={sale60} className="i-4"/>
              <img alt="s999" src={s999} className="i-5"/>
              <img alt="s1299" src={s1299} className="i-6"/>
              <img alt="s5990" src={s5990} className="i-7"/>
          </div>
        </div>
      );
    }
    
  };

export default function ModalCard() {

    const [ opened, setOpened ] = useState(true);

    const close = () => setOpened(false);
  
    return (
      <div>
        {opened && <Modal close={close}/>}
      </div>
    );
}
import './card2.css'
import sale70 from './sale70.svg'

export default function Card2(item) {

    const name = item.item.name
    const popular = item.item.isPopular
    const price = item.item.price
    const endless = item.item.isEndless
    const discont = item.item.isDiscount
       
    return popular 
    ? 
    price > 3000 
    ? <>
    <div className='card-2'>
            <h1>{name.toUpperCase()}</h1>
            <div className="price">
                <h2>{price}</h2>
                <strike>18 990₽</strike>
            </div>
             <span>Всегда быть в форме и поддерживать своё здоровье ⭐️</span>       
    </div> 
     <img alt='sale30%' src={sale70} className='sale70'/>
    </>
    : 
    <></>


: <></>
    
}
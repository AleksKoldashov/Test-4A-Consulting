/* eslint-disable jsx-a11y/anchor-is-valid */
import './card.css'


export default function Card(item) {


const name = item.item.name
const popular = item.item.isPopular
const price = item.item.price


    return (
        popular 
        ? 
        price < 3000  
        ? 
        <a className='card-1'>
        <span>{name.toUpperCase()}</span>
        <h1>{price}₽</h1>
        <h3>Чтобы просто начать 👍🏻</h3>     
        </a> 
        : 
        <></>
        :
        <></>
        
        ) 
    
       
    
}
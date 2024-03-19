import './card.css'


export default function CardNoSale(item) {
const name = item.item.name
const popular = item.item.isPopular
const price = item.item.price
const discont = item.item.isDiscount
    return (
        !popular 
        ? 
        discont 
        ? 
        <></>
        : 
            price > 6000 
            ? 
            <></> 
            :
            <> <a className='card-1' href="/#">
            <span>{name}</span>
            <h1>{price}₽</h1>
            <h3>Чтобы просто начать 👍🏻</h3>
            </a> </>
        : 
        <></>
        ) 
    
       
    
}
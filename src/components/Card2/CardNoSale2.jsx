import './card2.css'


export default function CardNoSale2(item) {

    const name = item.item.name
    const popular = item.item.isPopular
    const price = item.item.price
       
    return!popular 
    ? 
    price > 10000 
    ? 
    <>
     <div className='card-2'>
            <h1>{name.toUpperCase()}</h1>
            <div className="price">
                <h2>{price}</h2>
            </div>
             <span>Всегда быть в форме и поддерживать своё здоровье ⭐️</span>       
    </div> 
    </>
    : 
    <>
    
    </>
    : 
    <></>
    
}
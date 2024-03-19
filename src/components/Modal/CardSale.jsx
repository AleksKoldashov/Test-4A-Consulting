import './styles/cardsale.css'


export default function CardSale(item) {

 const name = item.item.name
 const popular = item.item.isPopular
 const price = item.item.price
 const endless = item.item.isEndless
 const discont = item.item.isDiscount
 
 
    return <>
        { !popular 
           ? 
           !discont 
           ? <>
           
           </>
           : 
           price > 6000 ? <></> : <> 
           <a className='card-sale'>
              <div className="header-card">
                <span>{name.toUpperCase()}</span> <input type='radio'/>
              </div>
           <hr className='line' />
           <h1>{price}₽</h1>
           </a> </>
           : <>
           </>
           
           }

           
       </>
}
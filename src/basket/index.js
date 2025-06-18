import Inner from "./inner"

const inner = [
                
              ]

function basket() {
    return(
        <div class="container col-lg-3">
            <h2>Корзина</h2>
            <hr></hr>
            <div>
                {inner.map((item, index) => {
                return (<Inner {...item} key={index}/>)
                })}
            </div>
            
            <hr></hr>
            <h3>Итого: </h3>
        </div>
    )
}

export default basket;
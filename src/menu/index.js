import '../App.css';
import food from '../food.json'
import Food from "./component/"

function menu() {
    return(
        <div className="Menu-grid">
            {food.map((item, index) => {
            return (<Food {...item} key={index}/>)
            })}
        </div>
    )
}

export default menu;
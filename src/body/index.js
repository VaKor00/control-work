import Menu from "../menu/index";
import Basket from "../basket/index";
import '../App.css';

function body() {
    return(
        <div className="App-grid">
            <Menu/>
            <Basket/>
        </div>
    )
}

export default body;
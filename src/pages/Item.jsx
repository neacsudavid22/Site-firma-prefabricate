import View from '../components/View';
import { useParams } from "react-router-dom";

function Item(){
    const { letter } = useParams(); 

    return(
        <>
        <View letter = {letter}/>
        </>
    );
}

export default Item;
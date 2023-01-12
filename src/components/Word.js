import { useParams } from "react-router-dom";

const Word = () => {
    const {word, color, backgroundColor} = useParams();
    const styling ={
        color: color,
        backgroundColor: backgroundColor
    }
    return (
        <div>
            <h1 style={styling}>
            {
            isNaN(word) ? "The word is: " + word :
            "The number is: " + word
            }</h1>
        </div>
    )
}

export default Word;
import { imageUrl } from "../utils/imageUrl.mjs";


const Picks = (props) => {
    const {picks} = props;
    return (
        <div className="flex flex-col">
            {picks.map((pick, index) => <div className="h-16 w-16 bg-cover" key={index} style={{backgroundImage: pick === null? "none" : `url(${imageUrl(pick)})`}}></div>)}
        </div>
    )
}

export default Picks
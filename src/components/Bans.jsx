import { imageUrl } from "../utils/imageUrl.mjs";


const Bans = (props) => {
    const {bans} = props;
    return (
        <div className="flex gap-px">
            {bans.map((ban, index) => <div className="h-8 w-8 bg-cover" key={index} style={{backgroundImage: ban === null? "none" : `url(${imageUrl(ban)})`}}></div>)}
        </div>
    )
}

export default Bans
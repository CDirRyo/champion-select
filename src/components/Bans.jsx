import { imageUrl } from "../utils/imageUrl.mjs";


const Bans = (props) => {
    const {bans, team, phase, turn} = props;
    const isRed= team === "red";
    const isThird = index => index === 2;
    const isCurrentPhase = index => {
        const isCurrentTurn = index + 1 === turn;
        return (isRed && phase === 'rb' && isCurrentTurn)||(!isRed && phase === 'bb' && isCurrentTurn);
    }
    return (
        <div className={`flex gap-1 ${isRed && "justify-end"} mt-auto`}>
            {bans.map((ban, index) => <div className={`border ${isCurrentPhase(index)? "border-yellow-400/70" : "border-gray-500/50"} h-8 w-8 bg-cover ${isThird(index) && "mr-3"}`} key={index} style={{backgroundImage: ban === null? "none" : `url(${imageUrl(ban)})`}}></div>)}
        </div>
    )
}

export default Bans
import { imageUrl } from "../utils/imageUrl.mjs";


const Picks = (props) => {
    const {picks, team, turn, phase} = props;
    const isRed = team === "red";
    const dividerStyle = `mb-2 h-px w-64 from-gray-500/50 to-gray-500/0 ${isRed? "bg-gradient-to-l" : "bg-gradient-to-r"}`;
    const isNullPick = (pick) => pick === null;  
    const isCurrentPhase = index => {
        const isCurrentTurn = index + 1 === turn;
        return (isRed && phase === 'rp' && isCurrentTurn)||(!isRed && phase === 'bp' && isCurrentTurn);
    }   
    return (
        <div> 
            <div className={dividerStyle}></div>          
            {picks.map((pick, index) =>{
                const isCurrent = isCurrentPhase(index);
                const isNull = isNullPick(pick);
                return (<div key={`p${index}`} className={`flex flex-col ${isRed? "items-end": "items-start"}`}>
                    <div className={`flex items-center gap-3 ${isRed && "flex-row-reverse"}`}>
                        <div className={`rounded-full border-2 ${isCurrent? "border-yellow-400/70" : isRed? "border-red-300/70" : "border-sky-300/70"} border-solid h-14 w-14 bg-center bg-cover transition-all`} key={index} style={{backgroundImage: isNull? "none" : `url(${imageUrl(pick)})`}}></div>
                        <p className={`${isCurrent? "text-yellow-400/70" : "text-gray-200/70"}`}>{isCurrent? "Picking..." : isNull? pick : pick.split(/(?=[A-Z])/).join(" ")}</p>
                    </div>
                    
                    <div className={`${dividerStyle} mt-2`}></div>
                </div>)}
            )}
        </div>
    )
}

export default Picks
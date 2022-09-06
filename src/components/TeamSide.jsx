const TeamSide = ({children, team}) => {
    const isRed = team === "Red"; 
    return (
        <div className="flex flex-col h-125.5">
            <h2 className={`${isRed? "text-red-300 text-right" : "text-sky-300"} text-xl mb-2`}>{`${team} Side`}</h2>
            {children}
        </div>
    )
}

export default TeamSide
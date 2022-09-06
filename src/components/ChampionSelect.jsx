const ChampionSelect = ({children}) => {
    return (
        <div className="flex flex-col h-fit">
            {children}
            <div className="h-px bg-gray-500/50 w-152"></div>
        </div>
    )
}

export default ChampionSelect
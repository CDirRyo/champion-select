import { imageUrl } from "../utils/imageUrl.mjs";


const Champions = (props) => {
    const {search, champions, selectChampion, pickedChampions} = props;
    const createStyle = (champion, picked) => {
        return picked.includes(champion)?  {backgroundImage: `url(${imageUrl(champion)}`, filter: "grayscale(100%)"}  : {backgroundImage: `url(${imageUrl(champion)}`}
    }
    
    return (
        <div className="flex flex-wrap content-start overflow-auto h-116 scrollbar w-152 ">
            {champions.filter(champion => champion.toLowerCase().includes(search)).map((champion, index) => (
                <div  className="w-16 flex flex-col mr-9 items-center mb-2.5" key={index} id={champion}>
                    <div onClick={selectChampion} className="h-16 w-16 bg-cover hover:cursor-pointer" style={createStyle(champion, pickedChampions)} ></div>
                    <p onClick={selectChampion} className="text-xs mt-2 whitespace-nowrap text-gray-200/70" >{champion.split(/(?=[A-Z])/).join(" ")}</p>   
                </div>                
            ))}
        </div>
  )
}

export default Champions
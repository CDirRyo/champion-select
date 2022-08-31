import { imageUrl } from "../utils/imageUrl.mjs";


const Champions = (props) => {
    const {search, champions, selectChampion, pickedChampions} = props;
    const createStyle = (champion, picked) => {
        return picked.includes(champion)?  {backgroundImage: `url(${imageUrl(champion)}`, filter: "grayscale(100%)"}  : {backgroundImage: `url(${imageUrl(champion)}`}
    }
    return (
        <div className="flex flex-wrap gap-1 justify-center h-fit">
            {champions.filter(champion => champion.toLowerCase().includes(search)).map((champion, index) => (
            <div onClick={selectChampion} key={index} id={champion} className="h-20 w-20 bg-cover hover:cursor-pointer" style={createStyle(champion, pickedChampions)}></div>           
            ))}
        </div>
  )
}

export default Champions
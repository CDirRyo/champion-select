import { useEffect, useState } from 'react';
import AppContainer from './components/AppContainer.jsx';
import Bans from './components/Bans.jsx';
import Champions from './components/Champions.jsx';
import ChampionSelect from './components/ChampionSelect.jsx';
import Inputs from './components/Inputs.jsx';
import Picks from './components/Picks.jsx';
import Search from './components/Search.jsx';
import TeamSide from './components/TeamSide.jsx';
import Undo from './components/Undo.jsx';
import getChampions from './utils/getChampions.mjs';

function App() {
    const phases = ['bb1', 'rb1', 'bb2', 'rb2', 'bb3', 'rb3', 'bp1', 'rp1', 'rp2', 'bp2', 'bp3', 'rp3', 'rb4', 'bb4', 'rb5', 'bb5', 'rp4', 'bp4', 'bp5', 'rp5', 'end'];
    const champions = ["Aatrox","Ahri","Akali","Akshan","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","AurelionSol","Azir","Bard","Belveth","Blitzcrank","Brand","Braum","Caitlyn","Camille","Cassiopeia","Chogath","Corki","Darius","Diana","Draven","DrMundo","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Gwen","Hecarim","Heimerdinger","Illaoi","Irelia","Ivern","Janna","JarvanIV","Jax","Jayce","Jhin","Jinx","Kaisa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","Khazix","Kindred","Kled","KogMaw","Leblanc","LeeSin","Leona","Lillia","Lissandra","Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","MasterYi","MissFortune","MonkeyKing","Mordekaiser","Morgana","Nami","Nasus","Nautilus","Neeko","Nidalee","Nilah","Nocturne","Nunu","Olaf","Orianna","Ornn","Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","RekSai","Rell","Renata","Renekton","Rengar","Riven","Rumble","Ryze","Samira","Sejuani","Senna","Seraphine","Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Sona","Soraka","Swain","Sylas","Syndra","TahmKench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","TwistedFate","Twitch","Udyr","Urgot","Varus","Vayne","Veigar","Velkoz","Vex","Vi","Viego","Viktor","Vladimir","Volibear","Warwick","Xayah","Xerath","XinZhao","Yasuo","Yone","Yorick","Yuumi","Zac","Zed","Zeri","Ziggs","Zilean","Zoe","Zyra"];
    //const [champions, setChampions] = useState([]);
    const [bluePicks, setBluePicks] = useState([null, null, null, null, null]);
    const [redPicks, setRedPicks] = useState([null, null, null, null, null]);
    const [blueBans, setBlueBans] = useState([null, null, null, null, null]);
    const [redBans, setRedBans] = useState([null, null, null, null, null]);
    const [pickedChampions, setPickedChampions] = useState([]);
    const [currentPhase, setCurrentPhase] = useState(0);
    const [search, setSearch] = useState("");
    const [phase, setPhase] = useState('bb');
    const [turn, setTurn] = useState(1);

    const undo = () => {
        if (currentPhase > 0) {
            const phase = phases[currentPhase-1].slice(0,2);
            const index = parseInt(phases[currentPhase-1][2]) - 1;
            if (phase === 'bb') {
                setBlueBans(prev => [...prev.slice(0, index), null, ...prev.slice(index+1)]);
            } else if (phase === 'rb') {
                setRedBans(prev => [...prev.slice(0, index), null, ...prev.slice(index+1)]);
            } else if (phase === "bp") {
                setBluePicks(prev => [...prev.slice(0, index), null, ...prev.slice(index+1)]);
            } else {
                setRedPicks(prev => [...prev.slice(0, index), null, ...prev.slice(index+1)]);
            }
            setPickedChampions(prev => prev.slice(0, prev.length - 1));
            setCurrentPhase(prev => prev - 1);
        }    
    }

    const selectChampion = e => {
        const champion = e.target.parentElement.id;
        if (currentPhase < 20 && !pickedChampions.includes(champion)) {
            const phase = phases[currentPhase].slice(0,2);
            const index = parseInt(phases[currentPhase][2]) - 1;
            if (phase === 'bb') {
                setBlueBans(prev => [...prev.slice(0, index), champion, ...prev.slice(index+1)]);
            } else if (phase === 'rb') {
                setRedBans(prev => [...prev.slice(0, index), champion, ...prev.slice(index+1)]);
            } else if (phase === "bp") {
                setBluePicks(prev => [...prev.slice(0, index), champion, ...prev.slice(index+1)]);
            } else {
                setRedPicks(prev => [...prev.slice(0, index), champion, ...prev.slice(index+1)]);
            }
            setPickedChampions(prev => [...prev, champion]);
            setCurrentPhase(prev => prev + 1);
        }
    }
    

    //useEffect(() => getChampions(setChampions), []);

    useEffect(() => {
        setPhase(phases[currentPhase].slice(0,2));
        setTurn(parseInt(phases[currentPhase][2]));
    }, [currentPhase])

    return (
        <div className="py-4 flex items-center min-h-152 justify-center h-screen bg-center bg-cover bg-[url('../../public/img/Background.jpg')]">       
            <AppContainer >
                <TeamSide team="Blue">
                    <Picks phase={phase} turn={turn} team="blue" picks={bluePicks}/>
                    <Bans phase={phase} turn={turn} team="blue" bans={blueBans}/>
                </TeamSide>
                <ChampionSelect>
                    <Inputs>
                        <Undo undo={undo}/>
                        <Search search={search} setSearch={setSearch}/>
                    </Inputs>
                    <Champions search={search} pickedChampions={pickedChampions} selectChampion={selectChampion} champions={champions}/>
                </ChampionSelect>
                <TeamSide team="Red">
                    <Picks phase={phase} turn={turn} team="red" picks={redPicks}/>
                    <Bans phase={phase} turn={turn} team="red" bans={redBans} />
                </TeamSide>
            </AppContainer>           
        </div>
    );
}

export default App;

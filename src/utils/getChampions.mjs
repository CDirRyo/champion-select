import axios from 'axios';

const champions = axios.create({
    baseURL: 'http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/champion.json'
})

const getChampions = () => {
    champions.get().then(response => {
        console.log(JSON.stringify(Object.keys(response.data.data)));
        //setChampions(Object.keys(response.data.data));
    })
}

getChampions();

export default getChampions;
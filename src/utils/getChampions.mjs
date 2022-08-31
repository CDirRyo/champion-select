import axios from 'axios';

const champions = axios.create ({
    baseURL: 'http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/champion.json'
})

const getChampions = setChampions => {
    champions.get().then(response => {
        setChampions(Object.keys(response.data.data))
    })
}

export default getChampions;
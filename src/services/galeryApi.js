//Dont work meanwhile!
const urlApi = 'https://rickandmortyapi.com/api';

export const getAll = () => 
    fetch(urlApi+'/character')
        .then((res) => {res.json()})
        .then((data) => data.results)
        .catch((error) => console.log(error))

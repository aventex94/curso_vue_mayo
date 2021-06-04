import http from './api/apiClient';

const getTemperature = async() =>{

    http.defaults.params = {q:'argentina'}

    return await http.get().then((response) =>{
        return response.data.current.temp_c;
    }).catch((err)=>{
        return err;
    })
}
const exported = {
    getTemperature,
}

export default exported;
import api from '../api/api'


export const getData = async (url) =>{
    const res = await api.get(`${url}`)
    .then(res =>{
        return res;
    })
    .catch(error => console.log(error));

    return res;
}

export const getDataWithPage = async (url,page) =>{
    const res = await api.get(`${url}?page=${page}`)
    .then(res =>{
        return res;
    })
    .catch(error => console.log(error));

    return res;
}
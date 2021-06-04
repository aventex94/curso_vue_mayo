import httpClient from '../httpClient'

let http = httpClient({
    baseURL: process.env.VUE_APP_BASEURL
})

/* http.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`; */
http.defaults.headers.common['x-rapidapi-key'] = '65225dac38msh79b92e0eacad9cdp1643fcjsn86d83012722b';
http.defaults.headers.common['x-rapidapi-host'] = 'weatherapi-com.p.rapidapi.com';




export default http
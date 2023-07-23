import axios from 'axios';

export default axios.create({
    baseURL: "http://192.168.0.127:5050/djangobackend_api/informations/",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
    }
})
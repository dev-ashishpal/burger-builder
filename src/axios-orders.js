import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-burger-79bbb-default-rtdb.firebaseio.com/'
});

export default instance;
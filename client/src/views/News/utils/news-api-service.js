import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/';

const getNews = () => {
    axios.get('news/').then(res => {
        return { news: res.data };
    });
};

export default {
    getNews,
};

import axios from 'axios';

const getNews = () => {
    axios.get('news/').then(res => {
        return { news: res.data };
    });
};

export default {
    getNews,
};

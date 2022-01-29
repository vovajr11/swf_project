import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import styled from 'styled-components';

const NewsItem = styled.li`
    border: 1px solid red;
`;

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('news/').then(res => {
            return setNews(res.data);
        });
    }, []);

    return (
        <div>
            <h1>News</h1>

            <ul>
                {news.length > 0 ? (
                    news.map(item => {
                        return (
                            <NewsItem>
                                <ReactQuill
                                    readOnly={true}
                                    value={item.content}
                                    modules={{ toolbar: null }}
                                />
                            </NewsItem>
                        );
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </ul>
        </div>
    );
};

export default News;

import React from 'react';
import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { fetchCurrentChapter } from '../../services/courseApi';
import styled from 'styled-components';

const Content = styled(ReactQuill)`
    /* .ql-container.ql-snow {
        border: none;
    } */
`;

const ChapterDetails = props => {
    const { params } = props.match;
    const [isLoaded, setIsLoaded] = useState(false);
    const [chapterDetails, setChapterDetails] = useState({});

    useEffect(() => {
        fetchCurrentChapter(params.chapterId).then(chapter => {
            setChapterDetails(chapter);
            setIsLoaded(true);
        });
    }, []);

    return (
        <div>
            {isLoaded ? (
                <>
                    <h1>{chapterDetails.chapterName}</h1>
                    <Content
                        modules={{ toolbar: null }}
                        value={chapterDetails.chapterContent}
                        style={{ margin: '1em', flex: '1' }}
                        readOnly={true}
                    />
                </>
            ) : (
                'Load'
            )}
        </div>
    );
};

export default ChapterDetails;

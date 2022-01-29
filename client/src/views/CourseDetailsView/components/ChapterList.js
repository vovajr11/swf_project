import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
    padding-left: 40px;
`;

const Item = styled.li`
    display: flex;
    margin-bottom: 10px;

    &:last-child {
        margin-bottom: 0;
    }

    p {
        color: #2196f3;
        text-decoration: underline;
        margin: 0 0 0 10px;
        cursor: pointer;
    }
`;

const Warning = styled.p`
    margin: 40px 80px;
`;

const ChapterList = ({ chapters, currentUrl }) => {
    return (
        <>
            {chapters.length > 0 ? (
                <List>
                    {chapters.map(({ chapterId, chapterName }) => (
                        <Item key={chapterId}>
                            <Link
                                to={{
                                    pathname: `${currentUrl}/chapterId:${chapterId}`,
                                }}
                            >
                                <p>{chapterName}</p>
                            </Link>
                        </Item>
                    ))}
                </List>
            ) : (
                <Warning>Нема тем</Warning>
            )}
        </>
    );
};

export default ChapterList;

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { courseOperations, courseSelectors } from '../../redux/courses';
import ChapterList from './components/ChapterList';
import { fetchCourseModules } from '../../services/courseApi';
import {
    Wrapp,
    Title,
    ModuleList,
    ModuleItem,
    LeftItem,
    RightItem,
} from './CourseDetailsStyled';

const imgU =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAMFBMVEXi4uImJiadnZ2SkpLZ2dlsbGxdXV15eXnGxsaoqKiysrKGhoZNTU3Q0NA7Ozu8vLx+CZkfAAAAtElEQVRoge3T2Q6DIBCF4Tkim0t9/7etS22TWg2a3pj834WTcCKDgGYAAAAAAAC4qVbV+Kyj5PtPLc8L1F7zJEHOPbr6XUvzIkFxmiTLmVWq1lqcF8lpfqVVY5bk1zoomEUNe/m5Jq91RaVxaxTWOo02y4J/539pYuHRhaP8QpPtdmQpH+UXmmwPNnTdcol28jOS8/Ku31zRccmN4n5+8jsmzffPNqidDiLv5QAAAAAAALilJ/frBu723vpKAAAAAElFTkSuQmCC';

const CourseDetailsView = props => {
    const { params, url } = props.match;
    const [isLoaded, setIsLoaded] = useState(false);
    const [courseName, setCourseName] = useState('');
    const [courseModules, setCourseModules] = useState([]);

    useEffect(() => {
        fetchCourseModules(params.courseId).then(
            ({ courseModules, courseName }) => {
                setCourseName(courseName);
                setCourseModules(courseModules);
                setIsLoaded(true);
            },
        );
    }, []);

    return (
        <Wrapp>
            {isLoaded && courseModules.length > 0 ? (
                <>
                    <h1>{courseName}</h1>
                    <ModuleList>
                        {courseModules.map(({ _id, moduleName, chapters }) => (
                            <ModuleItem key={_id}>
                                <LeftItem>
                                    <img
                                        src={imgU}
                                        alt=""
                                        width={100}
                                        height={100}
                                    />
                                    <h3>{moduleName}</h3>
                                </LeftItem>

                                <RightItem>
                                    <ChapterList
                                        chapters={chapters}
                                        currentUrl={url}
                                        moduleData={{
                                            id: _id,
                                            moduleName,
                                        }}
                                    />
                                </RightItem>
                            </ModuleItem>
                        ))}
                    </ModuleList>
                </>
            ) : (
                'Load'
            )}
        </Wrapp>
    );
};

export default CourseDetailsView;

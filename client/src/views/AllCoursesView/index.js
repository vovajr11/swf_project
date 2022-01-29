import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { fetchCourses } from '../../services/courseApi';
import {
    Wrapp,
    Title,
    CourseList,
    CourseItem,
    LeftItem,
    RightItem,
    Description,
} from './Styled';
import { BtnGreen } from '../../components/Global/Styled';
const imgU =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAMFBMVEXi4uImJiadnZ2SkpLZ2dlsbGxdXV15eXnGxsaoqKiysrKGhoZNTU3Q0NA7Ozu8vLx+CZkfAAAAtElEQVRoge3T2Q6DIBCF4Tkim0t9/7etS22TWg2a3pj834WTcCKDgGYAAAAAAAC4qVbV+Kyj5PtPLc8L1F7zJEHOPbr6XUvzIkFxmiTLmVWq1lqcF8lpfqVVY5bk1zoomEUNe/m5Jq91RaVxaxTWOo02y4J/539pYuHRhaP8QpPtdmQpH+UXmmwPNnTdcol28jOS8/Ku31zRccmN4n5+8jsmzffPNqidDiLv5QAAAAAAALilJ/frBu723vpKAAAAAElFTkSuQmCC';

const AllCoursesView = props => {
    const { match } = props;
    const [isLoaded, setIsLoaded] = useState(false);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses().then(chapter => {
            setCourses(chapter);
            setIsLoaded(true);
        });
    }, []);

    return (
        <Wrapp>
            <Title>Всі курси</Title>

            {isLoaded ? (
                <CourseList>
                    {courses.map(({ id, courseName, courseDescription }) => (
                        <CourseItem key={id}>
                            <LeftItem>
                                <img
                                    src={imgU}
                                    alt=""
                                    width={100}
                                    height={100}
                                />
                                <Description>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quibusdam doloribus qui,
                                    quidem quaerat delectus quae enim vitae
                                    error dolorem impedit necessitatibus porro
                                    ducimus labore ea, facere iste! Nostrum,
                                    distinctio deserunt?
                                </Description>
                            </LeftItem>

                            <RightItem>
                                <h3>{courseName}</h3>
                                <h6>Кількість модулів: 5</h6>
                                <Link
                                    to={{
                                        pathname: `${match.url}/${courseName}/${id}`,
                                    }}
                                >
                                    <BtnGreen>Перейти</BtnGreen>
                                </Link>
                            </RightItem>
                        </CourseItem>
                    ))}
                </CourseList>
            ) : (
                <ReactLoading
                    type="spinningBubbles"
                    color="green"
                    height={100}
                    width={100}
                />
            )}
        </Wrapp>
    );
};

export default AllCoursesView;

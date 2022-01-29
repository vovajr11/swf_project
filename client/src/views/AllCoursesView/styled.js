import styled from 'styled-components';

export const Wrapp = styled.section`
    flex-grow: 2;
`;

export const Title = styled.h3`
    font-size: 30px;
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
`;

export const CourseList = styled.ul`
    width: 800px;
`;

export const CourseItem = styled.li`
    border-radius: 10px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    padding: 20px;
    margin-bottom: 30px;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const LeftItem = styled(Flex)``;

export const Description = styled.p`
    font-size: 18px;
    margin-left: 20px;
`;

export const RightItem = styled(Flex)`
    margin-top: 10px;

    h3 {
        font-size: 25px;
        font-weight: 600;
        width: 100px;
        text-align: center;
    }

    h6 {
        border-radius: 5px;
        padding: 2px 10px;
        margin: 0 40px 0 20px;
        display: inline-block;
        background-color: #8bc34a;
        font-weight: 600;
    }
`;

export const Test = styled.li``;

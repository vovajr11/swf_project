import styled from 'styled-components';

export const Wrapp = styled.section`
    flex-grow: 2;
`;

export const Title = styled.h3`
    font-size: 30px;
    margin: 20px 0;
`;

export const ModuleList = styled.ul`
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
`;

export const ModuleItem = styled.li`
    border-radius: 10px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    padding: 20px;
    margin-bottom: 30px;
    display: flex;
    flex-basis: calc((100% - 160px) / 3);
    margin-right: 20px;

    &:nth-child(3n) {
        margin-right: 0;
    }
`;

export const LeftItem = styled.div`
    h3 {
        font-size: 20px;
        font-weight: 600;
        width: 100px;
        text-align: center;
    }
`;

export const RightItem = styled.div``;

import styled from 'styled-components';

export const WordItem = styled.li`
  width: 400px;
  background-color: #ffdb2f;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const WordItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Word = styled.span`
  margin-right: 20px;
`;

export const TranslatedWord = styled.span`
  margin-left: 20px;
`;

export const DeleteWord = styled.button`
  background-color: #f443367d;
  padding: 2px 8px;
  border-radius: 50%;

  :hover {
    background-color: #f44336;
  }
`;

// export const WordItemInfo = styled.div``;

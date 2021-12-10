import styled from 'styled-components';

export const UserProfile = styled.section`
  width: 1200px;
  margin-top: 100px;
  box-shadow: 10px 10px 16px 3px rgb(34 60 80 / 10%);
  border-radius: 8px;
  padding: 10px 30px;

  > h3 {
    font-size: 18px;
    margin: 10px 0;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  margin-top: 100px;
`;

export const UserData = styled.div`
  margin-left: 30px;
`;

export const UserPhoto = styled.img`
  border-radius: 5px;
`;

export const UserName = styled.h3`
  font-size: 40px;
`;

export const UserMail = styled.p`
  font-size: 20px;
`;

export const NotesWrapp = styled.div`
  margin: 22px 0;
  display: flex;
  justify-content: space-between;
`;

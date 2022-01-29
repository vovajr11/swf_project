import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../../redux/auth';

import styled from 'styled-components';

const UserBox = styled.div`
    height: 90px;
    background-color: #fbc02d;
    margin: 40px auto;
    border-radius: 10px;
    width: 180px;
    padding: 5px;
    text-align: center;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const LogoutBtn = styled.button`
    background-color: #d32f2f;
    border: none;
    border-radius: 10px;
    color: white;
    padding: 5px 10px;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`;

const UserMenu = ({ name, avatar, onLogout }) => (
    <UserBox>
        <div>
            <img src={avatar} alt="User Avatar" width="32" />
            <span>Привіт, {name}</span>
        </div>

        <LogoutBtn type="button" onClick={onLogout}>
            Вийти
        </LogoutBtn>
    </UserBox>
);

const mapStateToProps = state => ({
    name: authSelectors.getUserName(state),
    avatar: 'http://vectorlogofree.com/wp-content/uploads/2014/02/30550-batman-logo-silhouette-icon-vector-icon-vector-eps.png',
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
    UserMenu,
);

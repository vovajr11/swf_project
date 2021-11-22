import React from 'react';
import iconPlus from '../../img/icons/plus.png';
import iconMinus from '../../img/icons/minus.png';
import styled from 'styled-components';

const Word = styled.button`
  width: 100%;
  height: 30px;
  background-color: ${props => props.backgroundColor};
  display: flex;
  align-items: center;

  img {
    width: ${props => props.imgSize};
  }
`;


const AnswerItem = props => {
  const { value, label, size } = props;

  return (
    <>
      {value === 'plus' && (
        <Word imgSize={size + 'px'} backgroundColor="#4caf50">
          <img src={iconPlus} alt="" />
          <label>{label}</label>
        </Word>
      )}

      {value === 'minus' && (
        <Word imgSize={size + 'px'} backgroundColor="#F44336">
          <img src={iconMinus} alt="" />
          <label>{label}</label>
        </Word>
      )}
    </>
  );
};

export default AnswerItem;

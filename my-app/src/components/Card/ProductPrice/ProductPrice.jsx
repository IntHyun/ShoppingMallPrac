import React from 'react';
import styled from 'styled-components';

const PriceStyled = styled.strong`
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
`;

const PriceWonStyled = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin-left: 5px;
`;

export default function ProductPrice({ productPrice }) {
    return (
        <>
            <PriceStyled>{productPrice}</PriceStyled>
            <PriceWonStyled> 원</PriceWonStyled>
        </>
    );
}

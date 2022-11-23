import React from 'react';
import styled from 'styled-components';

const LinkStyle = styled.a`
    /* background: #6327fe url(../../assets/images/icon-shopping-cart-white.svg)
        no-repeat center / 40px 40px; */
    background-color: #6327fe;
    background-image: url('../../assets/images/icon-shopping-cart-white.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 40px 40px;
`;

export default function Cart() {
    return <LinkStyle>Cart</LinkStyle>;
}

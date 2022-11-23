import React from 'react';
import Card from '../../components/Card/Card';
import Cart from '../../components/Cart/Cart';
import { data } from '../../database/data';
import styled from 'styled-components';

const UlStyled = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px;
    width: 1260px;
    margin-right: 60px;
`;

export default function Home() {
    return (
        <main>
            <UlStyled>
                {data.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </UlStyled>
            <Cart />
        </main>
    );
}

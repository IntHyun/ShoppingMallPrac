import React from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductName from './ProductName/ProductName';
import ProductPrice from './ProductPrice/ProductPrice';
import styled from 'styled-components';

const LiStyled = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

const ImgStyled = styled.div`
    position: relative;
    width: 380px;
    height: 380px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    overflow: hidden;
`;

const PriceStyle = styled.div`
    display: flex;
    align-items: center;
`;

const BtnStyle = styled.button`
    width: 22px;
    height: 22px;
    border: none;
    background: url(../../assets/images/icon-heart.svg) no-repeat center /
        contain;
`;

export default function Card({ thumbnailImg, productName, price }) {
    return (
        <LiStyled>
            <ImgStyled>
                <ProductImage
                    productName={productName}
                    thumbnailImg={thumbnailImg}
                />
            </ImgStyled>
            <ProductName productName={productName} />
            <BtnStyle>like</BtnStyle>
            <PriceStyle>
                <ProductPrice productPrice={price} />
            </PriceStyle>
        </LiStyled>
    );
}

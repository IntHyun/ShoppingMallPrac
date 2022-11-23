import React from 'react';

export default function ProductImage({ thumbnailImg, productName }) {
    console.log(thumbnailImg);
    return (
        <img
            src={'https://test.api.weniv.co.kr/' + thumbnailImg}
            alt={productName}
        />
    );
}

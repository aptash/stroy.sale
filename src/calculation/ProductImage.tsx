import React from 'react';
import styled from 'styled-components';

const ImgContainer = styled.div`
  border-collapse: collapse;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(225, 228, 232);
  border-radius: 50%;
  overflow: hidden;
`;

const Picture = styled.img`
  width: 24px;
  height: 24px;
`;

const ProductImage = (props: { url: string }) => {
  return (
    <ImgContainer>
      <Picture src={props.url} alt="" />
    </ImgContainer>
  );
};

export default ProductImage;

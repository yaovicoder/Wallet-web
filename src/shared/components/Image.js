import React from "react";
import styled, { css } from "styled-components";
import Carousel from "nuka-carousel";

let Img = styled.img`
  width: 100%;
  height: auto;
`;

let DivCarrousel = styled.div`
  margin-top: 4%;
  width: 75% !important;

  
  & .slider-list {
    height: 80vh !important;
  }

  & .slider-control-bottomcenter ul {
    top: 10rem !important;
  }

  & .slider-control-bottomcenter ul li button {
    font-size: 40px !important;
    color: white !important;    
  }

  & .slider-control-centerright button {
    display: none !important;
  }

  & .slider-control-centerleft button {
    display: none !important;
  }
`;

let P = styled.div`
  color: white;
  font-size: 10pt;
  padding-left:auto;
  padding-right:auto;
  margin-top: 4%;
  margin-bottom: 4%;
  text-align: center;
`;
let DivParagraph = styled.div`
  margin: auto;
  width: 80%;
  padding: 10px;
`;

class Image extends React.Component {
  handleChange = index => {
    if (index == this.props.imageList.length) this.renderImage(this.props.imageList);
  };
  render() {
    return (
      <DivCarrousel>
        <Carousel wrapAround autoplay>
          {this.renderImage(this.props.imageList)}
        </Carousel>
      </DivCarrousel>

    );
  }

  renderImage = images => {
    return images.map((photo, index) => (
      <div key={index}>
        <Img src={photo.link} />
        <DivParagraph>
          <P>{photo.text}</P>
        </DivParagraph>
      </div>

    ));
  };
}

export default Image;

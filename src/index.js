import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Carousel from "nuka-carousel";
import styled from "react-emotion";
import { css } from "emotion";

const SomeDiv = styled("div")`
      width : 200px;
      background-color: papayawhip;
`;

const wrapperImg = css`
    padding-top: 66.334%;
    position:relative;
    background-image: url("https://dummyimage.com/300x200/000/fff");
    background-size: cover;
    background-position:center center;
`;

class App extends React.Component {
  imageRef = React.createRef();
  imageRef2 = React.createRef();

  componentDidMount() {
    console.log(this.imageRef.current.offsetHeight);
    //     console.log(this.imageRef2.current.offsetHeight);
  }
  render() {
    const array = new Array(20).fill(2);
    return (
      <div className="App">
        <Carousel
          showIndicators={false}
          slidesToShow={1.5}
          cellSpacing={8}
          heightMode="max"
          initialSlideWidth={300}
          renderCenterRightControls={() => null}
          renderCenterLeftControls={() => null}
          renderBottomCenterControls={() => null}
          showDots={false}
          style={{ margin: "0 auto" }}
          slidesToShow={2.5}
          cellSpacing={40}
        >
          {array.map((val, key) => (
            <div css={`padding :0 20px; position:relative`}>
              <div ref={this.imageRef} className={wrapperImg} />
              <SomeDiv>Hello Why is this happening</SomeDiv>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

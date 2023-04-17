import React, { Component } from "react";

import { Button } from "carbon-components-react";

import { fabric } from "fabric";

import _ from "lodash";

import randomColor from "randomcolor";

import Whiteboard from "./../Whiteboard";

import Modal from "../Modal/Modal";

import appHelper from "./appHelper";
import utilities from "../utilities";

import "./styles.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canvas: null,
      canvasWidth: window.innerWidth - 24,
      isModalOpen: false,
      shapesList: [],
    }
    
    // Constants
    this.CANVAS_HEIGHT = 500;
    this.SHAPE_SIZE = 100;
    this.SHAPE_MAX_LEFT = 500;
    this.SHAPE_MAX_TOP = 500;

    this.canvasId = "whiteboard";

    // Methods
    this.initCanvas = this.initCanvas.bind(this);
    this.setIsModalOpen = this.setIsModalOpen.bind(this);
  }

  initCanvas() {
    this.setState({
        canvasWidth: (window.innerWidth - 24),
    }, () => {
      const canvas = new fabric.Canvas(
        this.canvasId, 
        {
          height: this.CANVAS_HEIGHT,
          width: (this.state.canvasWidth / 2),
          backgroundColor: "grey",
        }
     );

      this.setState({ canvas });
    });
  }

  componentDidMount() {
    this.initCanvas();
  }

  handleAddRandomShape() {
    const shapesNamesList = appHelper.getShapesList();
    const fabricShapeIndex = utilities.random(0, shapesNamesList.length - 1);

    const randomShapeName = shapesNamesList[fabricShapeIndex];
    const RandomShapeConstructor = appHelper.getFabricShape(randomShapeName);

    const rdmColor = randomColor({
      format: "hex"
    });
    
    const randomShape = new RandomShapeConstructor({
      ...(
          (randomShapeName === "circle") && 
          {
            radius: (this.SHAPE_SIZE/2),
          }
      ),
      left: utilities.random(100, this.SHAPE_MAX_LEFT),
      top: utilities.random(100, this.SHAPE_MAX_TOP),
      width: this.SHAPE_SIZE,
      height: this.SHAPE_SIZE,
      fill: rdmColor,
    });

    if (this.state.canvas) {
      this.state.canvas.add(randomShape);
    }
  }

  setIsModalOpen(isModalOpen) {
    return this.setState({
      isModalOpen,
    });
  }

  render() {
    return (
      <div className="app-container">
        <Modal
          isModalOpen={this.state.isModalOpen}
          setIsModalOpen={this.setIsModalOpen}
          shapesList={this.state.shapesList}
        />
        <Whiteboard
          width={this.state.canvasWidth/2}
          height={this.CANVAS_HEIGHT}
          ref={this.canvasRef}
        />
        <section id="buttons-container"
          style={{
            marginTop: "16px",
            marginBottom: "16px",
            borderTop: `5px solid black`,
          }}
        >
          <Button
          id="generateShapeButton"
          className="actionButton"
          onClick={this.handleAddRandomShape}
          >
              Add random shape     
          </Button>
          <Button
            className="actionButton"
            id="openModalButton"
            onClick={() => this.setIsModalOpen(true)}
          >
            Open Earthly Things
          </Button>
        </section>
      </div>
  
    );
  }
}

export default App;

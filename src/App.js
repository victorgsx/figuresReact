import React, { Component } from 'react';
import { Row, Col, Container } from "react-bootstrap";

import FigureForm from "./Components/FigureForm";
import FigureList from "./Components/FigureList";

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {

    typesConfig = [
        {
            id: "circle",
            title: "Круг",
            fields: [
                {
                    id: "radius",
                    title: "Радиус",
                }
            ],
            getArea: (params) => Math.PI * Math.pow(params.radius, 2)
        },
        {
            id: "square",
            title: "Квадрат",
            fields: [
                {
                    id: "sideA",
                    title: "Сторона А",
                }
            ],
            getArea: (params) => Math.pow(params.sideA, 2)
        },
    ];

    constructor(props) {
        super(props);

        this.state = {
            figures: [],
        };

        this.addFigure = this.addFigure.bind(this);
    }

    addFigure(figure) {
        this.setState({figures: [...this.state.figures, figure]});
    }

    render() {
        return (
            <Container>
                <Row className="mt-4">
                    <Col>
                        <FigureForm typesConfig={this.typesConfig} handleSubmit={this.addFigure}/>
                    </Col>
                    <Col md={8}>
                        <FigureList figures={this.state.figures}/> 
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default App;

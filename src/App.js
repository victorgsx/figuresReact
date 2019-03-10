import React, { Component } from 'react';
import { Row, Col, Container } from "react-bootstrap";

import { FiguresConfig } from "./figuresConfig";
import FigureForm from "./Components/FigureForm";
import FigureList from "./Components/FigureList";

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {

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
                        <FigureForm typesConfig={FiguresConfig} handleSubmit={this.addFigure}/>
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

import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class FigureList extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
        
    }

    render() {
        const {figures} = this.props;

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TypeID</th>
                        <th>Area</th>
                    </tr>
                </thead>
                <tbody>
                    {figures.map((figureItem) => {
                        return (
                            <tr key={figureItem.id}>
                                <td>{figureItem.id}</td>
                                <td>{figureItem.typeId}</td>
                                <td>{figureItem.area}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    }
};

export default FigureList;

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

        if (figures.length === 0) {
            return (
                <div className="alert alert-dark">Нет добавленных фигур</div>
            );
        } 

        return (
            <Table striped bordered hover size="sm">
                <thead className="thead-dark">
                    <tr>
                        <th style={{width: '120px'}}>ID</th>
                        <th>Тип</th>
                        <th>Площадь</th>
                        <th>Периметр</th>
                    </tr>
                </thead>
                <tbody>
                    {figures.map((figureItem) => {
                        return (
                            <tr key={figureItem.id}>
                                <td>{figureItem.id}</td>
                                <td>{figureItem.typeId}</td>
                                <td>{figureItem.area.toFixed(2)}</td>
                                <td>{figureItem.perimeter.toFixed(2)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    }
};

export default FigureList;

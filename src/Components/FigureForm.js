import React, { Component } from 'react';
import shortid from 'shortid';

class FigureForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            figureId: "",
            fields: {},
            figureConfig: undefined,
        };

        this.handleFigureChange = this.handleFigureChange.bind(this);
        this.handleFigureFiedUpdate = this.handleFigureFiedUpdate.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFigureChange(event) {
        let figureId = event.target.value;
        this.setState({
            figureId: figureId,
            figureConfig: this.props.typesConfig.find((item) => item.id === figureId),
            fields: {},
        })
    }

    handleFigureFiedUpdate(fieldId, fieldValue) {
        this.setState({
            fields: {
                ...this.state.fields,
                [fieldId]: parseFloat(fieldValue)
            }
        })
    }

    handleFormSubmit(event) {
        this.props.handleSubmit({
            id: shortid.generate(),
            typeId: this.state.figureId,
            fields: this.state.fields,
            area: this.state.figureConfig.getArea(this.state.fields),
            perimeter: this.state.figureConfig.getPerimeter(this.state.fields),
        });
        event.preventDefault();
    }

    render() {
        let figureFields = "";

        if (this.state.figureConfig) {
            figureFields = this.state.figureConfig.fields.map((fieldItem) => {
                return (
                    <div className="form-group" key={fieldItem.id}>
                        <label>{fieldItem.title}</label>
                        <div className="input-group input-group-sm">
                            <input 
                                type="text"
                                className="form-control form-control-sm"
                                onChange={(event) => this.handleFigureFiedUpdate(fieldItem.id, event.target.value)}
                                value={this.state.fields[fieldItem.id] ? this.state.fields[fieldItem.id] : ""}
                            />
                            <div className="input-group-append">
                                <span className="input-group-text">см</span>
                            </div>
                        </div>
                    </div>
                );
            })
        }

        return (
            <form className="form" onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label>Фигура:</label>
                    <select value={this.state.figureId} className="form-control form-control-sm" onChange={this.handleFigureChange}>
                        <option value="">Выберите фигуру</option>
                        {this.props.typesConfig.map((figureItem) => {
                            return <option 
                                key={figureItem.id}
                                value={figureItem.id}
                                >{figureItem.title}</option>
                        })}
                    </select>
                </div>
                {figureFields}
                <button type="submit" className="btn btn-dark btn-block btn-sm" disabled={!this.state.figureId}>Добавить</button>
            </form>
        );
    }
};

export default FigureForm;

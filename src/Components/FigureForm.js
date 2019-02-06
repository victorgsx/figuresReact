import React, { Component } from 'react';


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
                [fieldId]: fieldValue
            }
        })
    }

	handleFormSubmit(event) {
		this.props.handleSubmit({
			id: + new Date(),
			typeId: this.state.figureId,
			...this.state.fields,
			area: this.state.figureConfig.getArea(this.state.fields),
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
						<input 
						    type="text"
						    className="form-control"
						    onChange={(event) => this.handleFigureFiedUpdate(fieldItem.id, event.target.value)}
						    value={this.state.fields[fieldItem.id] ? this.state.fields[fieldItem.id] : ""}
					    />
					</div>
				);
			})
		}

		return (
			<form className="form" onSubmit={this.handleFormSubmit}>
				<div className="form-group">
					<label>Фигура:</label>
					<select value={this.state.figureId} className="form-control" onChange={this.handleFigureChange}>
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
				<button type="submit" className="btn btn-primary btn-block" disabled={!this.state.figureId}>Добавить</button>
			</form>
		);
	}
};

export default FigureForm;

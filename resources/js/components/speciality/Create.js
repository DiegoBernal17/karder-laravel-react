import axios from 'axios';
import React, { Component } from 'react'

class CreateSpeciality extends Component {
    constructor (props) {
        super(props)
        this.state = {
            code: '',
            name: '',
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateSpeciality= this.handleCreateSpeciality.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCreateSpeciality (event) {
        event.preventDefault()

        const { history } = this.props

        const speciality = {
            code: this.state.code,
            name: this.state.name
        }

        axios.post('/api/speciality', speciality)
            .then(response => {
                history.push('/specialities')
            })
            .catch(error => {
                this.setState({
                    errors: "Code already exist!"
                })
            })
    }

    hasErrorFor (field) {
        return !!this.state.errors[field]
    }

    renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className="invalid-feedback">
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            )
        }
    }

    render () {
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>Create new speciality</div>
                            <div className='card-body'>
                                <form onSubmit={this.handleCreateSpeciality}>
                                    <div className='form-group'>
                                        <label htmlFor='name'>Speciality code</label>
                                        <input
                                            id='code'
                                            type='text'
                                            className={`form-control ${this.hasErrorFor('code') ? 'is-invalid' : ''}`}
                                            name='code'
                                            value={this.state.code}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('code')}
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='name'>Speciality name</label>
                                        <input
                                            id='name'
                                            type='text'
                                            className={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                            name='name'
                                            value={this.state.name}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('name')}
                                    </div>
                                    <button className='btn btn-primary'>Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateSpeciality
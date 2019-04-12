import axios from 'axios';
import React, { Component } from 'react';


class Speciality extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sp: {}
        }
    }

    componentDidMount () {
        const specialityId = this.props.match.params.id

        axios.get(`/api/speciality/${specialityId}`).then(response => {
            this.setState({
                sp: response.data,
            })
        })
    }

    render () {
        const { sp } = this.state

        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>{sp.code}</div>
                            <div className='card-body'>
                                <p>{sp.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Speciality
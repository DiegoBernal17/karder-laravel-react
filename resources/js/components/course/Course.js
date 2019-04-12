import axios from 'axios';
import React, { Component } from 'react';


class Course extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cr: {}
        }
    }

    componentDidMount () {
        const courseId = this.props.match.params.id

        axios.get(`/api/course/${courseId}`).then(response => {
            this.setState({
                cr: response.data,
            })
        })
        console.log(this.state.cr);
    }

    render () {
        const { cr } = this.state

        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>{cr.code}</div>
                            <div className='card-body'>
                                <p>{cr.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Course
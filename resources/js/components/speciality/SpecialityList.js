import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SpecialityList extends Component {
  constructor () {
    super()
    this.state = {
      specialities: []
    }
  }

  componentDidMount () {
    axios.get('/api/specialities').then(response => {
      this.setState({
        specialities: response.data
      })
    })
  }

  render () {
    const { specialities } = this.state
    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header'>All Specialities</div>
              <div className='card-body'>
                <Link className='btn btn-primary btn-sm mb-3' to='/speciality/create'>
                  Create new speciality
                </Link>
                <ul className='list-group list-group-flush'>
                  {specialities.map(speciality => (
                    <Link
                      className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                      to={`/speciality/${speciality.id}`}
                      key={speciality.id}
                    >
                      {speciality.name}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SpecialityList
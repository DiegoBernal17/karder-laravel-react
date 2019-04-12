import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import SpecialityList from './speciality/SpecialityList'
import Speciality from './speciality/Speciality'
import CreateSpeciality from "./speciality/Create";
import CourseList from "./course/CourseList";
import CreateCourse from "./course/Create";
import Course from "./course/Course";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={SpecialityList} />
                        <Route exact path='/specialities' component={SpecialityList} />
                        <Route path='/speciality/create' component={CreateSpeciality} />
                        <Route path='/speciality/:id' component={Speciality} />
                        <Route exact path='/courses' component={CourseList} />
                        <Route path='/course/create' component={CreateCourse} />
                        <Route path='/course/:id' component={Course} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
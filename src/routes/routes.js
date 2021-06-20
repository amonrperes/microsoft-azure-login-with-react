import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from '../pages/Login/index';
import Home from '../pages/Home';
import Courses from '../pages/Courses';
import Profile from '../pages/Profile';
import CourseDetail from '../pages/CourseDetail';
import Content from '../pages/Content';

export default function Routes(){
    return(
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/content/courses" component={Courses} />
      <Route path='/me/profile' component={Profile} />
      <Route path='/course-detail' component={CourseDetail} />
    </BrowserRouter>
    )

}

import React from 'react';
import Course from './Course/Course';
// import c from './Courses.module.css';
import Search from './Course/Search/Search';
import { connect } from 'react-redux';
import {changeSearchInpVal, editCourse, deleteCourse, addCourse} from '../../../redux/courses-list-reducer';

class Courses extends React.Component {

    render() {
        return (
            <div>
                <Search changeSearchInpVal={this.props.changeSearchInpVal} inpVal={this.props.inpVal} addCourse={this.props.addCourse}/>
                {
                ((!this.props.inpVal) 
                ? this.props.coursesData 
                : this.props.coursesData.filter(val => val.name.match(new RegExp(this.props.inpVal, 'i'))))
                .map(val => <Course key={val.id} {...val} 
                editCourse={this.props.editCourse} deleteCourse={this.props.deleteCourse}/>)}
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        coursesData: state.coursesListPage.coursesData,
        editMode: state.coursesListPage.editMode,
        inpVal: state.coursesListPage.searchInp,
    }
}

export default connect(mapStateToProps, {changeSearchInpVal, editCourse, deleteCourse, addCourse}) (Courses);


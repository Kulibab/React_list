import React from 'react';
import c from './Course.module.css';

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({isVisible: !this.state.isVisible})
    }

    render() {
        return <div className={c.wrap}>
        <div className={c.date}>{`${this.props.date.split('-')[2]}.${this.props.date.split('-')[1]}.${this.props.date.split('-')[0]}`}</div>
        <div className={c.name}>{this.props.name}</div>
        <div className={c.description}>{
            this.props.description.length<105
                ? this.props.description
                : this.props.description.slice(0, 101) + '...'
        }</div>
        <div className={c.duration}>{this.props.duration}</div>
        <div className={c.box}>
            <span onClick={this.toggleMenu}>. . .</span>
            {this.state.isVisible ? <div className={c.menu}>
                <span onClick={() => this.props.editCourse(this.props.id)} className={c.edit}>Edit</span>
                <span onClick={() => this.props.deleteCourse(this.props.id)} className={c.delete}>Delete</span>
            </div> : ''}
        </div>
    </div>
    }
}

export default Course;
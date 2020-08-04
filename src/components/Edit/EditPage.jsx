import React from 'react';
import c from './EditPage.module.css'
import { connect } from 'react-redux';
import {cancelChanges, saveNew, saveChanges} from '../../redux/courses-list-reducer'

class EditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = (this.props.editModeType === 'edit') 
            ? {...this.props.coursesData.find(val => val.id === this.props.editCourseId)}
            : {
            id: '',
            date: '',
            name: '',
            description: '',
            duration: '',
            authors: ''
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeDuration = this.handleChangeDuration.bind(this);
        this.handleChangeAuthors = this.handleChangeAuthors.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(ev) {
        this.setState({name: ev.target.value})
    }
    handleChangeDescription(ev) {
        this.setState({description: ev.target.value})
    }
    handleChangeDuration(ev) {
        this.setState({duration: ev.target.value})
    }
    handleChangeAuthors(ev) {
        this.setState({authors: ev.target.value})
    }
    handleChangeDate(ev) {
        this.setState({date: ev.target.value})
    }
    handleSubmit(ev) {
        ev.preventDefault();
        if (this.props.editModeType === 'edit') {
            this.props.saveChanges(this.state) 
        } else {
            this.props.saveNew(this.state);
        }
    }

    render() {
        return (
            <form className={c.mainForm} onSubmit={this.handleSubmit}>
                <div className={c.mainWrap}>
                    <h1 className={c.mainHeader}>{this.editModeType === 'edit' ? 'Edit course' : 'New course'}</h1>
                    <label>
                        <p>Title*</p>
                        <input required={true} type="text" value={this.state.name} onChange={this.handleChangeName} className={c.textInp}/>
                    </label>
                    <label>
                        <p>Description*</p>
                        <textarea required={true} type="text" value={this.state.description} onChange={this.handleChangeDescription} />
                    </label>
                    <div className={c.flexWrap}>
                        <div className={c.leftCol}>
                            <label>
                                <p>Duration*</p>
                                <input required={true} type="text" value={this.state.duration} onChange={this.handleChangeDuration} className={c.textInp}/>
                            </label>
                            <label>
                                <p>Authors*</p>
                                <input required={true} type="text" value={this.state.authors} onChange={this.handleChangeAuthors} className={c.textInp}/>
                            </label>
                        </div>
                        <div className={c.rightCol}>
                            <label>
                                <p>Date*</p>
                                <input className={c.dateInp} required={true} type="date" value={this.state.date} onChange={this.handleChangeDate} />
                            </label>
                        </div>
                    </div>
                    <button type="submit"  className={c.btn}>Save</button>
                    <button onClick={this.props.cancelChanges} className={c.btnCancel}>Cancel</button>
                </div>
            </form>)

    }
}

let mapStateToProps = (state) => {
    return {
        coursesData: state.coursesListPage.coursesData,
        editModeType: state.coursesListPage.editModeType,
        inpVal: state.coursesListPage.searchInp,
        editCourseId: state.coursesListPage.editCourseId
    }
}

export default connect(mapStateToProps, {cancelChanges, saveNew, saveChanges})(EditPage);
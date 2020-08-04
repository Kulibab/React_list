import React from 'react';
import Courses from './Courses/Courses';
import { connect } from 'react-redux';
import c from './Main.module.css';
import EditPage from '../Edit/EditPage';

class Main extends React.Component {

    render() {
        return (<div className={c.mainWrap}>
            <div className={c.container}>
                <header className={c.header}>Learn</header>
            </div>
            <div className={c.mainContent}>
                <div className={c.container}>
                    {(!this.props.editMode 
                        ? <Courses />
                        : <EditPage />)}
                </div>
            </div>
        </div>)
    }

}

let mapStateToProps = (state) => {
    return {
        editMode: state.coursesListPage.editMode
    }
}

export default connect(mapStateToProps, {})(Main);
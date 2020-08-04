import React from 'react';
import c from './Search.module.css';

let Search = (props) => {

    let searchInp = React.createRef();

    let changeInp = () => {
        let text = searchInp.current.value;
        props.changeSearchInpVal(text);
    }

    return <div className={c.searchWrap}>
        <input ref={searchInp} 
        className={c.inp} type="text" placeholder='Search' 
        onChange={changeInp} value={props.inpVal}/>
        <button className={c.btn} onClick={props.addCourse}>Add course</button>
    </div>
}

export default Search;
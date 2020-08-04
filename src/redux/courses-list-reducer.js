const CHANGE_INP_VAL = 'CHANGE_INP_VAL';
const EDIT_COURSE = 'EDIT_COURSE';
const DELETE_COURSE = 'DELETE_COURSE';
const ADD_COURSE = 'ADD_COURSE';
const CANCEL_CHANGES = 'CANCEL_CHANGES';
const SAVE_NEW = 'SAVE_NEW';
const SAVE_CHANGES = 'SAVE_CHANGES';

let initialState = {
    coursesData: [
        {
            id: 0,
            date: '2020-06-16',
            name: 'CSS Optimization',
            description: 'How to optimize CSS',
            duration: '1h 30m',
            authors: 'Roman Volkov'
        },
        {
            id: 1,
            date: '2020-06-18',
            name: 'ES Next',
            description: 'Last version of ES',
            duration: '1h 20m',
            authors: 'Ostap Rybak'
        },
        {
            id: 2,
            date: '2020-06-23',
            name: 'jQuery',
            description: 'JS framework jQuerry',
            duration: '1h 30m',
            authors: 'Anatolii Dmytruk '
        },
        {
            id: 3,
            date: '2020-06-25',
            name: 'Tools',
            description: 'How to make your development easy',
            duration: '1h 40m',
            authors: 'Ivan Khud'
        },
        {
            id: 4,
            date: '2020-06-30',
            name: 'React.js',
            description: 'What you do right now',
            duration: '1h 30m',
            authors: 'Viktor Osipov '
        }
    ],
    editMode: false,
    searchInp: '',
    editModeType: null,
    editCourseId: null
};

const coursesListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INP_VAL:
            return {
                ...state,
                searchInp: action.text
            }
        case EDIT_COURSE:
            return {
                ...state,
                editMode: true,
                editModeType: 'edit',
                editCourseId: action.id
            }
        case ADD_COURSE:
            return {
                ...state,
                editMode: true,
                editModeType: 'add'
            }
        case DELETE_COURSE:
            return {
                ...state,
                coursesData: state.coursesData.filter(val => val.id !== action.id)
            }
        case CANCEL_CHANGES:
            return {
                ...state,
                editMode: false,
                editModeType: null,
                editCourseId: null
            }
        case SAVE_NEW:
            return {
                ...state,
                coursesData: state.coursesData.concat([{
                    ...action.newCourse, 
                    id: state.coursesData[state.coursesData.length - 1].id +1
                }]),
                editMode: false,
                editModeType: null,
                editCourseId: null
            }
        case SAVE_CHANGES:
            let ind = state.coursesData.indexOf(state.coursesData.find(el => el.id === action.course.id))
            return {
                ...state,
                coursesData: state.coursesData.slice(0, ind).concat([action.course]).concat(state.coursesData.slice(ind + 1)),
                editMode: false,
                editModeType: null,
                editCourseId: null
            }
        default:
            return state;
    }
};

export const changeSearchInpVal = (text) => ({
    type: CHANGE_INP_VAL,
    text
})

export const editCourse = (id) => ({
    type: EDIT_COURSE,
    id
})

export const deleteCourse = (id) => ({
    type: DELETE_COURSE,
    id
})

export const addCourse = () => ({
    type: ADD_COURSE
})

export const cancelChanges = () => ({
    type: CANCEL_CHANGES
})

export const saveNew = (newCourse) => ({
    type: SAVE_NEW,
    newCourse
})

export const saveChanges = (course) => ({
    type: SAVE_CHANGES,
    course
})

export default coursesListReducer;
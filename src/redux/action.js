import uuid from 'uuid'

//********************
//**** ACTIONS *******
//********************

//ACTION CREATOR HELPER FUNCTION
const action = (type, payload) => {
    return { type, payload }
}

//ACTIONS
const ADD_DATA = 'ADD_DATA';
const DELETE_DATA = 'DELETE_DATA';
const EDIT_DATA = 'EDIT_DATA';



//ACTION CREATORS
export const addData = (sno, versionName, startDate, releaseDate, description) =>
    action(ADD_DATA, {
        key: uuid(),
        sno,
        versionName,
        startDate,
        releaseDate,
        description
    })

export const deleteData = (sno) => action(DELETE_DATA, { sno })

export const editData = (sno) => action(EDIT_DATA, { sno })


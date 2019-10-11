//*******************
//**** REDUCERS *****
//*******************
//IMPORT COMBINE FUNCTION FROM REDUX
import { combineReducers } from 'redux'

const addDataReducer = (data = [], action) => {
    console.log(action.payload)     
    switch (action.type) {
      case 'ADD_DATA':
        return [...data, action.payload]
      case 'DELETE_DATA':
          return data.filter(data=>data.sno !== action.payload.sno.sno)
        
      default:
        return data
    }
  }


  //EXPORT ALL REDUCERS AS A SINGLE INSTANCE SO IT CAN BE PASSED TO STORE OBJECT
export default combineReducers({
    addDataReducer
  })
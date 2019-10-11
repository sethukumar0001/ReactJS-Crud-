import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import moment from 'moment'
import {addData} from '../redux/action';
import './showList.css'

let idx = 1 // We are fudging this to concentrate on React-Redux

const AddData = props => {
  //BRING IN DISPATCH OPTION FROM REDUX STORE
  const dispatch = useDispatch()

  //INITIALISE STATE HOOK
  const [versionName, setVersionName] = useState('');
  const [startDate,setStartDate]=useState('');
  const [releaseDate,setReleaseDate]= useState('');
  const [description,setDescription]=useState('');

  //HANDLE FORM SUBMIT
  const onSubmit = e => {
    e.preventDefault();
    console.log(versionName,startDate,releaseDate,description);
    if (versionName === '' && startDate === '' && releaseDate === ''&& description === '' ) {
      return
    }
    dispatch(addData(idx,versionName,startDate,releaseDate,description))
    //Clear State so it clears input fields after update
    setVersionName('');
    setStartDate('');
    setReleaseDate('');
    setDescription('');
    idx++
  }


  return (
    <div>
   
        <form className="form-inline" onSubmit={onSubmit}>
                    <div className="input">
                        <input
                        type='text'
                        name='name'
                        placeholder='Version name'
                        value={versionName}
                        onChange ={ (e)=>setVersionName(e.target.value)}
                        />&nbsp;
 
                      <input
                        type='date'
                        name='s_date'
                        placeholder='Start date'
                        value={startDate}
                        onChange ={ (e)=>setStartDate(e.target.value)}
                      />&nbsp;
                    
                      <input
                        type='date'
                        name='r_date'
                        placeholder='Release date'
                        value={releaseDate}
                        onChange ={ (e)=>setReleaseDate(e.target.value)}
                      />&nbsp;
                      <input
                        type='text'
                        name='description'
                        placeholder='Description'
                        value={description}
                        onChange ={ (e)=>setDescription(e.target.value)}
                      />
                      &nbsp;
                     <button
                       className="button"                     
                     >Submit</button>
                   </div>
      </form>
      <p />
    </div>
  )
}

export default AddData

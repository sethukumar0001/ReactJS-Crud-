//*************************************************************
//***** SHOWLIST COMPONENT - Display Table of Records We Added ****
//*************************************************************
import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import store from '../redux/store';
import {deleteData,editData} from '../redux/action'
import './showList.css'

const ShowList = props => {
  //BRING IN DISPATCH FROM REDUX STORE
    const dispatch = useDispatch()

    const  data  = useSelector(state => ({
    data: state.addDataReducer
   }))
// const StoreData = store.getState();
   console.log(data)
   console.log(store.getState())

   const Delete = (e, sno) => {
       console.log(sno)
    dispatch(deleteData({ sno: sno }))
  }

  const Edit = (e, sno) => {
    console.log(sno)
 dispatch(editData({ sno: sno }))
}

  return (
    <div className="tablediv">
      <table>
        <tbody>
            <th>
                <td>sno</td>
                <td>Version</td>
                <td>Start date</td>
                <td>Release date</td>
                <td>Description</td>
                <td>Action</td>
            </th>
          {(data !== '')?(data.data.map(data => (
            <tr >
              <td>{data.sno}</td>
              <td>{data.versionName}</td>
              <td>{data.startDate}</td>
              <td>{data.releaseDate}</td>
              <td>{data.description}</td>
              <td>
                <button
                  onClick={() => {
                    Delete(this, data.sno)
                  }}
                  className='btn-danger rounded'
                >
                  DELETE
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    Edit(this, data.sno)
                  }}
                  className='btn-danger rounded'
                >
                  EDIT
                </button>
              </td>
            </tr>)
          )):("Nod Data found")}
        </tbody>
      </table>
      <br />
    </div>
  )
}

export default ShowList

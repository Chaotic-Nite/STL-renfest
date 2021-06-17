import React from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from 'mdb-react-ui-kit';


function ScheduleTable(props){
    const data = props.schedule
    return (
      <div >
        <MDBTable striped hover className={props.class_name}>
        <MDBTableHead>
          <tr>
            <th colSpan={2}><b>{props.title}</b></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data ?
            data.map((item) => {
              return (
                <>
                <tr>
                <th scope='row'>{item.time}</th>
                <td>{item.name}</td>
                </tr>
                </>
                )
              }): 
                null
            }
        </MDBTableBody>
      </MDBTable>
      </div>
    )
  }

  export default ScheduleTable;
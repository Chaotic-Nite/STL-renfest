import React from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from 'mdb-react-ui-kit';


function ScheduleTable(props){
    const data = props.schedule
    return (
      <div className={props.class_name + ' tablediv'}>
        <MDBTable striped hover>
        <MDBTableHead>
          <tr>
            <th colSpan={2}><b>{props.title}</b></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((item) => {
            return (
              <>
                <tr>
                  <th scope='row'>{item.time}</th>
                  <td>{item.name}</td>
                </tr>
              </>
            )
          })}
        </MDBTableBody>
      </MDBTable>
      </div>
    )
  }

  export default ScheduleTable;
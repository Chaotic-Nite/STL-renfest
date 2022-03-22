import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
  } from 'mdb-react-ui-kit';


function JoustSchedule() {
    return (
      <>
        <MDBTable striped hover className='joust'>
        <MDBTableHead>
          <tr>
            <th colSpan={2}><b>Joust Field</b></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th scope='row'>11:30</th>
            <td>Nobilis Equus Joust</td>
          </tr>
          <tr>
            <th scope='row'>2:00</th>
            <td>Nobilis Equus Joust</td>
          </tr>
          <tr>
            <th scope='row'>4:00</th>
            <td >Nobilis Equus Joust</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
      </>
    )
  }

export default JoustSchedule;
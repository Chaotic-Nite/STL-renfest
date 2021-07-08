import { useState } from "react";
import { MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
  } from 'mdb-react-ui-kit';
  
import "../../../css/warning.css";
import WarningTextInformation from "./WarningText";

function SmallWarningSign() {
  const [state, ] = useState(true)

  return (
    <>
      {state ?
      <WarningText />
      : null}
    </>
  );
}

function WarningText(){
    const [scrollableModal, setScrollableModal] = useState(false);
    const [title, ] = useState('Covid-19 Warning')

    return (
        <>
        <MDBBtn id='warning-head' onClick={() => setScrollableModal(!scrollableModal)}>{title}</MDBBtn>

        <MDBModal id='warning-modal' show={scrollableModal} getOpenState={(e) => setScrollableModal(e)} tabIndex='-1'>
            <MDBModalDialog scrollable>
                <MDBModalContent>
                <MDBModalHeader>
                    <MDBModalTitle>{title}</MDBModalTitle>
                    <MDBBtn
                        className='btn-close'
                        color='none'
                        onClick={() => setScrollableModal(!scrollableModal)}
                    ></MDBBtn>
                </MDBModalHeader>
                </MDBModalContent>
                <MDBModalBody>
                    <WarningTextInformation />
                </MDBModalBody>
            </MDBModalDialog>
        </MDBModal>
    </>
  )
}

export default SmallWarningSign;

import { useState } from "react";
import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent,
} from "react-collapsible-component";
import "../../../css/warning.css";
import WarningTextInformation from "./WarningText";

function WarningSign() {
  const [state, ] = useState(false)

  return (
    <>
      {state ?
          <div id="attention-div">
          <CollapsibleComponent>
            <CollapsibleHead >Covid-19 Warning</CollapsibleHead>
            <CollapsibleContent className="margin-width" id="attention-text">
              <WarningTextInformation />
            </CollapsibleContent>
          </CollapsibleComponent>
        </div> 
      : null}
    </>
  );
}

export default WarningSign;

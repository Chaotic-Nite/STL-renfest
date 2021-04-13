import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent,
} from "react-collapsible-component";
import "../../../css/warning.css";
import dateObject from "../../../lists/UPTODATE.js";

function WarningSign() {
  return (
    <>
      <div id="attention-div">
        <CollapsibleComponent>
          <CollapsibleHead>Covid-19 Warning</CollapsibleHead>
          <CollapsibleContent className="margin-width" id="attention-text">
            <p>
              The Saint Louis Renaissance Festival has taken enhanced health and
              safety measures for those attending and participating at the
              Festival. You must follow all posted instructions while visiting
              the Renaissance Village. Please review the health questionnaire on
              our website prior to attending the Festival. Also, while at the
              Village, please be mindful of others and maintain social
              distancing of 6 feet when with or near people not living in the
              same household.
              <br />
              <br />
              An inherent risk of exposure to COVID-19 exists in any public
              place where people are present. COVID-19 is an extremely
              contagious disease that can lead to severe illness and death.
              According to the Centers for Disease Control and Prevention
              (“CDC”), senior citizens and people with underlying medical
              conditions are especially vulnerable. Please refer to the latest
              CDC guidelines for the latest information on COVID-19.
              <br />
              <br />
              By visiting the Saint Louis Renaissance Festival you voluntarily
              assume all risks related to exposure to COVID-19.
              <br />
              <br />
              For more COVID-19 protocols,{" "}
              <a
                className="external-links"
                href="/pdf-files/2020-STL-Draft-preparedness-plan-2.pdf"
              >
                click here
              </a>
              .
              <br />
              <br />
              The safety of our Patrons and Participants is our number one
              priority. Please do not attend the festival if you answer yes to
              any of the questions below. Any ticket purchased for the season
              and not redeemed in 2020 will be good for the 2021 season. <br />
              A. Have you or anyone in your household tested positive or been
              exposed to someone who has tested positive for Covid-19 in the
              last two weeks? <br />
              B. Have you our anyone in your household traveled out of the
              country in the last two weeks? <br />
              C. Do you have a NEW Cough the CANNOT be attributed to another
              health condition? <br />
              D. Do you have a NEW Sore Throat that CANNOT be attributed to
              another health condition? <br />
              E. Do you have NEW Muscle aches that CANNOT be attributed to
              another health condition? <br />
              F. DO you have a NEW Fever that CANNOT be attributed to another
              health condition? <br />
              Thank you for all of your patience and understanding and we all
              look forward to a FUN and SAFE {dateObject.year} season.
            </p>
          </CollapsibleContent>
        </CollapsibleComponent>
      </div>
    </>
  );
}

export default WarningSign;

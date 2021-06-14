import Navigation from "../components/navigation/Navigation.js";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardSubTitle } from 'mdb-react-ui-kit';
import QuickLinksSetOne from "../components/quicklinks/QuickLinksSetOne";


function KeyPolicies() {
  return (
    <>
    <Navigation />
      <h1 className="page-header">Key Policies</h1>
      <div className="margin-width">
        <div className="two-col">
          <div className='col1'>
            <FrstPolicy />
            <ScndPolicy />
            <ThrdPolicy />
            <MDBCard>
              <MDBCardBody>
                <MDBCardText>
                I HEREBY REPRESENT THAT I HAVE NEVER COMMITTED AN ACT OF VIOLENCE CAUSING INJURY OR POSING A SERIOUS RISK OR INJURY NOR ENGAGED IN INAPPROPRIATE CONDUCT TOWARD A MINOR OR VULNERABLE ADULT AND THAT NO ONE WHO IS AT THE EVENT BY MY INVITATION OR UNDER MY DIRECTION HAS EVER ENGAGED IN ANY SUCH CONDUCT. I UNDERSTAND THAT MY AND OR ORGANIZATION’S AFFILIATION WITH FESTIVAL IS CONDITIONED UPON THIS REPRESENTATION. I UNDERSTAND THAT IF FESTIVAL DETERMINES, IN ITS SOLE JUDGMENT, THAT THIS REPRESENTATION IS FALSE, OR THAT SUCH PROHIBITED CONDUCT OCCURS AFTER THE SIGNING OF THIS CONTRACT, THEN THIS CONTRACT MAY BE TERMINATED IMMEDIATELY, WITHOUT NOTICE TO ME, AND WITH NO FURTHER REMUNERATION OR CONTRIBUTION DUE ME OR ORGANIZATION (EXCEPT PAYMENT FOR SERVICES ALREADY PERFORMED).
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col2">
           <QuickLinksSetOne id={3}/>
          </div>
        </div>
      </div>
    </>
  );
}

function FrstPolicy() {
  return (
    <>
      <MDBCard>
        <MDBCardBody className='policy-set'>
          <MDBCardTitle ><h2>Alcohol</h2></MDBCardTitle>
          <MDBCardText>
          Alcohol service will only be provided to guests 21 or older who show a valid, government-issued photo ID. 
          The St. Louis Renaissance Festival reserves the right to refuse service to any individual who appears to be impaired or intoxicated. No outside alcoholic beverages are allowed.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  )
}

function ScndPolicy() {
  return (
    <>
      <MDBCard>
        <MDBCardBody className='policy-set'>
          <MDBCardTitle><h2>Weapons</h2></MDBCardTitle>
          <MDBCardText>
            <p>
              <u>Mid-America Festivals bans firearms on the premises.</u>
            </p>
            <p>
              Guests may not perform or pose for pictures for other guests for remunerations of any kind, including tips.
            </p>
            <p>
              Guests may wear a sword or dagger, but the sword or dagger must be sheathed completely with no part of the blade showing and secured in the sheath or scabbard with a plastic zip tie, (peace bound or peace tied), and at no time may they be drawn from the scabbard or sheath.
            </p>
            <p>
              Zip ties are available at the entrance gate. Guests may not carry any other weapons or objects that resemble or could easily be mistaken for an actual weapon, and no costume or accessory may contain sharp objects, pointed objects, or materials that may accidentally strike another guest.
            </p>
            <p>
              Bows are not permitted except may be transported, by competitors, unstrung, to and from festival events, such as our Archery section.
            </p>
            <p>
              Costumes and attire must be family-friendly and may not be offensive, obstructive, violent or otherwise objectionable.
            </p>
            <p>
              Children may wear masks.
            </p>
            <p>
              Adults may wear appropriate masks that do not cover their entire face.
            </p>
            <p>
              Festival reserves the right, at its sole discretion, to require a Guest to remove his/her mask and or to require that the Guest take their mask off site. The above is consistent with the practices of recent years.
            </p>
            <p>
              Footwear is required at all times.
            </p>
            <p>
              Plastic and wood toy weapons are allowed with sheathes or peace bonded, but may not be wielded in a way that they might accidentally strike another guest or employee.
            </p>
            <p>
              Guests wearing bulky or layered clothing may be subject to additional security screening.
            </p>
            <p>
              Guests who do not adhere to the costume/weapons policy may be refused entry and/or removed, unless the costume or attire can be modified to meet the above standards.
            </p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  )
}

function ThrdPolicy() {
  return (
    <>
      <MDBCard>
        <MDBCardBody className='policy-set'>
          <MDBCardTitle ><h2>Policy Against Harassment and Discrimination</h2></MDBCardTitle>
          <MDBCardSubTitle><b>Purpose:</b></MDBCardSubTitle>
          <MDBCardText>
          Mid-America Festivals, Corp. (“Festival”) desires to provide a positive and productive business and entertainment environment. 
          To that end, the Festival is committed to providing a business and entertainment environment that is free of discrimination and harassment, and to provide a means of dealing with such incidents should they occur.
          </MDBCardText>
          <MDBCardSubTitle><b>Policy:</b></MDBCardSubTitle>
          <MDBCardText>
          <p>Harassment or discrimination, in any form, will not be tolerated at the Festival by any of its employees, vendors, or independent contractors. This includes harassment based upon a person’s race, color, religion, gender, national origin, age, disability, creed, marital status, veteran’s status, status with regard to public assistance and/or sexual orientation and any other category protected by law. This policy applies to all employees, supervisors, managers and officers of the Festival, as well as to any vendor or independent contractor of the Festival. If, after appropriate investigation, harassment or discrimination is found to have occurred, the initiator will be subject to appropriate disciplinary action, depending on the circumstances, up to and including termination of the employment and/or business relationship.</p>

          <p>Harassment is verbal or physical conduct that denigrates or shows hostility or aversion toward an individual because of his/her race, color, religion, gender, national origin, age, disability, creed, marital status, veteran’s status, status with regard to public assistance or sexual orientation and any other category protected by law, or that of his/her relatives, friends, or associates and that:</p>          

          <ol>
            <li>
            Has the purpose or effect of creating an intimidating, hostile, or offensive business or entertainment environment;
            </li>
            <li>
            Has the purpose or effect of unreasonably interfering with an individual’s work performance; or
            </li>
            <li>
            Otherwise adversely affects an individual’s employment opportunities.
            </li>
          </ol>

          <p>Sexual harassment is defined in accordance with the Equal-Employment Opportunity Commission (EEOC) Guidelines, issues November 10, 1980 as:</p>

          <p>“Harassment on the basis of sex is a violation of Section 703 of Title VII of the Civil Rights Act. Unwelcome sexual advances, requests for sexual favors, and other verbal or physical conduct of a sexual nature constitute sexual harassment when:</p>

          <ol>
            <li>
            Submission to such conduct is made explicitly or implicitly a term or condition of an individual’s employment;            
            </li>
            <li>
            Submission to or rejection of such conduct by an individual is used as a basis for employment decisions affecting such individual;            
            </li>
            <li>
            Such conduct has the purpose or effect of unreasonably interfering with an individual’s work performance or creating an intimidating, hostile, or offensive working environment.”
            </li>
          </ol>
          <p>Harassment can occur intentionally or unintentionally. Some examples of conduct that is prohibited by this policy are listed below. Please note that these are not the only examples.</p>
          <ol>
            <li>
            Epithets, slurs, negative stereotyping, or threatening, intimidating or hostile acts that relate to race, color, religion, gender, national origin, age, disability, creed, marital status, veteran’s status, status with regard to public assistance or sexual orientation and any other category protected by law;
            </li>
            <li>
            Written or graphic material that denigrates or shows hostility or aversion toward an individual or group because of their race, color, religion, gender, national origin, age, disability, creed, marital status, veteran’s status, status with regard to public assistance or sexual orientation and any other category protected by law that is placed on walls, bulletin boards or elsewhere on the Festival’s premises or circulated throughout the workplace or entertainment areas;
            </li>
            <li>
            Unwanted sexual comments, innuendos, flirtations, propositions, or suggestions;
            </li>
            <li>
            Use of offensive words of a sexual nature describing body parts or the sexual act, telling “suggestive” jokes or stories, and conversations about sexual exploits, sexual preferences, and desires or suggestive or sexist remarks about a person’s clothing or body;
            </li>
            <li>
            Unwanted and unnecessary touching, brushing against, patting or pinching;
            </li>
            <li>
            Displaying, in the work or entertainment areas, pictures, objects, cartoons, pornographic magazines, or representations of any action or subject which is sexual in nature, depicting nude, scantily clad or suggestively posed women or men and which can be perceived as offensive;
            </li>
            <li>
            Sabotaging another’s character, reputation, work effects, or property because of race, color, religion, gender, national origin, age, disability, creed, marital status, veteran’s status, status with regard to public assistance or sexual orientation and any other category protected by law;
            </li>
            <li>
            Direct and/or indirect suggestions, requests, or demands that an employee’s job security, job assignment, conditions of employment, or opportunities for advancement depend in any way on the granting of sexual favors; or
            </li>
            <li>
            Sexual relations accompanied by implied or overt threats or promises.
            </li>
          </ol>
          </MDBCardText>
          <MDBCardSubTitle><b>Procedure:</b></MDBCardSubTitle>
          <MDBCardText>
          <p>Persons who believe they have been victimized through or witnessed harassment or discrimination should report those incidents so that we may promptly address the problem. You may report your concerns to any of the following:</p>
          <ol>
            <li>
              Immediate supervisor; or
            </li>
            <li>
              Any member of management; or
            </li>
            <li>
              General Manager; or
            </li>
            <li>
              The President
            </li>
          </ol>

          <p>All complaints of harassment and/or discrimination will be examined impartially without prejudice and without malice toward the reporting party regardless of the status of the person accused. Information provided will be released only on a need to know basis. After an investigation of the allegations, a determination will be made, and resulting action will be recommended to management. The investigation may include interviews with the individual making the charges, the accused individual and appropriate witnesses. All employees or contractors with information are required to participate in an investigation if asked to do so by the Festival.</p>

          <p>All determinations are made on an individual basis. The Festival has the discretion to apply any sanctions or a combination of sanctions to eliminate any unlawful conduct and remedy the impact of any harassment or discrimination, such as: </p>

          <ol>
            <li>
            Counseling the offender;
            </li>
            <li>
            Transferring the offender to another position;
            </li>
            <li>
            Placing the offender on probation, with a warning of suspension or discharge for continuing or recurring offenses;
            </li>
            <li>
            Placing the offender on suspension with or without pay;
            </li>
            <li>
            Discharging the offender; or
            </li>
            <li>
            Terminating the business relationship with the offender.
            </li>
          </ol>
          <p>The Festival encourages individuals to make accurate reports of harassment and/or discrimination and provide as much information to the Festival as possible so that it may properly and thoroughly investigate the report.</p>

          <p>The Festival will not condone retaliation against any individual who reports possible harassment or discrimination or assists in an investigation of possible harassment or discrimination.</p>

          <p>If you have questions about whether conduct is permissible under this policy, you should discuss it with your supervisor, department manager, or the Event Manager.</p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  )
}

export default KeyPolicies;

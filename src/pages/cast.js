import React from "react";
import castList from "../cast/castList.js";
import { Card } from "react-bootstrap";

function Cast() {
  const guildArr = ["Court", "Fae", "Fighter", "Traveler", "Village"];

  console.log(castList);
  return (
    <>
      {guildArr.map((guild) => {
        return (
          <details>
            <summary>{guild}</summary>
            {castList[guild].map((item) => {
              let type = typeof item;
              return type === "string" ? (
                <p>{item}</p>
              ) : (
                <Card className="cast-list">
                  <Card.Img scr={item.image} alt={item.realName} />
                  {console.log(item.image)}
                </Card>
              );
            })}
          </details>
        );
      })}
    </>
  );
}

export default Cast;

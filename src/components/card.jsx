import React from "react";

export const Card = (props) => (
   <div className="dib bg-light-green pa3 ma2 br3 grow bw2 shadow-5">
      <img
         src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
         alt={props.monster.name}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
   </div>
);

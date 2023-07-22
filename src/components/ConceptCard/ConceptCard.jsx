import React from "react";

export const ConceptCard = ({ concept }) => (
  <li className="concept">
    <img src={concept.image} alt={concept.title} />
    <h2>{concept.title}</h2>
    <p>{concept.description}</p>
  </li>
);

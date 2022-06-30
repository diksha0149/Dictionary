import React from "react";
import "./Dictionary.css";
export default function Photo(props) {
  if (props.photo) {
    return (
      <div className="photo">
        {props.photo.photos.map(function (photo, index) {
          return (
            <a href={photo.src.original} target="_blank" rel="noreferrer">
            <img
              key={index}
              src={photo.src.landscape}
              alt={photo.alt}
              className="photoimg"
            />
            </a>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
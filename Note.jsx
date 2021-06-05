import React from "react";

function Note() {
  var currYear = new Date().getFullYear();

  return (
    <div className="note">
      <h1>JavaScript and React.js</h1>
      <p>
        This was an amazing bootcamp taken up by Shaurya sinha. we covered
        everything from scratch including JavaScript, React,js, HTML.
      </p>
    </div>
  );
}

export default Note;

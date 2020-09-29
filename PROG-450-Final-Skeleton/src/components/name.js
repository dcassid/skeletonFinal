import React, { useState } from "react";

function Name() {
  const [name, setName] = useState("");
  const onNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Enter Name:</label>
          <input type="text" onChange={onNameChange} />
        </div>
      </form>

      <h1>Hey There {name}!</h1>

      <p>
        I just want people to have the oppurtunity to have a spooky name while they scroll. Also I am considering expanding this to help people plan a roadtrip maybe in the future sprints so this would show them they are logged in.
      </p>
    </>
  );
}

export default Name;

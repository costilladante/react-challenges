/*
Santa is having trouble keeping track of the naughty and nice children and needs your help.
Create a react JS app that will allow Santa to write the name of a child and click
'naughty' or 'nice' to add them to their respected list. 

Bonus: add some holiday themed CSS to go with the theme
*/

import React, { useState } from 'react';

export const SantaList = () => {
  const [naughtyKids, setNaughtyKids] = React.useState([]);
  const [niceKids, setNiceKids] = React.useState([]);

  // Add the handleSort function here

  // Add a reference to the input field here

  return (
    <div>
      <h1>Santa's Naughty and Nice List</h1>
      {/* Add the input field here */}
      {/* Add the buttons here */}
      <h2>Naughty List</h2>
      {/* Add list here */}
      <h2>Nice List</h2>
      {/* Add list here */}
    </div>
  );
};

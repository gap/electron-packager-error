
import React from 'react';

const fs = window.require ? window.require('fs-extra') : undefined

const App = (obj) => {
  console.log("fs is:")
  console.log(fs)
  return (
    <h1>
      Hello World
    </h1>
  )
}

export default App;

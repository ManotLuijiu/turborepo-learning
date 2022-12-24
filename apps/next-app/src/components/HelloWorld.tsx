import React from 'react';
import { Button } from 'ui';


const HelloWorld = () => (
  <>
    <h1>Hello Manot L.</h1>
    <label htmlFor="name">
      <input type="text" name="name" id="name" />
    </label>
    <Button />
  </>
);

export default HelloWorld;
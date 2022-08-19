import React from 'react';
import renderer from 'react-test-renderer';
import Signin from '../src/screens/Login/Signin';

it('rend correctement', () => {
  const tree = renderer.create(<Signin />).toJSON();
  expect(tree).toMatchSnapshot();
});

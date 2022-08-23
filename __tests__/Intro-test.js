import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../jest/Intro';

it('rend correctement', () => {
  const Som = renderer.create(<Intro />).toJSON();
  expect(Som).toMatchSnapshot();
});

// @flow
import * as EyeModel from '../model';

const patches = [{
  type: 'LoadStart',
}, {
  type: 'LoadSuccess',
  color: 'red',
}]

test('model', () => {
  patches.map(patch => {
    expect(EyeModel.reduce(EyeModel.initialState, patch)).toMatchSnapshot();
  });
});

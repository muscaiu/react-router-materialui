import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import App from './App';

describe('App', () => {
  it('should render without crashing', () => {
    shallow(<App />)
  })
}


// import App from '../src/App';


//   // it('should render snapshot', () => {
//   //     const component = renderer.create(
//   //             <LoginFooter/>
//   //     )
//   //     const tree = component.toJSON()
//   //     expect(tree).toMatchSnapshot()
//   // })
// })

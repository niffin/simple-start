import React from 'react';
import { shallow } from 'enzyme';
import SimpsonsGifsComponent from './component';

describe('<SimpsonsGifsComponent />', () => {
  it('will render without errors', () => {
    const component = shallow(<SimpsonsGifsComponent />);
    expect(component).toBeTruthy();
  });

  it('will display a loading message when fetching gif URLs', () => {
    const component = shallow(<SimpsonsGifsComponent />);

    expect(component.find('.loading-message').length).toBe(0);

    component.setProps({ isFetching : true });
    expect(component.find('.loading-message').length).toBe(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Button, Checkbox } from 'antd';
import OOCButton from './Button';


const mountComponent = (props) => shallow(
    <OOCButton {...props} />
);

it('should render button', () => {
    const component = mountComponent({ type: 'button' });
    expect(component.exists(Button)).toBeTruthy();
});

it('should render checkbox', () => {
    const component = mountComponent({ type: 'checkbox' });
    expect(component.exists(Checkbox)).toBeTruthy();
});

it('should render img beside button', () => {
    const imgUrl = 'http://some-img.png';
    const component = mountComponent({ type: 'link', imgUrl });

    expect(component.find(`img[src='${imgUrl}']`)).toHaveLength(1);
    expect(component.exists(Button)).toBeTruthy();
});

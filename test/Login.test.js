import React from "react";
import {expect} from "chai";
import {mount} from "enzyme";
import Login from '../src/components/Login';
import {Button, TextField} from '@material-ui/core';

describe('<Login/>', () => {
    it('renders login', () => {
        const wrapper = mount(<Login/>);
        expect(wrapper.find(Button)).to.have.length(1);
        expect(wrapper.find(TextField)).to.have.length(2);
    });
});

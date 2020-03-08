import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Layout from './Layout';
import LoginForm from '../LoginForm/LoginForm';
import Filters from '../Filters/Filters';
import AddForms from '../AddForms/AddForms';
import ItemList from '../ItemList/ItemList';

configure({ adapter: new Adapter() });

describe('<Layout />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Layout />);
    });

    it('Should render LoginForm if user is not connected.', () => {
        expect(wrapper.find(LoginForm)).toHaveLength(1);
    });
    it('Should render AddForms, Filters, ItemList if user is connected', () => {
        wrapper.setProps({isConnected: true});
        expect(wrapper.find(Filters)).toHaveLength(1);
        expect(wrapper.find(ItemList)).toHaveLength(1);
        expect(wrapper.find(AddForms)).toHaveLength(1);
    })
});

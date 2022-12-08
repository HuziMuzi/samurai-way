import React from 'react'
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'it-inc'}/>);
        const instance = component.root;
        console.log(instance?.instance)
        expect(instance?.instance.props.status).toBe('it-inc')
    })


    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'it-inc'}/>);
        const instance = component.getInstance()
        let span = instance?.findByType('span')
        expect(span?.props).toBe(0)
    })

})
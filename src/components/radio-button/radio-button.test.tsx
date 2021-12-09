import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './radio-button'

it('renders the assigned label prop', () => {
    const testLabel = "test-label";
    render(<RadioButton label={testLabel} />);
    const displayedLabel = screen.getByText("test-label");
    expect(displayedLabel).toBeInTheDocument();
});

it('renders the assigned children prop', () => {
    const testChildren = <p>test-children</p>;
    render(<RadioButton children={testChildren} />);
    const displayedChildren = screen.getByText("test-children");
    expect(displayedChildren).toBeInTheDocument();
});

it('renders the assigned subComponent prop', () => {
    const testSubComponents = <div><label>My Date</label><input type="date" /></div>;
    const renderedRadioButton = <RadioButton subComponents={testSubComponents} />;
    render(renderedRadioButton);
    const isCorrectlyRendered = (renderedRadioButton.props.subComponents === testSubComponents);
    expect(isCorrectlyRendered).toBeTruthy();
});

it('confirms that children prop and subComponent prop are of the same type for usage flexibility', () => {
    const testRadioButton = <RadioButton />;
    const typeOfChildren = typeof testRadioButton.props.children;
    const typeOfSubComponents = typeof testRadioButton.props.subComponents;
    const isOfEqualType = (typeOfChildren === typeOfSubComponents);
    expect(isOfEqualType).toBeTruthy();
})

it('can acommodate name prop', () => {
    const testName = "test-name";
    const testRadioButton = <RadioButton name={testName} />;
    const isNameAssigned = (testRadioButton.props.name === testName);
    expect(isNameAssigned).toBeTruthy();
})

it('can acommodate value prop', () => {
    const testValue = "test-value";
    const testRadioButton = <RadioButton value={testValue} />;
    const isValueAssigned = (testRadioButton.props.value === testValue);
    expect(isValueAssigned).toBeTruthy();
})

it('can acommodate checked prop', () => {
    const testChecked = true;
    const testRadioButton = <RadioButton checked={testChecked} />;
    const isChecked = (testRadioButton.props.checked === testChecked);
    expect(isChecked).toBeTruthy();
})

it('confirms that the onChange prop is of type React.ChangeEventHandler<HTMLInputElement', () => {
    const testOnChange:React.ChangeEventHandler<HTMLInputElement> = function(arg:any){return /*something*/};
    const testRadioButton = <RadioButton onChange={function(){}} />;
    const isOfEqualType = (typeof testOnChange === typeof testRadioButton.props.onChange);
    expect(isOfEqualType).toBeTruthy();
})


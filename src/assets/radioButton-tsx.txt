import React from 'react';
import './radio-button.css';

type RadioButtonProps = {
    children?: string| number | React.ReactChild | React.ReactChildren | React.ReactFragment | React.ReactPortal,
    label?: string | number,
    subComponents?: string | number | React.ReactChild | React.ReactChildren | React.ReactFragment | React.ReactPortal,

    name?: string,
    value?: string,
    checked?: boolean,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

type RadioButtonStates = {
    clicknum?: number,
    showMore?: boolean
}

class RadioButton extends React.Component<RadioButtonProps, RadioButtonStates> {

    constructor(props: RadioButtonProps) {
        super(props)
        this.state = {showMore: false};
        return;
    }

    componentDidMount() {
        console.log("RadioButton Component is rendered!");
    }
    
    componentWillUnmount() {
        console.log("RadioButton Component is torn down!");
    }

    render() {
        return (
            <div className="radio-button-wrapper">
                <input 
                    type="radio"
                    name={this.props.name}
                    value={this.props.value}
                    checked={this.props.checked}
                    onChange={this.props.onChange}
                />
                <label>{this.props.label || this.props.subComponents || this.props.children}</label>
            </div>
        )
    }
}

export default RadioButton;
import React from 'react';
import ReactDOM from 'react-dom';
//PRIVATE COMPONENTS
import StyledInput from './StyledInput';
import Label from './Label';
import Wrapper from './Wrapper';

class Text extends React.Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}
	handleOnFocus = (event) => {
		this.label.style.top           = '-100%';
		this.label.style.animationName = 'input_text_label_shadow_up';
	}
	handleOnBlur = (event) => {
		if (!this.input.value) {
			this.label.style.top           = '0px';
			this.label.style.animationName = 'input_text_label_shadow_down';
		} else if (this.input.value) {
			this.label.style.top           = '-100%';
			this.label.style.animationName = 'input_text_label_shadow_up';
		}	
	}
	componentDidMount() {
		this.wrapper = ReactDOM.findDOMNode(this.refs.wrapper);
		this.input   = ReactDOM.findDOMNode(this.inputRef.current);
		this.label   = ReactDOM.findDOMNode(this.refs.label);
	}
	handleOnKeyUp = () => {
		if (this.props.type !== 'number') { return null; }
		let value = this.input.value;
		let regex = /(?![0-9])(.)/gm;
		this.input.value = value.replace(regex, '');
	}
	handleClickLabel = () => {
		this.input.focus();
	}
	render() {
		if (this.props.label) {
			var { value, ...labelProps  } = this.props.label;
		}
		let { type, ...inputProps } = this.props;
		return (
			<Wrapper {...inputProps} ref="wrapper">
				<StyledInput ref={this.inputRef} {...inputProps} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp}/>
				<Label ref="label" className={'label'} {...labelProps} onClick={this.handleClickLabel}>
					{ value }
				</Label>
			</Wrapper>
		);
	}
}

export default Text;
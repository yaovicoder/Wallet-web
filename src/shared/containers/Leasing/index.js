import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import style from 'Shared/style-variables';
//
import PanelLeft from './PanelLeft';
//import PanelRight from './PanelRight';

let Panels = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

class Leasing extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<Panels>
				<PanelLeft />
				
			</Panels>
		);
	}
}

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default Leasing;
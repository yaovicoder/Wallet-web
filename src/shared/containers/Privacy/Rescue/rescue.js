import React from "react";
import styled from "styled-components";
import style from "Shared/style-variables";

// REDUX
import { connect } from 'react-redux';
import { setWalletInfo } from 'Redux/actions';

// COMPONENTS
import { Col, H1, H2 } from 'Components';
import { ButtonGreen } from "Components/Buttons";


const Content = styled.div`
`;

const Input = styled.input`
  border: 1px solid ${style.lightPurple};
  background-color: ${style.defaultPurple};
  border-radius: 6px;
  color: ${style.normalGreen};
	font-size: 1.6rem;
	text-align: center;
  margin: 25px 0;
  padding: 20px;
	resize: none;
	width: 100%;
`;

const Row = styled.div`
  text-align: center;
`;

class Rescue extends React.Component {
	constructor(){
		super();
		this.state = {
			notification: null,
			walletInfo: {
				seed: null,
				addresses: {
					LNS: null
				}
			}
		}
	}

	setSeed() {
		try {
			let walletInfo = {
				seed: this.state.walletInfo.seed,
				addresses: {
					LNS: '161cmLgavNNkWTjR61RnNqtejFeB88X6FM'
				}
			}
			if (this.state.walletInfo.seed) {
				this.props.setWalletInfo(walletInfo);
				localStorage.setItem('WALLET-INFO', JSON.stringify(walletInfo));	
				this.setState({ ...this.state, notification: 'Success' })
			} else {
				this.setState({ ...this.state, notification: 'Campo vazio' })
			}
		} catch (error) {
			this.setState({ ...this.state, notification: error })
			console.log(error)
		}

	}

	renderMsg() {
		if (this.state.notification && this.state.notification === 'Success') {
			return (
				<H1 fontSize={"2.2rem"} margin={"2rem 0 0 0"} offSide clNormalGreen> Importado com sucesso! </H1>
			);
		} else if (this.state.notification && this.state.notification !== 'Success') {
			return (
				<H1 fontSize={"2.2rem"} margin={"2rem 0 0 0"} offSide clNormalRed> { this.state.notification } </H1>
			);
		}
	}

	render() {
		return (
			<Content>
				<H1 fontSize={"1.6rem"} txBold clWhite>
					Digite suas palavras
				</H1>
				<Input onChange={ (seed) => { this.setState({ ...this.state, walletInfo: { seed: seed.target.value }, notification: null }) } } placeholder="Ex: fantasy deliver afford disorder primary protect garbage they defense paddle alert reveal various just dish"/>
				<Row>
					<H2 fontSize={"1.6rem"} margin={"0 0 2.0rem 0"} padding={"1.0rem 0 0 0"} clNormalGreen>
					</H2>
					<ButtonGreen width="130px" fontSize={'0.8rem'} onClick={ () => { this.setSeed() } }>Importar</ButtonGreen>
				</Row>
				<Row>
					{ this.renderMsg() }
				</Row>
			</Content>
		);
	}
}

// REDUX
const mapStateToProps = state => {
	return {
		walletInfo: state.walletInfo
	};
};

const mapDispatchToProps = dispatch => {
  return {
    setWalletInfo: data => {
      dispatch(setWalletInfo(data));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Rescue);

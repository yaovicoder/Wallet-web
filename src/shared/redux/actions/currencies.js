import { WalletClass } from 'Classes/Wallet';
import axios from 'axios';
import { HOST } from 'Config/constants';

const Wallet = new WalletClass();

export const setCurrenciesPrice = () => {
	return {
		type: 'CURRENCIES_SET_PRICE',
    payload: axios.post(HOST+'/currencies/price')
		// payload: Wallet.getCoinsPrice({
		// 	USD:  { fromSymbol: 'USD', toSymbol:'BRL,EUR' },
		// 	EUR:  { fromSymbol: 'EUR', toSymbol:'BRL,USD' },
		// 	BRL:  { fromSymbol: 'BRL', toSymbol:'EUR,USD' }
		// })
	};
}

export const setCryptoPrice = (price) => {
	let toSymbol = 'USD,EUR,BRL';
	return {
		type: 'CRYTPO_SET_PRICE',
    payload: axios.post(HOST+'/cryptos/price')
		// payload: Wallet.getCoinsPrice({
		// 	LNS:  { fromSymbol:'LNS',  toSymbol },
		// 	BTC:  { fromSymbol:'BTC',  toSymbol },
		// 	ETH:  { fromSymbol:'ETH',  toSymbol },
		// 	LTC:  { fromSymbol:'LTC',  toSymbol },
		// 	DASH: { fromSymbol:'DASH', toSymbol },
		// })
	}
}

// ENABLE COINS
export const setCryptoTx = (coin) => {
	return {
		type: 'CRYTPO_SET_TX',
		payload: Wallet.getCryptoTx(coin)
	};
}

export const autoSetCurrenciesPrice = () => { }

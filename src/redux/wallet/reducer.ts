/* eslint-disable import/no-default-export */
import { createAction, createReducer } from '@reduxjs/toolkit';
import { CoinList } from '../../consts';
import { UpadateCoinParams, WalletReduxState } from '../../interfaces';

const initialState: WalletReduxState = {
  coins: [...CoinList],
  total: CoinList.map((x) => x.amount * x.price).reduce((a, b) => a + b, 0),
};

const updateCoin = createAction<UpadateCoinParams>('wallet/updateCoin');

export const CoinActions = {
  updateCoin,
};

export const walletReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateCoin, (state, { payload: { code, price, amount } }) => {
    const coin = state.coins.find((x) => x.code === code);
    if (coin) {
      if (typeof price !== 'undefined') {
        coin.price = price;
      }
      if (typeof amount !== 'undefined') {
        coin.amount = amount;
      }
      state.total = state.coins.map((x) => x.amount * x.price).reduce((a, b) => a + b, 0);
    }
    return state;
  });
});

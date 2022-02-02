export interface WalletReduxState {
  coins: CoinInfo[];
  total: number;
}

export interface ReduxState {
  wallet: WalletReduxState;
}

export interface CoinInfo {
  code: string;
  price: number;
  amount: number;
}

export interface UpadateCoinParams {
  code: string;
  price?: number;
  amount?: number;
}

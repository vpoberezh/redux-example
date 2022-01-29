export interface ReduxState {
    counter: {
        value: number;
        status: string;
    };
}

export interface CoinInfo {
    code: string;
    price: number;
    amount: number;
}

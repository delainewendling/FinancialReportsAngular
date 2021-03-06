import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function timelyReportReducer(state = initialState.products, action) {
    switch (action.type) {
        case types.LOAD_TIMELY_REPORT_SUCCESS:
            return {
                ...state,
                products: action.products
            };
        case types.LOAD_PRODUCT_REVENUE_SUCCESS:
            return {
                ...state,
                products: action.products
            };
        default:
            return state;
    }
}
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function timelyReportReducer(state = initialState.customers, action) {
    switch (action.type) {
        case types.LOAD_CUSTOMER_REVENUE_SUCCESS:
            return action.customers;
        default:
            return state;
    }
}
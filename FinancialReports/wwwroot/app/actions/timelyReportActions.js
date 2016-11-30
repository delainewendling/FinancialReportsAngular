import axios from 'axios';
import * as types from './actionTypes';

export function loadTimelyReportSuccess(products) {
    return { type: types.LOAD_TIMELY_REPORT_SUCCESS, products };
}

export function loadTimelyReport(days) {
    return function(dispatch) {
        axios.get(`/timelyreports/${days}`)
            .then(products => {
                console.log("here are the products", products);
                dispatch(loadTimelyReportSuccess(products));
            })
            .catch(error => {
                throw (error);
            })
    }
}
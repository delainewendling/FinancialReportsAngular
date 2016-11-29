import axios from 'axios';
import * as types from './actionTypes';

export function loadTimelyReportSuccess(products) {
    return { type: types.LOAD_TIMELY_REPORT_SUCCESS, products };
}

export function loadTimelyReport(days) {
    return dispatch => {
        return axios.get(`/TimelyReports/${days}`)
            .then(products => {
                dispatch(loadTimelyReportSuccess(products));
            })
            .catch(error => {
                throw (error);
            })
    }
}
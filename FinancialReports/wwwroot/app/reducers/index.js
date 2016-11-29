import { combineReducers } from 'redux';
import productReports from './productReportReducer';
import customerReports from './customerReportReducer';

const rootReducer = combineReducers({
    productReports,
    customerReports
})
export default rootReducer;
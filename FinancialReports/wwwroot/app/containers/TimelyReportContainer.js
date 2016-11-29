import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reportActions from '../actions/timelyReportActions';

class GetTimelyReports extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            products: Object.assign({}, this.state.products),
            revenue: Object.assign({}, this.state.revenue)
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.days != nextProps.days) {
            //Call the API with the correct number of days
            reportActions.loadTimelyReport(nextProps.day)
        }
    }
}
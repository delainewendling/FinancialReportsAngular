import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reportActions from '../actions/timelyReportActions';
import TimelyReport from '../components/TimelyReports';

class GetTimelyReports extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        console.log("next props", nextProps);
        if (this.props.route.days != nextProps.route.days) {
            reportActions.loadTimelyReport(parseInt(nextProps.route.days))
        } else {
            reportActions.loadTimelyReport(parseInt(this.props.route.days))
        }
    }
    componentDidMount() {
        reportActions.loadTimelyReport(parseInt(this.props.route.days))
    }
    render() {
        return ( 
            <TimelyReport 
                header = { this.props.route.header }
                products = { this.props.products }
            />
        )
    }
}

// GetTimelyReports.propTypes = {
//     header: PropTypes.string.isRequired,
//     days: PropTypes.string.isRequired
// }

//This connects to the store. Tells redux which elements of the store you want to update or are necessary.
const mapStateToProps = ({ products }) => ({ products });

const mapDispatchToProps = (dispatch) => bindActionCreators(reportActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GetTimelyReports);
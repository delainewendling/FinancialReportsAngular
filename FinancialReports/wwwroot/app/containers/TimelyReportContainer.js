import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reportActions from '../actions/timelyReportActions';
import TimelyReport from '../components/TimelyReports';

class GetTimelyReports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.days != nextProps.days) {
            const products = reportActions.loadTimelyReport(parseInt(nextProps.days))
            this.setState({ products: Object.assign({}, products) })
        }
        const products = reportActions.loadTimelyReport(parseInt(this.props.days))
        this.setState({ products: Object.assign({}, products) })
    }
    componentDidMount() {
        const products = reportActions.loadTimelyReport(parseInt(this.props.days))
        this.setState({ products: Object.assign({}, products) })
    }
    render() {
        return ( <
            TimelyReport header = { this.props.header }
            products = { this.state.products }
            />
        )
    }
}

const mapStateToProps = ({ products }) => ({ products: state.products });

const mapDispatchToProps = (dispatch) => bindActionCreators(reportActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GetTimelyReports);
import React from 'react';
import { render } from 'react-dom';
import {Route, IndexRoute } from 'react-router';
import Main from './components/Main';
import Menu from './components/Menu';
import TimelyReportContainer from './containers/TimelyReportContainer'

export default ( 
    <Route path ="/" component = { Main } >
        <IndexRoute component = { Menu }/> 
        <Route path="/weeklyReport" days="7" header="Weekly Report" component={TimelyReportContainer}/>
        <Route path="/monthlyReport" days="30" header="Monthly Report" component={TimelyReportContainer}/>
        <Route path="/quarterlyReport" days="90" header="Quarterly Report" component={TimelyReportContainer}/>
    </Route > 
)

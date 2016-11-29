import React from 'react';
import ReactRouter from 'react-router';

export default function Menu (){
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li><a href="/weeklyReport"> Weekly Report </a></li>
          <li><a href="/monhtlyReport"> Monthly Report </a></li>
          <li><a href="/quarterlyReport"> Quarterly Report </a></li>
          <li><a href="/customerRevenueReport"> Customer Revenue Report </a></li>
          <li><a href="/productRevenueReport"> Product Revenue Report </a></li>
        </ul>
      </div>
    </nav>
  )
}
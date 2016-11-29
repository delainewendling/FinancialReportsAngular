import React, {PropTypes} from 'react';
import ReportRow from './ReportRow';

const TimelyReport = ({header}, {products})=>{
    return (
      <table className="table">
        <thead>
          <tr> <h1> {header} </h1></tr>
          <tr>
            <th> Product </th>
            <th> Price </th>
          </tr>
        </thead>
        <tbody>
        {products.map(product =>
          <ReportRow key={product.ProductId} product={product}/>
        )}
        </tbody>
      </table>
    );
}

TimelyReport.propTypes = {
  products: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired
}

export default TimelyReport;
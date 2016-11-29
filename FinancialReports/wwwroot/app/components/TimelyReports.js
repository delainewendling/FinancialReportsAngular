import React, {PropTypes} from 'react';
import ReportRow from './ReportRow';
import Menu from './Menu';

const TimelyReport = ({header}, {products})=>{
  console.log(header);
    return (
      <Menu>
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
      </Menu>
    );
}

TimelyReport.propTypes = {
  products: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired
}

export default TimelyReport;
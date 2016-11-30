import React, {PropTypes} from 'react';
import ReportRow from './ReportRow';
import Menu from './Menu';

const TimelyReport = ({header}, {products})=>{
  console.log("header",header);
    return products ? 
      <div>
        <Menu />
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
      </div>
      :
      <div>
        <Menu />
        <h1> There are no products in the {header} </h1>
      </div>
}

TimelyReport.propTypes = {
  products: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired
}

export default TimelyReport;
import React, {PropTypes} from 'react';

const ReportRow = ({product})=>{
  return (
    <tr>
      <td>{product.Name}</td>
      <td>{product.Price}</td>
    </tr>
  );
};

ReportRow.propTypes = {
  product: PropTypes.object.isRequired
}

export default ReportRow;
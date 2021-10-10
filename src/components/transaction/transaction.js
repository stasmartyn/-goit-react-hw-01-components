import PropTypes from 'prop-types';
function Transaction({type,amount,currency}){
    return(  
  
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  
    );
}
export default Transaction;

import Transaction from './transaction';
function TransactionApp({transItems}){
    return(
        <table>
     <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
{transItems.map(transItem=>(
      <tbody key={transItem.id}>

    <Transaction type={transItem.type}
    amount={transItem.amount}
    currency={transItem.currency}
    id={transItem.id}
    />
      </tbody>

))}

        </table>
    );
}
export default TransactionApp;
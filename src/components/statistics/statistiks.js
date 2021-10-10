import PropTypes from 'prop-types';
export default function Statistick({label,percentage}){
    return( 
     
      <div>
  <span>{label}</span>
        <span>{percentage}</span>
      </div>
      
    
    
  );
}

Statistick.propTypes={
    label:PropTypes.string,
    percentage:PropTypes.number
}
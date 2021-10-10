import PropTypes from 'prop-types';
function friendsItem({avatar,name,isOnline}){
    return(
        <div>
  <span>{isOnline}</span>
  <img src={avatar} alt={name} width="48" />
  <p>{name}</p>
  </div>

    );
}
friendsItem.propTypes={
    avatar:PropTypes.string,
    name:PropTypes.string,
    isOnline:PropTypes.bool,
}
export default friendsItem;
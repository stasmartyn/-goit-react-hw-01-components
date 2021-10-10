import PropTypes from 'prop-types';
export default function Profile({name,tag,location,followers,views,likes,avatar}){
    return(
  <div>
    <div>
      <img
        src={avatar}
        alt="Аватар пользователя"
        
      />
      <p>@{name}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
    <ul>
      <li>
        <span>Followers:</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views:</span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes:</span>
        <span>{likes}</span>
      </li>
    </ul>
  </div>
    );
  }
  Profile.propTypes={
      avatar:PropTypes.string,
      name:PropTypes.string,
      tag:PropTypes.string,
      location:PropTypes.string,
      followers:PropTypes.number,
      views:PropTypes.number,
      likes:PropTypes.number,
  };
  

  
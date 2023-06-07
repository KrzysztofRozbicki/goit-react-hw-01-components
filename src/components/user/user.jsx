import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile">
      <figcaption className="profile__info">
        <img src={avatar} alt={username} className="profile__info__photo" />
        <h2 className="profile__info__name">{username}</h2>
        <p className="profile__info__tag">{tag}</p>
        <p className="profile__info__location">{location}</p>
      </figcaption>
      <div className="profile__stats">
        <div className="profile__stats__box">
          <p className="profile__stats__type">Followers</p>
          <p className="profile__stats__number">{followers}</p>
        </div>
        <div className="profile__stats__box">
          <p className="profile__stats__type">Views</p>
          <p className="profile__stats__number">{views}</p>
        </div>
        <div className="profile__stats__box">
          <p className="profile__stats__type">Likes</p>
          <p className="profile__stats__number">{likes}</p>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

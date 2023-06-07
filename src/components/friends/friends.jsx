import PropTypes from 'prop-types';

export const Friends = ({ friends }) => {
  return (
    <div className="friends">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <figcaption className="friends__info" key={id}>
            <img src={avatar} alt={name} className="friends__info__photo" />
            <h2 className="friends__info__name">{name}</h2>
          </figcaption>
        );
      })}
    </div>
  );
};

Friends.propTypes = {
  friends: PropTypes.array.isRequired,
};

import PropTypes from 'prop-types';
import css from './friends.module.css';
import clsx from 'clsx';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={css.item} key={id}>
            <span
              className={clsx(css.status, {
                [css.online]: isOnline,
                [css.offline]: !isOnline,
              })}
            ></span>
            <img src={avatar} alt={name} className={css.avatar} />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

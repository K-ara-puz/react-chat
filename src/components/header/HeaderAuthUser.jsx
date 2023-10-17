import s from './Header.module.scss';
const HeaderAuthUser = (props) => {
  return (
    <div className={s.header__authUser}>
      <div>id: {props.userId}</div>
      <div className={s.header__authUser__img}>
        <img src={require(`../../assets/users/avatars/user5.jpg`)} alt="" />
      </div>
    </div>
  );
};
export default HeaderAuthUser;

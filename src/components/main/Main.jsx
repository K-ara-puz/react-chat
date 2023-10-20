import "./Main.scss";
import NavbarContainer from "../navbar/NavbarContainer";
import { connect } from "react-redux";
import RoutesNavigator from '../routesNavigator/RoutesNavigator';

const Main = (props) => {
  return (
    <div className="main">
      <NavbarContainer></NavbarContainer>
      <div className="main__content">
        <RoutesNavigator isUserAuth={props.isUserAuth} isFetching={props.isFetching}></RoutesNavigator>
      </div>
    </div>
  );
};
let mapStateToProps = (state) => {
  return {
    isFetching: state.globalState.isFetching,
    isUserAuth: state.auth.isAuth,
  }
}
export default connect(mapStateToProps, {})(Main);
import { useSelector } from 'react-redux';
import { routeTo } from '../routesNavigator/RoutesNavigator';

const WithAuth = (Component) => {
  return function Wrapper(props) {

    const isAuth = useSelector((state) => state.auth.isAuth);
    
    if (isAuth) {
      return <Component {...props}></Component>
    } else {
      return routeTo('/login')
    }
  }
}
export default WithAuth;
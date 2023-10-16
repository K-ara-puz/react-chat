import './Preloader.scss';
import PreloaderImg from '../../assets/infinite-spinner.svg';

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={PreloaderImg} alt="" />
    </div>
  )
}
export default Preloader;
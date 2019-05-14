import { connect } from 'react-redux';
import Weather from '../../components/Weather';
import {
  getWeather,
  getIsLoading,
  startFetchWeather,
} from '../../reducers/weather';

const mapStateToProps = (state) => ({
  items: getWeather(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = {
  startFetchWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
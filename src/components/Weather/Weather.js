import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Weather extends Component {

  componentDidMount() {
    const { startFetchWeather } = this.props;
    startFetchWeather();
  };

  render() {
    const {
      items, isLoading
    } = this.props;
    console.log('items:',items);
    console.log('isLoading:',isLoading);
    if (isLoading) {
      return (
        <div>
          Chờ chút...
        </div>
      )
    }
    return (
      <div>
        <div><b>Tên quốc gia:</b> {items.sys.country}</div>
        <div><b>Tên thành phố:</b> {items.name}</div>
        <div><b>Kinh độ:</b> {items.coord.lon}</div>
        <div><b>Vĩ độ:</b> {items.coord.lat}</div>
        <div><b>Nhiệt độ hiện tại:</b> {items.main.temp}</div>
        <div><b>Sức gió:</b> {items.wind.speed}</div>
        <div><b>Thời tiết:</b> {items.weather[0].description}</div>
        <div><b>Độ ẩm:</b> {items.main.humidity}</div>
      </div>
    )
  }
}

Weather.propTypes = {
  items: PropTypes.array,
  startFetchWeather: PropTypes.func.isRequired,
};

Weather.defaultProps = {
  items: [],
  isLoading: false,
}

export default Weather;

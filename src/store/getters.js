export default {
  count: state => state.count,
  isOdd: state => state.count % 2 == 0 ? '偶数' : '奇数',
  city: state => state.city,
  weather: state => state.weather
}

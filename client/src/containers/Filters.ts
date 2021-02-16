import { connect } from 'react-redux';
import { Filters } from '../components/carsTable/Filters';

const mapStateToProps = (state: {cars: any, visibilityFilter: string}): { makes: string[]} => ({
  makes: state.cars.makes
})

export default connect(
  mapStateToProps,
)(Filters)

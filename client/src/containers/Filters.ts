import { connect } from 'react-redux';
import { Filters } from '../components/car/Filters';
import { IFilter } from '../components/car/types';

const mapStateToProps = (state: IFilter): { makes: string[]} => ({
  makes: state.cars.makes
})

export default connect(
  mapStateToProps,
)(Filters)

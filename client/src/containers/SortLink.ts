import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import { Filters } from '../components/carsTable/Filters'
import { ICar } from '../interfaces/car.interface'

// const mapStateToProps = (state: { visibilityFilter: string}, ownProps: any) => ({
//   active: ownProps.filter === state.visibilityFilter
// })

// const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
//   makes: () => dispatch(setVisibilityFilter(ownProps.filter))
// })

const mapStateToProps = (state: {cars: any, visibilityFilter: string}): { makes: string[]} => ({
  makes: state.cars.makes
})

export default connect(
  mapStateToProps,
)(Filters)

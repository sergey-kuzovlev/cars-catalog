import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/carsTable/Links'

const mapStateToProps = (state: { visibilityFilter: string}, ownProps: any) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

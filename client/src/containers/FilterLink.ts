import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/car/Links';
import { IActionFilter } from '../components/car/types';

const mapStateToProps = (state: { visibilityFilter: string}, ownProps: any/*{ filter: string, children: string}*/) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch<IActionFilter>, ownProps: any/*{ filter: string, children: string}*/) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

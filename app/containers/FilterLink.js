import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

// ownProps are the props that are passed to the component
const mapStateToProps = (state, ownProps) => {
  return {
    // we compare the filter prop of the link
    // to the value that is in the state
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      // when we click a filter link we will take the
      // value of the filter prop and send that as part
      // of the action to a reducer
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink

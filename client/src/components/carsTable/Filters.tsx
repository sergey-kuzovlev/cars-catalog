import React from 'react'
import FilterLink from '../../containers/FilterLink'
import { VisibilityFilters } from '../../actions'

export const Filters: React.FC = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_BMW}>
      BMW
    </FilterLink>
  </div>
)

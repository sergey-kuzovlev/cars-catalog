import React from 'react'
import FilterLink from '../../containers/FilterLink'
import { connect } from 'react-redux'

export const Filters: React.FC<any> = ({makes}) => {

  return (
  <div className='filters'>
    <FilterLink filter="all">
      All
    </FilterLink>
    {makes && makes.map((make: string) => (
      <FilterLink filter={make}>
        {make}
      </FilterLink>
    ))}

  </div>
  );
}

export default connect()(Filters)
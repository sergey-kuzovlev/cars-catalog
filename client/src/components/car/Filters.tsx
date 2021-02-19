import React from 'react';
import FilterLink from '../../containers/FilterLink';
import { connect } from 'react-redux';
import { ICar } from './types';

export const Filters: React.FC<any> = ({makes}) => {

  return (
  <div className='filters'>
    <FilterLink filter="all">
      All
    </FilterLink>
    {makes && makes.map((make: string, index: number) => (
      <FilterLink filter={make} key={index}>
        {make}
      </FilterLink>
    ))}
  </div>
  );
} 

export default connect()(Filters)
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import MenuItem from '../menu-items/menu-items.component';
import { selectSections } from '../../redux/directory/directory-selectors';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections
})

export default connect(mapStateToProps)(Directory);
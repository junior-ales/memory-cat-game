import React from 'react';
import { compose } from 'ramda';

const Footer = text => <div>{text}</div>;

export default compose(Footer, props => props.year);

import React from 'react';
import cx from 'classnames';

import withStyles from '../../src/tools/withStyles';
import Frame from '../../src/Frame';
import Image from '../../src/Image';


import Link from './Link';

const styles = (theme) => ({
  root: {
    marginRight: '5%'
  },
});

const Icon = (props) => {
  const { onLink, classes, className, ...etc } = props;
  const cls = cx(classes.root, className);
  return (
    <Frame animate corners={6} className={classes.root}>
      <Image animate resources="../../static/img/icons/image001.png"></Image>
    </Frame>
  );
};

export default withStyles(styles)(Icon);

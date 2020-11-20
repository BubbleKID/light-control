import React from 'react';
import cx from 'classnames';

import withStyles from '../../src/tools/withStyles';
import Frame from '../../src/Frame';
import Image from '../../src/Image';
import Button from '../../src/Button';


import Link from './Link';

const styles = (theme) => ({
  root: {
    marginRight: '30px',
    marginBottom: '30px',
    flex: 'flex: 0 0 33.3333%;',
  },
});

const Icon = (props) => {
  const { onLink, classes, className, url, ...etc } = props;
  const cls = cx(classes.root, className);
  return (
    <Frame animate corners={6} className={classes.root}>
      <Button animate layer="success">
        <Image animate resources={url}></Image>
      </Button>
    </Frame>
  );
};

export default withStyles(styles)(Icon);

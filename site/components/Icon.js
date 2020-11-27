import React from 'react';
import cx from 'classnames';

import withStyles from '../../src/tools/withStyles';
import Image from '../../src/Image';
import Button from '../../src/Button';


const styles = (theme) => ({
  root: {
    width: '150px',
    marginRight: '20px',
    marginBottom: '20px',
    flex: 'flex: 0 0 33.3333%;',
    alignItem: 'center',
  },
  image: {
    margin: '0px',
  }
});

  const Icon = (props) => {
  const {classes, className, url, setMarkdown, num, ...etc } = props;
  const cls = cx(classes.root, className);

  return (
    <Button animate layer="primary" onClick={() => setMarkdown(num)} className={classes.root}>
      <Image animate resources={url} className={classes.image}></Image>
    </Button>
  );
};

export default withStyles(styles)(Icon);

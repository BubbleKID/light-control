import React from 'react';
import cx from 'classnames';

import withStyles from '../../src/tools/withStyles';
import ArwesFooter from '../../src/Footer';
import { Row } from '../../src/Grid';

import Wrap from './Wrap';
import Icon from './Icon';
import FooterAuthor from './FooterAuthor';

const styles = (theme) => ({
  root: {
    textAlign: 'left',
    height: '30%'
  },
  wrap: {
    padding: [theme.padding, 0],
  },
  content: {
    display: 'flex',
  },
  left: {
    flex: '1 1 auto',
  },
  right: {
    flex: '1 1 auto',
    textAlign: 'right',
    '& a': {
      textAlign: 'left',
    },
  },
});

const IconPanel = (props) => {
  const { onLink, classes, className, ...etc } = props;

  const cls = cx(classes.root, className);

  return (
    <ArwesFooter className={cls} {...etc}>
      {(anim) => (
        <Wrap className={classes.wrap}>
          <Row noMargin col s={12}>
            <div className={classes.content}>
              <Icon></Icon>
              <Icon></Icon>
            </div>
          </Row>
        </Wrap>
      )}
    </ArwesFooter>
  );
};

export default withStyles(styles)(IconPanel);

import React from 'react';
import cx from 'classnames';

import withStyles from '../../src/tools/withStyles';
import ArwesFooter from '../../src/Footer';
import { Row } from '../../src/Grid';

import Wrap from './Wrap';
import Icon from './Icon';

const styles = (theme) => ({
  root: {
    textAlign: 'left',
    height: 'auto',
  },
  wrap: {
    maxWidth: '80vw',
    padding: [theme.padding, 0],
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
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


class IconPanel extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const {classes, className, setMarkdown, ...etc } = this.props;
    const cls = cx(classes.root, className);

    return (
      <ArwesFooter className={cls} {...etc}>
        {(anim) => (
          <Wrap className={classes.wrap}>
            <Row noMargin col s={12}>
              <div className={classes.content}>
                {Array.from(Array(17).keys()).map((item) => (
                  <Icon key={item} url={`../../static/img/icons/${item}.png`} num={item} setMarkdown={setMarkdown}></Icon>
                ))}
              </div>
            </Row>
          </Wrap>
        )}
      </ArwesFooter>
    );
  }
}

export default withStyles(styles)(IconPanel);

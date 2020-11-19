import withContent from '../../site/withContent';
import markdown from '../../site/docs/sign/aaa.md';

const customStyle = (theme) => ({
  root: {
    width: '1600px',
  },
});

export default withContent({ markdown, customStyle });

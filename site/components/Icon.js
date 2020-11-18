import React from 'react';

import Frame from '../../src/Frame';
import Image from "../../src/Image";
import Words from '../../src/Words';
import Appear from '../../src/Appear';

import Link from './Link';

export default function Icon (props) {
  const { show, onLink, ...etc } = props;
  return (
    <Frame animate corners={4}>
      <Image animate resources="../../static/img/icons/image001.png">
        The vast universe around us
      </Image>
    </Frame>
  );
}

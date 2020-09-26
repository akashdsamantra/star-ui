import React from 'react';

import Stack from '../../structures/stack/Stack';
import Text from './Text';

export default {
  title: 'Text',
  component: Text
};

/*
 *  Stories:
 *  [x] Sample Text
 *  [ ] Text with font size props
 *  [x] Text with color props
 *  [ ] Text with elipsis (with and without width specified)
 *  [x] Custom Styles
 */

export const Sample = () => {
  return <Text>Sample Text</Text>;
};

export const Colors = () => {
  return (
    <Stack direction="vertical">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text variant="primary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text variant="secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text variant="success">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text variant="danger">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text variant="warning">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </Stack>
  );
};

export const Custom = () => {
  return (
    <Text style={{ backgroundColor: 'blue', color: 'white' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  );
};

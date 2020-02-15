import {pixelToHpPercent} from '../utils';

const size = {
  h1: pixelToHpPercent(38),
  h2: pixelToHpPercent(34),
  h3: pixelToHpPercent(30),
  h4: pixelToHpPercent(26),
  h5: pixelToHpPercent(23),
  h6: pixelToHpPercent(20),

  big: pixelToHpPercent(18),
  large: pixelToHpPercent(16),
  regular: pixelToHpPercent(14),
  medium: pixelToHpPercent(12),
  small: pixelToHpPercent(10),
  tiny: pixelToHpPercent(8),
  mini: pixelToHpPercent(6),
};

export default {
  size,
};

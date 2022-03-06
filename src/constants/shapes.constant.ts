import { keyframes } from '@emotion/react';

export const downKeyFrame = keyframes`
  from {
    transform: translate3d(0,0,0);
  }
  to {
    transform: translate3d(0,20px,0);
  }
`;

export const upKeyFrame = keyframes`
  from {
    transform: translate3d(0,0,0);
  }
  to {
    transform: translate3d(0,-20px,0);
  }
`;

import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconQuestionCircle: React.FC<IconTypes> = ({ size = 'lg', className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={ICON_SIZE[size]}
      height={ICON_SIZE[size]}
      fill='none'
      viewBox='0 0 24 24'
      style={getInlineIconStyles(size)}
      className={className}
    >
      <path
        fill='currentColor'
        d='M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10Zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8Z'
      />
      <path
        fill='currentColor'
        d='M12 14.5c-.55 0-1-.45-1-1v-1.04c0-.55.45-1 1-1 .83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5c0 .55-.45 1-1 1s-1-.45-1-1c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.58-1.06 2.92-2.5 3.35v.19c0 .56-.45 1-1 1Zm0 3.21a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z'
      />
    </svg>
  );
};
export default IconQuestionCircle;

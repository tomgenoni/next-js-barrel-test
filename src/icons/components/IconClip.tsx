import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconClip: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M12.072 22c-3.305 0-5.993-2.8-5.993-6.242V6.521C6.08 4.028 8.036 2 10.44 2c1.172 0 2.271.477 3.096 1.341a4.58 4.58 0 0 1 1.257 3.18v8.292c0 1.542-1.216 2.796-2.711 2.796-1.495 0-2.711-1.254-2.711-2.796V8.5a1 1 0 0 1 2 0v6.313c0 .438.319.796.711.796.392 0 .711-.357.711-.796V6.521c0-.683-.25-1.322-.706-1.8A2.26 2.26 0 0 0 10.44 4C9.139 4 8.08 5.131 8.079 6.521v9.237c0 2.339 1.792 4.242 3.993 4.242 2.202 0 3.993-1.903 3.993-4.242V8.5a1 1 0 1 1 2 0v7.258c0 3.442-2.688 6.242-5.993 6.242Z'
      />
    </svg>
  );
};
export default IconClip;

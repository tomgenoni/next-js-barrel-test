import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconBellFilled: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M21.526 16.347c-.596-1.231-1.594-3.707-1.594-6.452C19.933 5.394 16.522 2 12 2S4.067 5.394 4.067 9.895c0 2.745-.998 5.221-1.594 6.452a1.492 1.492 0 0 0 .079 1.451c.276.439.752.702 1.272.702h4.132C8.252 20.476 9.943 22 12 22c2.057 0 3.748-1.524 4.043-3.5h4.132a1.49 1.49 0 0 0 1.271-.702c.278-.441.307-.983.08-1.451ZM12 20a2.099 2.099 0 0 1-2.005-1.5h4.011A2.101 2.101 0 0 1 12 20Z'
      />
    </svg>
  );
};
export default IconBellFilled;

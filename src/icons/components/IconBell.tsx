import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconBell: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M21.526 16.347c-.596-1.231-1.594-3.707-1.594-6.452C19.933 5.394 16.522 2 12 2S4.067 5.394 4.067 9.895c0 2.746-.998 5.222-1.593 6.452a1.492 1.492 0 0 0 .079 1.451c.275.439.75.702 1.271.702h4.133C8.252 20.476 9.944 22 12 22c2.057 0 3.748-1.524 4.043-3.5h4.132a1.49 1.49 0 0 0 1.271-.702c.278-.441.307-.983.08-1.451ZM12 20a2.099 2.099 0 0 1-2.005-1.5h4.011A2.101 2.101 0 0 1 12 20Zm-7.397-3.5c.654-1.517 1.465-3.934 1.465-6.605C6.067 6.534 8.618 4 12 4c3.382 0 5.933 2.534 5.933 5.895 0 2.671.811 5.089 1.465 6.605H4.603Z'
      />
    </svg>
  );
};
export default IconBell;

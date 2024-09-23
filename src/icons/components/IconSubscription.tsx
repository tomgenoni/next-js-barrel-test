import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconSubscription: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M15 23c-.194 0-.388-.057-.555-.168L10.197 20H7.5c-2.206 0-4-1.794-4-4V7c0-2.206 1.794-4 4-4h9c2.206 0 4 1.794 4 4v9c0 2.206-1.794 4-4 4H16v2a1 1 0 0 1-1 1ZM7.5 5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h3c.197 0 .391.059.555.168L14 20.132V19a1 1 0 0 1 1-1h1.5c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2h-9Z'
      />
      <path
        fill='currentColor'
        d='M15.611 10.628a.644.644 0 0 0-.519-.438l-1.738-.252-.778-1.576c-.217-.438-.937-.438-1.153 0l-.777 1.576-1.738.252a.643.643 0 0 0-.356 1.097l1.258 1.226-.297 1.732a.645.645 0 0 0 .933.678l1.554-.82 1.556.819a.644.644 0 0 0 .933-.678l-.298-1.732 1.258-1.226a.64.64 0 0 0 .162-.658Z'
      />
    </svg>
  );
};
export default IconSubscription;

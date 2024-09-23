import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconNewspaper: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M16.508 14.036H11.25a1 1 0 1 1 0-2h5.258a1 1 0 1 1 0 2Zm0 3.286H11.25a1 1 0 1 1 0-2h5.258a1 1 0 1 1 0 2ZM14 6.72h-3a.5.5 0 0 0-.5.5v3.03a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V7.22a.5.5 0 0 0-.5-.5Z'
      />
      <path
        fill='currentColor'
        d='M18.484 21.307H5.517a.977.977 0 0 1-.189-.018A2.912 2.912 0 0 1 2.745 18.4L2.732 7.751a1.001 1.001 0 0 1 1-1.001h2.821l-.001-3.003a1.001 1.001 0 0 1 1-1.001h12.706a1 1 0 0 1 1 1v14.788a2.777 2.777 0 0 1-2.774 2.773Zm-10.07-2h10.071a.773.773 0 0 0 .773-.772V4.747H8.553L8.558 18.4c0 .317-.051.621-.144.907Zm-2.763 0c.5 0 .907-.406.907-.906L6.554 8.75H4.733l.012 9.649c0 .501.407.908.906.908Z'
      />
    </svg>
  );
};
export default IconNewspaper;

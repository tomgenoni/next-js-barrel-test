import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconThumbUpFilled: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        fillRule='evenodd'
        d='M6 10.2h-.4A2.6 2.6 0 0 0 3 12.8v5.6A2.6 2.6 0 0 0 5.6 21H6V10.2Zm14.362-.706a2.6 2.6 0 0 0-1.985-.894H14V6.4c0-1.878-.922-3.4-2.8-3.4-.395 0-.753.233-.914.594L8 9v12h9.273a2.602 2.602 0 0 0 2.594-2.21l1.104-7.2a2.603 2.603 0 0 0-.609-2.096Z'
        clipRule='evenodd'
      />
    </svg>
  );
};
export default IconThumbUpFilled;

import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconCreatorHub: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M21.521 6.64601L12.521 1.14601C12.201 0.951006 11.798 0.951006 11.478 1.14601L2.478 6.64601C2.182 6.82801 2 7.15101 2 7.50001V10.5H4V8.06101L12 3.17201L19.901 8.00001H22V7.50001C22 7.15101 21.818 6.82801 21.521 6.64601Z'
        fill='currentColor'
      />
      <path
        d='M21 10H17C16.447 10 16 10.447 16 11V18.384L15 18.995V9C15 8.448 14.553 8 14 8H10C9.448 8 9 8.448 9 9V18.995L8 18.384V13.5C8 12.947 7.553 12.5 7 12.5H3C2.447 12.5 2 12.947 2 13.5V16.5C2 16.848 2.181 17.171 2.478 17.353L6.478 19.804C6.49 19.811 6.503 19.813 6.515 19.82L9.476 21.63L9.479 21.632L11.478 22.854C11.638 22.951 11.818 23 11.999 23C12.18 23 12.36 22.951 12.52 22.854L17.484 19.82C17.496 19.813 17.509 19.811 17.521 19.804L21.521 17.353C21.819 17.171 22 16.848 22 16.5V11C22 10.447 21.553 10 21 10ZM11 10H13V20.217L12 20.828L11 20.217V10ZM4 14.5H6V17.162L5.204 16.676L5.202 16.678L4 15.94V14.5ZM20 15.94L18.799 16.676L18.798 16.674L18 17.162V12H20V15.94Z'
        fill='currentColor'
      />
    </svg>
  );
};
export default IconCreatorHub;

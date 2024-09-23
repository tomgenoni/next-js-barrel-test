import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconShieldFilled: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.023 2.49999C12.349 2.50699 12.651 2.67299 12.832 2.94499C13.507 3.95699 14.354 4.65499 15.379 5.07499C16.24 5.42699 17.245 5.35799 18.501 4.63399C18.81 4.45599 19.191 4.45599 19.501 4.63499C19.811 4.81399 20 5.14299 20 5.49999V14.5C20 14.616 19.98 14.73 19.941 14.839C19.378 16.402 18.436 17.719 17.13 18.777C15.864 19.803 14.267 20.682 12.367 21.43C12.132 21.523 11.87 21.523 11.634 21.43C9.734 20.682 8.137 19.802 6.871 18.777C5.565 17.719 4.623 16.402 4.06 14.839C4.02 14.73 4 14.616 4 14.5V5.49999C4 5.15099 4.182 4.82699 4.48 4.64599C4.778 4.46499 5.149 4.45199 5.459 4.61199C6.864 5.33799 7.872 5.38799 8.614 5.07799C9.53 4.69499 10.395 3.99499 11.194 2.90799C11.388 2.64499 11.697 2.49299 12.023 2.49999Z'
        fill='currentColor'
      />
    </svg>
  );
};
export default IconShieldFilled;

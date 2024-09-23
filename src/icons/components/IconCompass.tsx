import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconCompass: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M8.05 17.6c-.43 0-.84-.17-1.17-.49-.46-.47-.61-1.13-.38-1.75l1.94-5.17c.26-.78.9-1.43 1.75-1.75l5.17-1.94a1.65 1.65 0 0 1 1.75.38c.46.47.61 1.13.38 1.75l-1.94 5.17c-.26.78-.9 1.43-1.75 1.75L8.63 17.5c-.19.07-.38.1-.58.1Zm7.3-8.95-4.46 1.67c-.2.08-.46.23-.57.54l-1.68 4.49 4.46-1.67c.2-.08.46-.23.57-.54l1.68-4.49Z'
      />
      <path fill='currentColor' d='M12 13.1a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z' />
    </svg>
  );
};
export default IconCompass;

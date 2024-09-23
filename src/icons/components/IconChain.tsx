import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconChain: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='m13.627 9.447-.936.936c-.219.219-.282.581.031.894a2.658 2.658 0 0 1 0 3.754l-3.691 3.691a2.657 2.657 0 0 1-3.754 0 2.657 2.657 0 0 1 0-3.754l1.688-1.688a6.673 6.673 0 0 1-.459-2.369l-2.643 2.643a4.66 4.66 0 0 0 0 6.582 4.642 4.642 0 0 0 3.291 1.361 4.642 4.642 0 0 0 3.291-1.361l3.691-3.691a4.66 4.66 0 0 0 0-6.582c-.158-.158-.334-.285-.509-.416Z'
      />
      <path
        fill='currentColor'
        d='M20.137 3.863a4.66 4.66 0 0 0-6.582 0L9.863 7.555a4.66 4.66 0 0 0 0 6.582c.158.158.335.285.51.416l.936-.936c.319-.361.17-.692-.031-.894a2.657 2.657 0 0 1 0-3.754l3.691-3.691a2.644 2.644 0 0 1 1.877-.776c.68 0 1.359.259 1.877.776a2.657 2.657 0 0 1 0 3.754l-1.688 1.688c.298.76.451 1.564.459 2.369l2.643-2.643a4.662 4.662 0 0 0 0-6.583Z'
      />
    </svg>
  );
};
export default IconChain;

import React, { useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './CopyToClipboardButton.scss';

interface CopyToClipboardProps {
  text: string;
}

const CopyToClipboardButton: React.FC<CopyToClipboardProps> = (props) => {
  const notificationEl = useRef<HTMLDivElement>(null);

  function handleCopyEvent(text: string, result: boolean): void {
    if (notificationEl.current) {
      notificationEl.current.textContent = result
        ? 'Copied!'
        : 'Error copying.';
      notificationEl.current.classList.add('is-active');

      setTimeout(() => {
        notificationEl.current!.classList.remove('is-active');
      }, 1000);
    }
  }

  return (
    <div className='copy-to-clipboard'>
      <CopyToClipboard text={props.text} onCopy={handleCopyEvent}>
        <button className='copy-to-clipboard__button'>
          Copy to clipboard
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
          >
            <path d='M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z' />
            <path d='M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z' />
          </svg>
        </button>
      </CopyToClipboard>

      <div
        className='copy-to-clipboard__notification'
        ref={notificationEl}
      ></div>
    </div>
  );
};

export default CopyToClipboardButton;

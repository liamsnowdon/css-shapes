import React from 'react';

import { Button } from '../Button/Button';

interface DownloadButtonProps {
  buttonText: string;
  content: string;
  filename: string;
  contentType: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = (props) => {
  function downloadToFile(
    content: string,
    filename: string,
    contentType: string
  ) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });

    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();

    URL.revokeObjectURL(a.href);
  }

  function handleClick() {
    downloadToFile(props.content, props.filename, props.contentType);
  }

  return (
    <Button
      className='w-100'
      text={`Download ${props.buttonText}`}
      onClick={handleClick}
    />
  );
};

export default DownloadButton;

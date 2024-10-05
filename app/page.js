'use client' // is needed only if you’re using React Server Components
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';

function App() {
  return (
    <div>
      <FileUploaderRegular
        className="file-uploader"
        sourceList="local, url, camera, dropbox"
        classNameUploader="uc-light"
        pubkey="380717480719a055776f"
      />
    </div>
  );
}

export default App;
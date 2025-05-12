'use client';
import UploadFormInput from './UploadFormInput'

const UploadForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

  }

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  )
}

export default UploadForm
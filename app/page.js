import { getAllPhotos } from '@/actions/UploadActions'
import PhotoList from '@/components/PhotoList';
import UploadForm from '@/components/UploadForm'
import React from 'react'

const Home = async () => {
  const photos= await getAllPhotos();
  console.log(photos)
  return (
    <div>
      <h1>Nextjs Server Actions Upload image files</h1>
      <UploadForm />
      <h1>Photos</h1>
      <PhotoList photos={photos || []}/>
    </div>
  )
}

export default Home
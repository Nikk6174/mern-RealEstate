import React from 'react'
import { useState } from 'react'

function CreateListing() {

  const [files, setFiles] = useState([])

  const handleImageSubmit = ()=>{
    if (files.length>0 && files.length<7){
      const promises = []

      for (let i=0; i<files.length; i++){
        promises.push(storeImage(files[i]))
      }
    }
  }

  const storeImage=async (file)=>{
    
  }

  console.log(files)

  return (
    <main className='p-3 max-w-4xl mx-auto'>
      {/* writing main makes it seo friendly */}
      <h1 className='text-3xl font-semibold text-center my-7'>
        Create Listing
      </h1>

      <form action="" className='flex flex-col sm:flex-row  gap-4 '>
        <div className="flex flex-col gap-4 flex-1">
          <input
            id='name'
            type="text"
            placeholder='name'
            className='border p-3 rounded-lg'
            maxLength='62'
            minLength='10'
            required />
          <textarea
            id='description'
            type="text"
            placeholder='description'
            className='border p-3 rounded-lg'
            required />
          <input
            id='address'
            type="text"
            placeholder='address'
            className='border p-3 rounded-lg'
            required />

          <div className='flex gap-6 flex-wrap'>
            <div className="flex gap-2">
              <input id='sale' type="checkbox" className='w-5' />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input id='rent' type="checkbox" className='w-5' />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input id='parking' type="checkbox" className='w-5' />
              <span>Parking Spot</span>
            </div>
            <div className="flex gap-2">
              <input id='Furnished' type="checkbox" className='w-5' />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input id='Offer' type="checkbox" className='w-5' />
              <span>Offer</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <input id='bedrooms' type="number" className='p-3 border border-gray-300 rounded-lg' min='1' max='10' required />
              <p>Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input id='bathrooms' type="number" className='p-3 border border-gray-300 rounded-lg' min='1' max='10' required />
              <p>Baths</p>
            </div>
            <div className="flex items-center gap-2">
              <input id='regularPrice' type="number" className='p-3 border border-gray-300 rounded-lg' min='1' max='10' required />
              <div className="flex flex-col items-center">
                <p>Regular price</p>
                <span className='text-xs'>($/month)</span>
              </div>
              
            </div>
            <div className="flex items-center gap-2">
              <input id='discountPrice' type="number" className='p-3 border border-gray-300 rounded-lg' min='1' max='10' required />
              <div className="flex flex-col items-center">
                <p>Discounted price</p>
                <span className='text-xs'>($/month)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <p className='font-semibold'>Images: 
            <span className='font-normal text-gray-700 ml-2 '> The first image will be the cover (max 6) </span>
          </p>

          <div className="flex gap-4">
            <input 
              onChange={(e) =>setFiles(e.target.files)} 
              className='p-3 border border-grey-300 rounded-lg w-full' 
              type="file" 
              id='images' 
              accept='image/*' 
              multiple />
            <button type='button' onClick={handleImageSubmit} className='p-3 text-green-700 rounded-lg border border-green-700 hover:shadow-lg disabled:opacity-80'>Upload</button>
          </div>

          <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Create Listing</button>
        </div>


      </form>
    </main>
  )
}

export default CreateListing
import React from 'react'
import AccessoryList from './(accessory)/AccessoryList'
import FishList from './(fish)/FishList'

function AquariumIdPage(props: any) {
  const params = props.params

  return (
    <div className='flex flex-col gap-4 p-5'>
      <h1 className='text-4xl text-slate-800'>
        Akcesoria
      </h1>
      <AccessoryList aquariumId={params.aquariumId}/>
      <h1 className='text-4xl text-slate-800'>
        Ryby
      </h1>
      <FishList aquariumId={params.aquariumId}/>
    </div>
  )
}

export default AquariumIdPage
import React from 'react'
import AccessoryList from './(accessory)/AccessoryList'
import FishList from './(fish)/FishList'
import Chart from './(charts)/Chart'
import { data } from './fakeData'

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
      <h1 className='text-4xl text-slate-800'>
        Statystyki
      </h1>
      <div className='flex flex-row flex-wrap gap-3 p-5 min-w-screen min-h-[30vh]'>
        <Chart data={data.data1}/>
        <Chart data={data.data2}/>
        <Chart data={data.data3}/>
      </div>
    </div>
  )
}

export default AquariumIdPage
'use client'

import React from 'react'
import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js"


function Chart(props: any) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Filler,
        Title,
        Tooltip,
        Legend,
        Filler
    )

  return (
    <div className='min-w-[500px] bg-slate-100 p-4 rounded-md'>
        <Line 
            data={props.data}
            width={100}
            height={40}
        />
    </div>
  )
}

export default Chart
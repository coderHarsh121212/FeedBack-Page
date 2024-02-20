import React from 'react'
import { data } from '../data/reviewsData'
import Particularcomponent from './Particularcomponent'

const ReviewHighlighter = () => {
  return (
    <div>
        <h1 className='text-2xl py-3 text-center font-serif'>React App for Review Sentiment Analysis</h1>
        <div className='flex flex-col gap-2 flex-wrap'>
        {data.map(e=><Particularcomponent key={e.date} indiData={e}/>)}
        </div>
    </div>
  )
}

export default ReviewHighlighter
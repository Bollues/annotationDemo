import { useState } from 'react';
import ReactList from 'react-list';
import caseData from '../../model/review/caseData.json';

const text = caseData['text']
const tags = caseData['event_extraction']

function Review() {
  const [cases, setCases] = useState(text)

  const renderItem = (idx: number) => (
    <div className="review-page-scrollable-list-item" key={idx}>
      {cases[idx]}
    </div>
  )

  return (
    <div className="review-page">
      <section className="review-page-scrollable-list">
        <ReactList 
          itemRenderer={renderItem}
          length={cases.length}
          type='uniform'
        />
      </section>
      <section className="review-page-details">

      </section>
    </div>
  )
}

export default Review;
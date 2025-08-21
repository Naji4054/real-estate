import React from 'react'

const LatestCards = (props) => {
    const NewProperties = props.data;
  return (
    <>
    <div >
            <div >
                <img  src={NewProperties.image} alt="image" />
            </div>
            <div>
                <h3 >{NewProperties.title}</h3>
            </div>

       </div>
    </>
  )
}

export default LatestCards

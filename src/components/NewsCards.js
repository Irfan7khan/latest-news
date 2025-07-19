import React from 'react'
import './NewsCards.css'

const NewsCards = ({ data }) => {
  console.log(data)
  const moreInfo = (url) => {
    window.open(url)
  }
  const newsinfo = (url) => {
    window.open(url)
  }
  return (
    <div className='cards-con'>
      {
        data.map((curItem, index) => {
          if (!curItem.urlToImage) {
            return null
          } else {
            
            return (
  
              <div key={index} className="card">
                <div className="image">
                  <img onClick={()=>newsinfo(curItem.url)} src={curItem.urlToImage} alt="" />
                </div>
                <div className="title">
                  <p onClick={()=>moreInfo(curItem.url)}>
                    {curItem.title}
                  </p>
                </div>
                <div className="content">
                  <p>
                    {curItem.content}
                  </p>
                  <button className='moreInfoBtn' onClick={() => moreInfo(curItem.url)}>Read More</button>
                </div>
              </div>
            )
          }
        })
      }
    </div>
  )
}


export default NewsCards


// {/* <div className='card-container'>
// <div className="img-container">

// <img src={curItem.urlToImage} alt="" />
// </div>
// <p>{curItem.content
// } </p>
// <p>{curItem.description

// } </p>
// </div> */}

import React, {useEffect, useState } from 'react'
import NewsCards from './NewsCards'
import './NewsApp.css'
const NewsApp = () => {
    const [inputSearch, setInputSearch] = useState("virat")
    const [newData, setNewData] = useState()
    let inputHandle = (e) => {
        setInputSearch(e.target.value)
    }
    let userInput = (e) => {
        setInputSearch(e.target.value)
    }
    let API_Key = "8add9426cf2b4c3b9262dc5897111559"
    
    
    const searchNews = async () => {
        try {
            
            let promice = await fetch(`https://newsapi.org/v2/everything?q=${inputSearch}&apiKey=${API_Key}`)
            console.log(promice)
            let responce = await promice.json()
            console.log(responce.articles)
            setNewData(responce.articles)
        } catch (error) {
            console.log("eror fetching news", error)
        }
        setInputSearch("")
    }
    useEffect(() => {
        searchNews();
      }, []);


    return (
        <div >
            <nav>
                <div>
                    <h1>Trendy News</h1>
                </div>
                <div className="search-bar">
                    <input className='searchinput' value={inputSearch} type="text" placeholder='SEARCH NEWS' onChange={inputHandle} />
                    <button  onClick={searchNews}>Search</button>
                </div>
            </nav>
         
            
            <div className="categoryBtn">
                <button onClick={userInput} value="Sports" >Sports</button>
                <button onClick={userInput }value="Politics" >Politics</button>
                <button onClick={userInput }value="Entertainment" >Entertainment</button>
                <button onClick={userInput} value="Healths">Healths</button>
                <button onClick={userInput } value="Fitness">Fitness</button>
            </div>
            <div>
                {newData ?<NewsCards data={newData} /> : null}
                 
            </div>
        </div>
    )
}

export default NewsApp

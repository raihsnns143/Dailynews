import NewsList from '@/components/news/NewsList'
import React from 'react'


const Newspage = () => {
    return (
        <div className='py-12'>
           <h2 className='text-2xl font-bold'>Latest News</h2>



           <NewsList></NewsList>
        </div>
    )
}

export default Newspage
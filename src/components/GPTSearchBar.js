import React from 'react'

const GPTSearchBar = () => {
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12 '>
                <input type='text'
                    className='p-4 m-4 col-span-10 rounded-lg'
                    placeholder='What would you like to watch today?'></input>
                <button className='m-4  col-span-2 bg-red-500 text-white rounded-lg'>Search</button>
            </form>
        </div>
    )
}

export default GPTSearchBar
import React from 'react'
import { useSelector } from 'react-redux'
import lang from './languageConstants'
// import { changeLanguage } from '../utils/configSlice'
const GPTSearchBar = () => {
    const languageSelected = useSelector((store) => store.config.lang)
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12 '>
                <input type='text'
                    className='p-4 m-4 col-span-10 rounded-lg'
                    placeholder={lang[languageSelected].GPTSearchPlaceHolder}></input>
                <button className='m-4  col-span-2 bg-red-500 text-white rounded-lg'>
                    {lang[languageSelected].search}</button>
            </form>
        </div>
    )
}

export default GPTSearchBar
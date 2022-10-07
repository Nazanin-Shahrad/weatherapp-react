import React from 'react'

const Weather = () => {
  return (
    <div className='WeatherApp-content'>
        <form>
            <div className='row'>
                <div className='col-9'>
                    <input 
                    type="search" 
                    className='form-control search-input'
                    placeholder='search city'
                    autoComplete='off'
                    />
                </div>
                <div className='col-3 p-0'>
                    <button
                    className='btn btn-sm btn-primary-outline search-city-button'
                    id="search-city-button"
                    type="submit"
                    >
                        <i className='fas fa-search'></i>
                    </button>
                </div>
            </div>
        </form>
       {/* weather information shown  in 2 different components 
        WeatherInfo components
        WeatherForcastPreview */}
        

    </div>
  )
}

export default Weather
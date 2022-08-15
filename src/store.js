import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getHomeDataReducer } from './Redux/home'
import { getOurWorkDataReducer } from './Redux/ourWork'
import { postContactDataReducer } from './Redux/contact'
import { getProgramsDataReducer } from './Redux/programs'
import { getServiceDataReducer } from './Redux/service'
import { getChartsDataReducer } from './Redux/charts'
import { postNewsLetterDataReducer } from './Redux/newsLetter'
import { getAboutDataReducer } from './Redux/history'
import { getSingleSuccessStoriesDataReducer, getSuccessStoriesDataReducer } from './Redux/succes_stories'
import { getNewsDataReducer, getSingleNewsDataReducer } from './Redux/newsPage'
import { getCountryDataReducer, getCountryUpdateDataReducer, getWWWDataReducer } from './Redux/whereWeWork'
import { getCovidDataReducer } from './Redux/covid'
import { getMentalHealthDataReducer } from './Redux/mentalHealth'
import { getAcademyDataReducer } from './Redux/academy'
import { getUdhiaDataReducer } from './Redux/udhia'
import { getGiftDataReducer, postCheckoutReducer, postMailReducer } from './Redux/gift'

const reducer = combineReducers({
    getHomeData: getHomeDataReducer,
    getOurWorkData: getOurWorkDataReducer,
    postContactData: postContactDataReducer,
    getProgramsData: getProgramsDataReducer,
    getServiceData: getServiceDataReducer,
    getChartsData: getChartsDataReducer,
    postNewsLetterData: postNewsLetterDataReducer,
    getAboutData: getAboutDataReducer,
    getSuccessStoriesData: getSuccessStoriesDataReducer,
    getSingleSuccessStoriesData: getSingleSuccessStoriesDataReducer,
    getNewsData: getNewsDataReducer,
    getSingleNewsData: getSingleNewsDataReducer,
    getWWWData: getWWWDataReducer,
    getCountryData: getCountryDataReducer,
    getCountryUpdateData: getCountryUpdateDataReducer,
    getCovidData: getCovidDataReducer,
    getMentalHealthData: getMentalHealthDataReducer,
    getAcademyData: getAcademyDataReducer,
    getUdhiaData: getUdhiaDataReducer,
    getGiftData: getGiftDataReducer,
    postCheckout: postCheckoutReducer,
    postMail: postMailReducer,
})

const initialState = {

}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
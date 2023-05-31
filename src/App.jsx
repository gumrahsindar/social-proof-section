import './App.css'
import starIcon from '/images/icon-star.svg'
import StarRating from './components/StarRating'
import Reviews from './components/Reviews'
import UserData from '../data/UserData'

function App() {
  return (
    <div className='container mx-auto mb-24 mt-20 max-w-[1440px] md:mt-28 md:-translate-x-16 '>
      <section
        id='header'
        className='mx-6 mb-12 flex flex-col items-center justify-center gap-10 text-center md:mx-40 md:flex-row md:items-start md:gap-32 md:text-left'
      >
        {/* Introducing */}
        <div className='mt-6 flex max-w-md flex-col '>
          <h1 className='mb-5 text-[40px] font-bold leading-8 tracking-tight text-veryDarkMagneta md:text-[56px] md:leading-[48px]'>
            10,000+ of our users love our products.
          </h1>
          <p className='text-[19px] font-medium leading-6 tracking-tight text-darkGrayishMagneta'>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        {/* Rates */}

        <ul className='mb-12 mt-8 w-full flex-col'>
          <StarRating
            starIcon={starIcon}
            reviewText='Reviews'
            translateX='md:translate-x-0'
          />
          <StarRating
            starIcon={starIcon}
            reviewText='Report Guru'
            translateX=' md:translate-x-[10%]'
          />
          <StarRating
            starIcon={starIcon}
            reviewText='BestTech'
            translateX=' md:translate-x-[20%]'
          />
        </ul>
      </section>
      <section
        id='card'
        className='mx-6 mb-12 flex flex-col items-center justify-center gap-4 text-center md:mx-40 md:mb-[4.5rem] md:w-10/12 md:flex-row md:items-start md:gap-8 md:text-left'
      >
        <Reviews userData={UserData} />
      </section>
    </div>
  )
}

export default App

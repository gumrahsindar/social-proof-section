import './App.css'
import starIcon from '../public/images/icon-star.svg'

function App() {
  return (
    <div className='container mx-auto mb-24 mt-20 max-w-7xl md:mt-28'>
      <section
        id='header'
        className='mx-6 flex flex-col items-center justify-center gap-10 text-center md:mx-40 md:flex-row md:items-start md:gap-32 md:text-left'
      >
        {/* Introducing */}
        <div className=''>
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
        <ul className=' mb-12 mt-8 w-full flex-col'>
          <li className='mb-4 flex w-full flex-col items-center space-y-4 rounded-md bg-lightGrayishMagneta px-16 py-4  md:flex-row md:gap-x-8 md:space-y-0 md:px-8'>
            <div className='flex gap-3 md:gap-2'>
              <img src={starIcon} alt='star icon' />
              <img src={starIcon} alt='star icon' />
              <img src={starIcon} alt='star icon' />
              <img src={starIcon} alt='star icon' />
              <img src={starIcon} alt='star icon' />
            </div>
            <p className='whitespace-nowrap text-[17px] font-bold text-veryDarkMagneta'>
              Rated 5 stars in Reviews
            </p>
          </li>
          <li className='mb-4 flex w-full flex-col items-center  space-y-4 rounded-md bg-lightGrayishMagneta px-16 py-4  md:translate-x-[10%] md:flex-row md:space-x-28 md:space-y-0 md:px-8'>
            <div className='flex gap-3 md:gap-2'>
              <img src={starIcon} alt='star icon' />
              <img src={starIcon} alt='star icon' />
              <img src={starIcon} alt='star icon' />
              <img src={starIcon} alt='star icon' />
              <img src={starIcon} alt='star icon' />
            </div>
            <p className='whitespace-nowrap text-[17px] font-bold text-veryDarkMagneta'>
              Rated 5 stars in Report Guru
            </p>
          </li>
          <li className='mb-4 flex w-full flex-col items-center space-y-4 rounded-md bg-lightGrayishMagneta px-16 py-4  md:translate-x-[20%] md:flex-row md:gap-x-8 md:space-y-0 md:px-8'>
            <div className='flex gap-3 md:gap-2'>
              <img src={starIcon} alt='star icon' />
              <img src={starIcon} alt='star icon' />
              <img src={starIcon} alt='star icon' />
              <img src={starIcon} alt='star icon' />
              <img src={starIcon} alt='star icon' />
            </div>
            <p className='whitespace-nowrap text-[17px] font-bold text-veryDarkMagneta'>
              Rated 5 stars in BestTech
            </p>
          </li>
        </ul>
      </section>
      <section id='card'></section>
    </div>
  )
}

export default App

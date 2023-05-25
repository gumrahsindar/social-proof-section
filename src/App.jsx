import './App.css'

function App() {
  return (
    <div className='container mx-auto mb-24 mt-20'>
      <section
        id='header'
        className='mx-6 flex flex-col items-center justify-center text-center md:flex-row'
      >
        {/* Introducing */}
        <div className='mb-10'>
          <h1 className='mb-5 text-[40px] font-bold leading-8 tracking-tight text-veryDarkMagneta'>
            10,000+ of our users love our products.
          </h1>
          <p className='text-[19px] font-medium leading-6 tracking-tight text-darkGrayishMagneta'>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        {/* Rates */}
        <div className=''>
          {/* Rate-1 */}
          <div></div>
        </div>
      </section>
      <section id='card'></section>
    </div>
  )
}

export default App

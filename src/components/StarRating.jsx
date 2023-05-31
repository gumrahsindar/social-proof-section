const StarRating = ({ starIcon, reviewText, translateX }) => {
  return (
    <li
      className={`mb-4 flex w-full flex-col items-center justify-start space-y-4 rounded-md bg-lightGrayishMagneta px-16 py-4 md:gap-10 md:space-y-0 md:px-8 xl:flex-row ${translateX} $`}
    >
      <div className='flex gap-3 md:gap-2'>
        <img src={starIcon} alt='star icon' />
        <img src={starIcon} alt='star icon' />
        <img src={starIcon} alt='star icon' />
        <img src={starIcon} alt='star icon' />
        <img src={starIcon} alt='star icon' />
      </div>
      <p className='whitespace-nowrap text-[17px] font-bold text-veryDarkMagneta'>
        Rated 5 stars in {reviewText}
      </p>
    </li>
  )
}
export default StarRating

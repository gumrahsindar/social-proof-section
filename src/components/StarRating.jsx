const StarRating = ({ starIcon, reviewText, translateX, spaceX }) => {
  return (
    <li
      className={`mb-4 flex w-full flex-col items-center space-y-4 rounded-md bg-lightGrayishMagneta px-16 py-4  md:flex-row md:gap-x-8 md:space-y-0 md:px-8 ${translateX} ${spaceX}`}
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

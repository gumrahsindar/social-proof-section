const Reviews = ({ userData }) => {
  return (
    <>
      {userData.map((user) => (
        <div
          key={user.id}
          style={{ transform: user.transform }}
          className='rounded-xl bg-veryDarkMagneta px-8 py-10 text-white last:mb-24'
        >
          <div className='justify-senter mb-6 flex items-center gap-6 md:mb-8'>
            <img src={user.src} alt='' className='w-12 rounded-full' />
            <div className='flex flex-col items-start'>
              <h3 className='text-[17px] font-bold'>{user.name}</h3>
              <h4 className='text-[17px] text-softPink'>{user.status}</h4>
            </div>
          </div>
          <p className='text-left text-[17px] font-medium leading-6 tracking-tight'>
            {user.text}
          </p>
        </div>
      ))}
    </>
  )
}
export default Reviews

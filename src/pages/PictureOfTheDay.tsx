
const PictureOfTheDay = () => {
  return (
    <main className="py-10 bg- h-screen bg-[url('/bg.png')]">
      <h1 className='text-white uppercase text-[26px] font-semibold text-center'>
        Picture of the day
      </h1>

      <div className="flex mt-5 justify-center">
        <div className="w-[500px] bg-white h-[500px]">
        </div>
      </div>
    </main>
  )
}

export default PictureOfTheDay
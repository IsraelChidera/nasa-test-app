import { PictureInterface } from '../../pages/PictureOfTheDay'

const PictureTemplate = ({hdurl, title, explanation, copyright}: PictureInterface) => {
    return (
        <div>
            <div className="flex mt-5 justify-center">
                <img src={hdurl} alt="picture of the day" className='sm:w-[500px]' />
            </div>

            <div className='bg-white rounded-md p-4 bg-opacity-[2%] text-white mt-6'>
                <h2 className='mb-1 text-center text-xl md:text-3xl'>
                    {title}
                </h2>

                <p className='text-center md:text-sm text-base'>
                    {explanation}
                </p>

                <p className='italic text-center mt-1 text-xs md:text-sm'>
                    {copyright}
                </p>
            </div>
        </div>
    )
}

export default PictureTemplate
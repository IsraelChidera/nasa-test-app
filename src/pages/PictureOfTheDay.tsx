/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from 'react-router-dom';
import Container from '../components/elements/Container';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PictureTemplate from '../components/widgets/PictureTemplate';

export interface PictureInterface {
  copyright?: string,
  date?: string,
  explanation?: string,
  hdurl?: string,
  media_type?: string,
  service_version?: string,
  title?: string,
  url?: string,
}

const PictureOfTheDay = () => {

  const [pictureOfTheDay, setPictureOfTheDay] = useState<PictureInterface | null>(null);
  const [errors, setErrors] = useState<string>("");
  const router = useNavigate();

  const key: string = "alWA8YEbi9gegtm5InjZOIaO59M51xwGPCjt90LP";

  const getPictureOfTheDay = async () => {
    try {
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}`);
      console.log("response", response?.data);
      setPictureOfTheDay(response?.data);

    } catch (e: unknown) {
      console.log("error: ", e);
      setErrors("An error occurred, please try again");
    }
  }

  useEffect(() => {
    getPictureOfTheDay();
  }, []);

  return (
    <main className=" relative bg-[#1A1C48] pt-10 pb-20 md:py-10 h-full bg-[url('/bg.png')]">
      <Container className='h-full '>
        <div className='text-white text-center'>
          <h1 className='text-white uppercase text-xl md:text-[26px] font-semibold'>
            Picture of the day
          </h1>
          <p className='text-xs'>{pictureOfTheDay?.date}</p>
        </div>

        <PictureTemplate
          hdurl={pictureOfTheDay?.hdurl}
          title={pictureOfTheDay?.title}
          explanation={pictureOfTheDay?.explanation}
          copyright={pictureOfTheDay?.copyright}
        />        

        <div className="shadow-2xl fixed md:absolute left-4 bottom-4 z-50">
          <div className='flex h-fit text-base md:text-sm'>
            <button className='bg-white text-[#1a1c48] rounded-l-md py-3 px-4'>
              Picture of the day
            </button>

            <button onClick={() => router(-1)} className='my-1 bg-transparent border border-white text-white rounded-r-md py-2.5 px-4'>
              Back
            </button>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default PictureOfTheDay
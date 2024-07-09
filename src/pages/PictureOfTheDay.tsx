/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from 'react-router-dom';
import Container from '../components/elements/Container';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PictureTemplate from '../components/widgets/PictureTemplate';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiCalendarEdit } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState<boolean>(false);
  const [selectedDateData, setSelectedDateData] = useState<PictureInterface | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const router = useNavigate();

  const key: string = "alWA8YEbi9gegtm5InjZOIaO59M51xwGPCjt90LP";

  const getPictureOfTheDay = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}`);
      console.log("response", response?.data);
      setPictureOfTheDay(response?.data);

    } catch (e: unknown) {
      console.log("error: ", e);
      setErrors("An error occurred");
    } finally {
      setLoading(false);
    }
  }

  const getPictureByDate = async (date: string) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${date}&end_date=${date}`);
      console.log("date response", response?.data[0]);
      setSelectedDateData(response?.data[0]); // Assuming the API returns an array
      setModalIsOpen(true);
    } catch (e: unknown) {
      console.log("error: ", e);
      setErrors("An error occurred while fetching the picture for the selected date");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPictureOfTheDay();
  }, []);

  return (
    <main className={`${loading ? "h-screen" : ""} ${!pictureOfTheDay ? "h-screen" : ""} relative bg-[#1A1C48] pt-10 pb-20 md:pt-10 lg:pb-20 xl:pb-40 h-full bg-[url('/bg.png')]`}>
      <Container className='h-full '>
        <div className='text-white text-center'>
          <h1 className='text-white uppercase text-xl md:text-[26px] font-semibold'>
            <span>Picture of the day</span>
          </h1>
          <div className='flex justify-center mt-2 space-x-2'>
            <p className='text-xs'>{pictureOfTheDay?.date}</p> <AiOutlineEdit className='cursor-pointer' onClick={() => setOpen(prev => !prev)} />
          </div>

          {
            open ?
              <div className='flex items-center justify-center'>
                <div className="relative mt-2 border w-fit rounded-lg text-[#d1d5db] bg-[#F9FAFB]">
                  <div className="text-sm pointer-events-none absolute inset-y-0 left-2 flex items-center pr-3">
                    <span className="text-gray-500 text-xl">
                      <BiCalendarEdit />
                    </span>
                  </div>

                  <DatePicker
                    placeholderText="Select date"
                    selected={selectedDate}
                    dateFormat="yyyy-MM-dd"
                    maxDate={new Date()}
                    className={`block w-full py-2 pl-10 pr-4 appearance-none bg-transparent border-0 border-transparent rounded-lg text-gray-900 ring-0 ring-inset ring-transparent focus:ring-0 focus:ring-inset focus:ring-transparent text-xs sm:leading-6 outline-none caret-gray-300`}
                    onChange={(date: any) => {
                      const formattedDate = date.toISOString().split('T')[0];
                      getPictureByDate(formattedDate);
                    }}
                  />
                </div>
              </div> : null
          }


        </div>

        {
          loading ?
            <div className='flex justify-center items-center h-full'>
              <p className='text-white text-center'>Loading . . .</p>
            </div> :
            !loading && !pictureOfTheDay ?
              <div className='flex justify-center items-center h-full'>
                <p className='text-white text-center'>
                  {errors}, <br />
                  <span onClick={() => router(0)} className='underline underline-offset-2 hover:no-underline'>
                    click here to reload
                  </span>
                </p>
              </div> :
              <PictureTemplate
                hdurl={pictureOfTheDay?.hdurl}
                title={pictureOfTheDay?.title}
                explanation={pictureOfTheDay?.explanation}
                copyright={pictureOfTheDay?.copyright}
              />
        }


        <div className="shadow-2xl fixed left-4 bottom-4 z-50">
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

      {
        modalIsOpen && <div className='p-6 absolute h-full top-0 left-0 z-50 w-full bg-gray-600'>
          <div className='flex justify-end'>
            <button 
              onClick={() => {
                setModalIsOpen(false);
                setOpen(false);
              }} 
              className='text-white py-2.5 px-4 rounded-lg bg-[#1A1C48] text-sm'
            >
              Close
            </button>
          </div>

          <div>
            <div className="flex mt-5 justify-center">
              <img src={selectedDateData?.hdurl} alt="picture of the day" className='sm:w-[300px] h-[300px] ' />
            </div>


            <div className='bg-white rounded-md p-4 bg-opacity-[2%] text-white mt-6'>
              <p className="text-center text-sm">APOD on this day - {pictureOfTheDay?.date} </p>
              <h2 className='mb-1 text-center text-xl md:text-3xl'>
                {selectedDateData?.title}
              </h2>

              <p className='text-center text-sm md:text-base'>
                {selectedDateData?.explanation}
              </p>

              <p className='italic text-center mt-1 text-xs md:text-sm'>
                {selectedDateData?.copyright}
              </p>
            </div>
          </div>          
        </div>
      }
    </main>
  )
}

export default PictureOfTheDay
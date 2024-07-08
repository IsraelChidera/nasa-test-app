import { Link } from 'react-router-dom';
import Button from '../elements/Button';
import Container from '../elements/Container';

const Navbar = () => {
    return (
        <nav className="pt-6 ">
            <Container>
                <div className="flex justify-between items-center">
                    <img src="/logo.png" alt="nasa logo" className='block w-[60px] lg:w-[90px]' />

                    <Link to="/picture-of-the-day">
                        <Button className='lg:text-base text-xs md:text-sm'>
                            Get APOD
                        </Button>
                    </Link>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar
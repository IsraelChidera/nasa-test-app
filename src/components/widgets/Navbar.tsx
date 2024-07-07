import Button from '../elements/Button';

const Navbar = () => {
    return (
        <nav className="h-[10vh] pt-6 ">
            <div className="flex justify-between items-center">
                <img src="/logo.png" alt="nasa logo" className='block w-[90px]' />

                <Button className="">
                    See more
                </Button>
            </div>
        </nav>
    )
}

export default Navbar
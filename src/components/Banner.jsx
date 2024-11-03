import iconRating from '../assets/rating.png';
import iconHalfRating from '../assets/rating-half.png';
import imgTemp from '../assets/temp-1.jpeg';
import iconPlay from '../assets/play-button.png';

function Banner() {
    return ( 
        <div className="w-full h-[600px] bg-banner bg-center bg-no-repeat bg-cover relative">
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30"/>
            <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
                <div className='flex flex-col space-y-5 ms-5 items-baseline w-[50%]'>
                    <p className="text-white bg-gradient-to-r from-red-600 to-red-100 py-1 px-3 text-lg">TV show</p>
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-white text-[40px] font-bold">Have a Crush on You</h2>
                        <div className="flex items-center space-x-3">
                            <img src={iconRating} className='w-8 h-8'/>
                            <img src={iconRating} className='w-8 h-8'/>
                            <img src={iconRating} className='w-8 h-8'/>
                            <img src={iconRating} className='w-8 h-8'/>
                            <img src={iconHalfRating} className='w-8 h-8'/>
                        </div>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi sunt aut maxime eius. Placeat eaque minus fugiat alias molestiae explicabo ullam, aperiam beatae, commodi deserunt ad laudantium, animi neque!
                        </p>
                        <div className='flex items-center space-x-4'>
                            <button className="p-3 text-white bg-black font-bold text-sm outline-none border-none px-5">Details</button>
                            <button className="p-3 text-white bg-red-500 font-bold text-sm outline-none border-none px-5">Watch</button>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] flex justify-center'>
                    <div className='w-[300px] h-[400px] relative group cursor-pointer'>
                        <img src={imgTemp} className="w-full h-full object-cover"/>

                        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center 
                        backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                            <img src={iconPlay} className='w-16 h-16' />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Banner;
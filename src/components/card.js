import Image from 'next/image';
const Card = ({ image, title, des }) => {

    return (

        <>

            <div className='w-[90%] md:w-[40%] lg:w-[25%]'>
                <Image unoptimized alt={title} height={400} width={400} className="mb-7 rounded-xl" src={image} />
                <div>
                    <h3 className="text-[#0A2025] dark:text-white text-2xl font-bold font-['Roboto']">{title}</h3>
                    <p className="mt-5 mb-8 text-[#0A2025] dark:text-white text-sm font-normal font-['Roboto']">{des}</p>
                    <button className="relative bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-6 py-2 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:bg-white/20 hover:shadow-xl hover:scale-105">
                        Buy Now
                    </button>

                </div>
            </div>
        </>
    )
}

export default Card;
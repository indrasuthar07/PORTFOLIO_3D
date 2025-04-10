import { SpacemanCanvas } from ".";
import Position from "./Position";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <div className='parallax__content absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-10'>
        <div className="flex-1 lg:mb-0">
          <h1 className="text-8xl font-extrabold text-gray-400 mask-t-from-80% flex items-center uppercase ml-4 mt-[-10px]">
          INDΛR 
          </h1>
          <h1 className="text-8xl font-extrabold text-gray-400 mask-t-from-80% flex items-center uppercase ml-14 mt-[-10px]">
          SƱTHΛR...
          </h1>
          <Position />
        </div>
        <div className="flex-1 flex justify-start lg:justify-end mt-4 sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0">
          <div className='font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] max-w-sm 2xl:max-w-lg text-gray-400 text-left'>
          ᴄᴏɴɴᴇᴄᴛɪɴɢ ᴅɪᴍᴇɴsɪᴏɴs ᴛʜʀᴏᴜɢʜ ᴄᴏᴅᴇ, ᴡʜᴇʀᴇ ɪᴅᴇᴀs ᴇᴠᴏʟᴠᴇ ɪɴᴛᴏ ɪɴᴛᴇʀᴀᴄᴛɪᴠᴇ ᴜɴɪᴠᴇʀsᴇs.😎
          </div>
        </div>
      </div>

      <img className="parallax__stars" src="./parallax/1Stars.svg" alt="" />
      <img className="parallax__planets" src="./parallax/2Planets.svg" alt="" />
      <img className="parallax__mountain1" src="./parallax/3Mountain.svg" alt="" />
      <img className="parallax__mountain2" src="./parallax/4Mountain.svg" alt="" />
      <img className="parallax__crater" src="./parallax/5Crater.svg" alt="" />
      <img className="parallax__sun" src="./parallax/6Sun.svg" alt="" />

      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>
  );
};

export default Hero;
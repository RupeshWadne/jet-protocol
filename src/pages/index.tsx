import { motion } from "framer-motion";
const src = [
  "./i1.png",
  "./i2.png",
  "./i3.png",
  "./i4.png",
  "./i5.png",
  "./i6.png",
  "./i7.png",
  "./i8.png",
  "./i9.png",
  "./i10.png",
  "./i11.png",
  "./i12.png",
]

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 2,
      staggerChildren: 0.5
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Home = () => {
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible" 
        className="flex font-Rampart flex-col justify-center items-center">
        <motion.div variants={item} className="absolute top-[23px] left-[calc(50%_-_521px)] rounded-[80px] box-border w-[1042px] flex flex-col items-center justify-center text-left text-base text-white border-[1px] border-solid border-gray-800">
          <div className="-z-10 self-stretch [backdrop-filter:blur(12px)] flex flex-row py-3 px-10 items-center justify-between">
            <img
              className="relative w-[119.14px] h-6 object-cover"
              alt=""
              src="/i15.png"
            />
            <div className="flex flex-row items-center justify-center gap-[40px]">
              <div className="relative lowercase">Products</div>
              <div className="relative lowercase">DAO</div>
              <div className="relative lowercase">Build</div>
              <div className="relative lowercase">Docs</div>
            </div>
            <div className="rounded-[80px] bg-emerald-600 shadow-[0px_-2px_2px_rgba(0,_0,_0,_0.48)_inset,_0px_2px_2px_rgba(255,_255,_255,_0.48)_inset] flex flex-row py-2 px-5 items-center justify-center text-center text-sm text-black border-[1px] border-solid border-gray-600">
              <div className="relative lowercase font-semibold">Launch App</div>
            </div>
          </div>
        </motion.div>
        <motion.img variants={item} src="/gradient.png" />
        <motion.div
        variants={item}
         className="absolute top-[245px] flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-start gap-[40px]">
            <div className="flex flex-col items-center justify-start gap-[20px]">
              <div className="flex flex-col items-center justify-start">
                <div  className="relative font-medium text-xs text-emerald-500">JET PROTOCOL</div>
                <div className="relative text-[29px] text-white inline-block w-[607px]">
                  <span className="leading-[126%] flex flex-col justify-center items-center">
                    <span className="font-medium text-[2.5rem] p-3">{`the next generation of `}</span>
                    <img src="defi.png" className="w-[75%]" alt="" />
                  </span>
                </div>
              </div>
              <div className="w-[80%] text-center relative text-xl text-gray-500">
                experience open source, transparent and efficient borrowing and
                lending on solana.
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[20px] text-sm text-black">
              <div className="rounded-[81px] bg-emerald-600 shadow-[0px_-2px_2px_rgba(0,_0,_0,_0.48)_inset,_0px_2px_2px_rgba(255,_255,_255,_0.48)_inset] flex flex-row py-2 px-5 items-center justify-center border-[1px] border-solid border-gray-600">
                <div className="relative lowercase font-semibold">Read Docs</div>
              </div>
              <div className="rounded-[81px] bg-black shadow-[0px_-2px_2px_rgba(0,_0,_0,_0.48)_inset,_0px_2px_2px_rgba(255,_255,_255,_0.48)_inset] [backdrop-filter:blur(12px)] flex flex-row py-2 px-5 items-center justify-center text-white border-[1px] border-solid border-gray-400">
                <div className="relative font-medium">how it works</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div variants={item} className="relative flex overflow-x-hidden m-5 w-[80%]">
          <div className="flex flex-row items-start justify-start gap-[24px] opacity-[0.6] py-12 animate-marquee whitespace-nowrap">
            {src.map((src) => {
              return (
                <img
                  key={src}
                  className="relative w-[104.4px] h-12 object-cover z-[0]"
                  alt=""
                  src={src}
                />
              )
            })}
          </div>
          <div className="absolute top-0 flex flex-row items-start justify-start gap-[24px] opacity-[0.6] py-12 animate-marquee2 whitespace-nowrap">
            {src.map((src) => {
              return (
                <img
                  key={src}
                  className="relative w-[104.4px] h-12 object-cover z-[0]"
                  alt=""
                  src={src}
                />
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;

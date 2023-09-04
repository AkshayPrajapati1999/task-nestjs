import Image from "next/image";

export default function Slider() {
  const loremIpsumText = "Lorem ipsum";
  const textElements = Array.from({ length: 7 }, (_, index) => (
    <span key={index} className="text-[1.2rem] font-bold mt-2 mx-4 uppercase">
      {loremIpsumText}
    </span>
  ));
  return (
    <>
      <article>
        <div className="overflow-hidden flex relative h-[50px] ">
          <Image
            src="/banner.png"
            alt="avtar"
            height="100"
            width="100"
            className="absolute w-full h-full top-0 left-0 right-0 bottom-0"
          />

          <div className="animate-marquee whitespace-nowrap text-white flex align-center">
            <span className="text-[1.2rem] font-bold mt-3 mx-4 uppercase">
              {textElements}
            </span>
          </div>

          <div className="animate-marquee whitespace-nowrap text-white flex align-center">
            <span className="text-[1.2rem] font-bold mt-3 mx-4 uppercase">
              {textElements}
            </span>
          </div>

          <div className="animate-marquee whitespace-nowrap text-white flex align-center">
            <span className="text-[1.2rem] font-bold mt-3 mx-4 uppercase">
              {textElements}
            </span>
          </div>
        </div>
      </article>
    </>
  );
}

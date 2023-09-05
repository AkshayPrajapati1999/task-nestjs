import Image from "next/image";
import Slider from "../shared/slider";
import AboutUs from "./components/AboutUs";

export default function Main() {
  return (
    <main>
      <section className="container mx-auto max-w-[1237px] px-5 pt-16">
        <article className="container mx-auto max-w-[1237px] lg:pt-16 sm:pt-0">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-[7.5rem] dark:text-white">
            LOREM IPSUM
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-10">
            <div className="md:my-0 my-8">
              <h1 className="font-bold text-[1.5rem] leading-[0.8rem] text-white text-[1.42rem] mb-3">
                DOLER SIT
              </h1>
              <p className="leading-8 text-[#FFFFFF] opacity-70">
                Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus
                sit. Neque venenatis mattis est nibh sed quis vel quis eu. In
                tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus
                convallis elementum. Suspendisse tincidunt congue sem turpis.
                Nulla eu lorem cras leo.
              </p>
              <div className="mt-5">
                <Image src="users-plus.svg" height="20" width="20" alt="avtar" />
              </div>
            </div>
            <div className="md:my-0 my-8">
              <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-white text-[1.42rem] mb-3 uppercase ">
                Lorem ipsum dolor sit
              </h1>
              <p className="leading-8 text-[#FFFFFF] opacity-70">
                Dolor adipiscing condimentum aliquam nullam mauris ante ipsum
                vel nisl. Dignissim molestie amet purus felis egestas amet eget.
                Viverra malesuada ultricies nunc vel diam posuere mauris sociis
                maecenas. Aenean dui et nec ultrices libero lacus.
              </p>
              <div className="mt-5">
                <Image src="server-01.svg" height="20" width="20" alt="avtar" />
              </div>
            </div>
            <div className="md:my-0 my-8">
              <Image src="avatar.svg" height="450" width="450" alt="avtar" />
              <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-white text-[1.42rem] mb-3 uppercase lg:mt-10 max-sm:mt-16">
                Lorem ipsum dolor sit
              </h1>
              <p className="leading-8 text-[#FFFFFF] opacity-70">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
              <div className="mt-5">
                <Image src="Icon.svg" height="20" width="20" alt="avtar" />
              </div>
            </div>
          </div>
        </article>

        <article className="text-white pt-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-10">
            <div className="md:my-0 my-8">
              <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-[1.42rem] mb-3 uppercase">
                Lorem ipsum
              </h1>
              <p className="leading-8 text-[#FFFFFF] opacity-70">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
              <div className="mt-5">
                <Image src="Icon (2).svg" height="20" width="20" alt="avtar" />
              </div>
            </div>
            <div className="md:my-0 my-8">
              <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-[1.42rem] mb-3 uppercase">
                dolor sit amet
              </h1>
              <p className="leading-8 text-[#FFFFFF] opacity-70">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
              <div className="mt-5">
                <Image src="Icon (1).svg" height="20" width="20" alt="avtar" />
              </div>
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-10">
            <div></div>
            <div>
              <Image src="Frame.svg" height="450" width="450" alt="avtar" />
            </div>
            <div className="max-sm:my-32 max-sm:my-10">
              <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-[1.42rem] mb-3 uppercase">
                Lorem ipsum dolor
              </h1>
              <p className="leading-8 text-[#FFFFFF] opacity-70">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
              <div className="mt-5">
                <Image src="cube-01.svg" height="20" width="20" alt="avtar" />
              </div>
            </div>
          </div>
        </article>

        <AboutUs />
      </section>

      <Slider />

      <section
        className="container mx-auto max-w-[1237px] px-5 pt-16"
        id="dolor"
      >
        <article className="container mx-auto max-w-[1237px] pt-16">
          <h1 className="lg:mb-24 sm:mb-5 text-4xl font-bold text-white md:text-5xl lg:text-8xl dark:text-white uppercase md:w-9/12 xs:w-full">
            lorem ipsum dolor set
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-10">
            <div className="md:my-0 my-8">
              <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-white text-[1.42rem] mb-3 uppercase">
                Lorem ipsum dolor
              </h1>
              <p className="leading-8 text-[#FFFFFF] opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="mt-5">
                <Image src="shield.svg" height="20" width="20" alt="avtar" />
              </div>
            </div>
            <div className="md:my-0 my-8">
              <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-white text-[1.42rem] mb-3 uppercase">
                dolor sit amet
              </h1>
              <p className="leading-8 text-[#FFFFFF] opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="mt-5">
                <Image src="dataflow.svg" height="20" width="20" alt="avtar" />
              </div>
            </div>
            <div></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-16">
            <div></div>
            <div>
              <Image
                src="smiling-man.svg"
                height="450"
                width="450"
                alt="avtar"
              />
            </div>
            <div>
              <h1 className="max-sm:mt-10 font-bold text-[1.5rem] leading-[0.75rem] text-white text-[1.42rem] mb-3 uppercase">
                Lorem ipsum
              </h1>
              <p className="leading-7 text-[#FFFFFF] opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="mt-5">
                <Image src="pipes.svg" height="20" width="20" alt="avtar" />
              </div>
            </div>
          </div>
        </article>

        <article className="pt-20 lg:mt-[15rem] md:mt-[5rem]">
          <h1 className="text-4xl max-sm:mb-16 font-extrabold tracking-wider leading-none md:text-5xl lg:text-[5.9rem] text-white uppercase">
            lorem ipsum dolor
          </h1>
        </article>
      </section>
    </main>
  );
}

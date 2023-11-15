import { IoMdStar } from "react-icons/io";

const Reviews = () => {
  return (
    <section className="py-5 md:py-10 lg:py-20 bg-cyan-50/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font font-bold text-center mb-10">
          Good Reviews By Customers
        </h2>
        <p className="w-6/12 mx-auto text-center mb-10">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 place-content-center ">
          {/* Review Item */}
          <div className="p-5 rounded-md border min-w-[350px]">
            <p className="font-bold text-xl">"The best useful website"</p>
            <p className="text-md text-gray-500 my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
            <div className="flex items-center">
              <div className=" h-20 w-20 border rounded-full border-gray-200 flex items-center justify-center">
                <img
                  src="https://themezhub.net/jobstock-landing-2.2/jobstock/assets/img/team-1.jpg"
                  className="h-16 w-16 rounded-full"
                  alt=""
                />
              </div>
              <div className="ml-5">
                <p className="font-bold text-lg mb-0">Lucia E. Nugent</p>
                <small className="text-cyan-600 my-0">CEO of Climber</small>
                <div className="flex items-center">
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                </div>
              </div>
            </div>
          </div>
          {/* Review Item */}
          <div className="p-5 rounded-md border min-w-[350px]">
            <p className="font-bold text-xl">
              "Very developer friendly website"
            </p>
            <p className="text-md text-gray-500 my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
            <div className="flex items-center">
              <div className=" h-20 w-20 border rounded-full border-gray-200 flex items-center justify-center">
                <img
                  src="https://themezhub.net/jobstock-landing-2.2/jobstock/assets/img/team-2.jpg"
                  className="h-16 w-16 rounded-full"
                  alt=""
                />
              </div>
              <div className="ml-5">
                <p className="font-bold text-lg mb-0">Hilda A. Sheppard</p>
                <small className="text-cyan-600 my-0">CEO of Doodle</small>
                <div className="flex items-center">
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                </div>
              </div>
            </div>
          </div>
          {/* Review Item */}
          <div className="p-5 rounded-md border min-w-[350px]">
            <p className="font-bold text-xl">"Ranking is the #1"</p>
            <p className="text-md text-gray-500 my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
            <div className="flex items-center">
              <div className=" h-20 w-20 border rounded-full border-gray-200 flex items-center justify-center">
                <img
                  src="https://themezhub.net/jobstock-landing-2.2/jobstock/assets/img/team-3.jpg"
                  className="h-16 w-16 rounded-full"
                  alt=""
                />
              </div>
              <div className="ml-5">
                <p className="font-bold text-lg mb-0">Brenda R. Smith</p>
                <small className="text-cyan-600 my-0">
                  Founder of Yeloower
                </small>
                <div className="flex items-center">
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                </div>
              </div>
            </div>
          </div>
          {/* Review Item */}
          <div className="p-5 rounded-md border min-w-[350px]">
            <p className="font-bold text-xl">"The website is eco friendly"</p>
            <p className="text-md text-gray-500 my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
            <div className="flex items-center">
              <div className=" h-20 w-20 border rounded-full border-gray-200 flex items-center justify-center">
                <img
                  src="https://themezhub.net/jobstock-landing-2.2/jobstock/assets/img/team-4.jpg"
                  className="h-16 w-16 rounded-full"
                  alt=""
                />
              </div>
              <div className="ml-5">
                <p className="font-bold text-lg mb-0">Brian B. Wilkerson</p>
                <small className="text-cyan-600 my-0">CEO of Mark Soft</small>
                <div className="flex items-center">
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                </div>
              </div>
            </div>
          </div>
          {/* Review Item */}
          <div className="p-5 rounded-md border min-w-[350px]">
            <p className="font-bold text-xl">"100% save and secure website"</p>
            <p className="text-md text-gray-500 my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
            <div className="flex items-center">
              <div className=" h-20 w-20 border rounded-full border-gray-200 flex items-center justify-center">
                <img
                  src="https://themezhub.net/jobstock-landing-2.2/jobstock/assets/img/team-5.jpg"
                  className="h-16 w-16 rounded-full"
                  alt=""
                />
              </div>
              <div className="ml-5">
                <p className="font-bold text-lg mb-0">Miguel L. Benbow</p>
                <small className="text-cyan-600 my-0">
                  Founder of Mitche LTD
                </small>
                <div className="flex items-center">
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                  <IoMdStar className="text-[#FF8B00] text-md" />
                </div>
              </div>
            </div>
          </div>
          {/* Review Item */}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  return (
    <section className="py-5 md:py-10 lg:py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font font-bold text-center mb-5">
          Explore our Prices
        </h2>
        <p className="w-6/12 mx-auto text-center mb-5">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10 my-10">
          <div className="p-10 rounded-md border">
            <p className="text-xl font-semibold">Free</p>
            <p className="text-lg">
              <span className="text-6xl font-bold">0</span>
              $/month
            </p>
            <div className="my-10">
              <p className="flex items-center text-xl mb-2">
                <FaCheckCircle className="text-cyan-600 mr-2" />3 Job Posting
              </p>
              <p className="flex items-center text-xl mb-2">
                <FaCheckCircle className="text-cyan-600 mr-2" />2 Featured jobs
              </p>
              <p className="flex items-center text-xl mb-2">
                <FaCheckCircle className="text-cyan-600 mr-2" />
                Job Post For 30 Days
              </p>
              <p className="flex items-center text-xl mb-2">
                <FaCheckCircle className="text-cyan-600 mr-2" />
                Lifetime Support
              </p>
            </div>
            <button className="text-center bg-cyan-600 text-white w-full py-3 rounded-md">
              Get Started
            </button>
          </div>
          <div className="p-10 rounded-md border bg-cyan-600 text-white">
            <p className="text-xl font-semibold ">Free</p>
            <p className="text-lg">
              <span className="text-6xl font-bold">50</span>
              $/month
            </p>
            <div className="my-10">
              <p className="flex items-center text-xl mb-2">
                <FaCheckCircle className="text-gray-900 mr-2" />
                10 Job Posting
              </p>
              <p className="flex items-center text-xl mb-2">
                <FaCheckCircle className="text-gray-900 mr-2" />
                10 Featured jobs
              </p>
              <p className="flex items-center text-xl mb-2">
                <FaCheckCircle className="text-gray-900 mr-2" />
                Job Post For 60 Days
              </p>
              <p className="flex items-center text-xl mb-2">
                <FaCheckCircle className="text-gray-900 mr-2" />
                Lifetime Support
              </p>
            </div>
            <button className="text-center bg-gray-600 text-white w-full py-3 rounded-md">
              Get Started
            </button>
          </div>
          <div className="p-10 rounded-md border">
            <p className="text-xl font-semibold">Extended</p>
            <p className="text-lg">
              <span className="text-6xl font-bold">120</span>
              $/month
            </p>
            <div className="my-10">
              <p className="flex items-center text-xl mb-2">
                <FaCheckCircle className="text-cyan-600 mr-2" />
                20 Job Posting
              </p>
              <p className="flex items-center text-xl mb-2">
                <FaCheckCircle className="text-cyan-600 mr-2" />
                25 Featured jobs
              </p>
              <p className="flex items-center text-xl mb-2">
                <FaCheckCircle className="text-cyan-600 mr-2" />
                Job Post For 90 Days
              </p>
              <p className="flex items-center text-xl mb-2">
                <FaCheckCircle className="text-cyan-600 mr-2" />
                Lifetime Support
              </p>
            </div>
            <button className="text-center bg-cyan-600 text-white w-full py-3 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import {
  FaFileInvoice,
  FaCaravan,
  FaChalkboard,
  FaUserGraduate,
  FaBriefcaseMedical,
  FaHamburger,
  FaFighterJet,
  FaMobile,
} from "react-icons/fa";
import Category from "../../Shared/Category/Category";

const categories = [
  {
    id: 1,
    icon: <FaFileInvoice className="w-40 h-16 text-cyan-600" />,
    title: "Accounting & Finance",
    availableJobs: 58,
  },
  {
    id: 2,
    icon: <FaCaravan className="w-40 h-16 text-cyan-600" />,
    title: "Automotive Jobs",
    availableJobs: 122,
  },
  {
    id: 9,
    icon: <FaChalkboard className="w-40 h-16 text-cyan-600" />,
    title: "Business & Tech",
    availableJobs: 95,
  },
  {
    id: 4,
    icon: <FaUserGraduate className="w-40 h-16 text-cyan-600" />,
    title: "Education Training",
    availableJobs: 23,
  },
  {
    id: 5,
    icon: <FaBriefcaseMedical className="w-40 h-16 text-cyan-600" />,
    title: "Healthcare",
    availableJobs: 78,
  },
  {
    id: 6,
    icon: <FaHamburger className="w-40 h-16 text-cyan-600" />,
    title: "Restaurant & Food",
    availableJobs: 211,
  },
  {
    id: 7,
    icon: <FaFighterJet className="w-40 h-16 text-cyan-600" />,
    title: "Transportation",
    availableJobs: 15,
  },
  {
    id: 8,
    icon: <FaMobile className="w-40 h-16 text-cyan-600" />,
    title: "Telecommunications",
    availableJobs: 56,
  },
];

const FeaturedCategories = () => {
  return (
    <section className="container mx-auto my-5 md:my-10 lg:my-20">
      <h2 className="text-4xl font font-bold text-center mb-10">
        Featured Categories
      </h2>
      <div className="grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;

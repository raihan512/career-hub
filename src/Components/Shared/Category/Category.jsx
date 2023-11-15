const Category = ({ category }) => {
  const { icon, title, availableJobs } = category;
  return (
    <div className="shadow-xl p-2 rounded-md flex flex-col items-center border hover:border-cyan-600">
      <div className="my-10">{icon}</div>
      <p className="text-xl mb-10 bg-gray-200 inline-block py-1 px-4 rounded-full">
        {title}
      </p>
    </div>
  );
};

export default Category;

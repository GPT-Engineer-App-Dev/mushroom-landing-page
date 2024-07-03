const Types = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center">Types of Mushrooms</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
          <p className="mt-4 text-lg font-semibold">Type 1</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
          <p className="mt-4 text-lg font-semibold">Type 2</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
          <p className="mt-4 text-lg font-semibold">Type 3</p>
        </div>
      </div>
    </div>
  );
};

export default Types;
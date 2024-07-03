import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Discover the World of Mushrooms</h1>
          <p className="mt-4 text-xl">Explore the fascinating world of fungi</p>
          <Button variant="primary" className="mt-8">Learn More</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">About Mushrooms</h2>
        <div className="mt-8 flex flex-col md:flex-row items-center">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[300px] md:w-1/2" />
          <p className="mt-4 md:mt-0 md:ml-8 text-lg">
            Mushrooms are a type of fungi that come in a wide variety of shapes, sizes, and colors. They can be found in many different environments and have been used for centuries for their culinary and medicinal properties.
          </p>
        </div>
      </section>

      {/* Types Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Types of Mushrooms</h2>
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
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Health Benefits</h2>
        <ul className="mt-8 list-disc list-inside text-lg">
          <li>Rich in nutrients</li>
          <li>Boosts immune system</li>
          <li>Contains antioxidants</li>
          <li>Supports heart health</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
        <form className="mt-8 max-w-lg mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <input type="text" id="name" className="w-full mt-2 p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">Email</label>
            <input type="email" id="email" className="w-full mt-2 p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">Message</label>
            <textarea id="message" className="w-full mt-2 p-2 border rounded" rows="4"></textarea>
          </div>
          <Button variant="primary" type="submit">Send Message</Button>
        </form>
      </section>
    </div>
  );
};

export default Index;
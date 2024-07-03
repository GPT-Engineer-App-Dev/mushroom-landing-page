import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center">Get in Touch</h1>
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
    </div>
  );
};

export default Contact;
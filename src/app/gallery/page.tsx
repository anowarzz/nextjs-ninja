import nextImg from "@/assets/nextjs.png";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="container flex flex-col gap-10 justify-center items-center mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold text-center mb-8">
        Welcome to Gallery component
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="gallery-item bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg"
            alt="Next.js Gallery Image"
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold mb-2">Next.js Image</h4>
            <p className="text-gray-600">A beautiful image using img tag</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="gallery-item bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <Image
            src="https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg"
            alt="Next.js Gallery Image"
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold mb-2">Next.js Image</h4>
            <p className="text-gray-600">
              A beautiful image using Next.js Image component
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="gallery-item bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <Image
            src={nextImg}
            alt="Next.js Gallery Image"
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold mb-2">Next.js Image</h4>
            <p className="text-gray-600">A beautiful Next image from local</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="gallery-item bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <Image
            src="/nextjs.png"
            alt="Next.js Gallery Image"
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold mb-2">Next.js Image</h4>
            <p className="text-gray-600">
              A beautiful Next image from public folder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

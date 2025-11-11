import Image from "next/image";
import BlogStories from "../components/blogs";

const KashmirSection = () => {
  const posts = new Array(5).fill({
    title: "Why You Should Visit Kashmir?",
    content: `Your journey to Kashmir is incomplete without experiencing Srinagar, the summer capital. Take a relaxing Shikara ride on Dal Lake, stay in a traditional houseboat, and shop for exquisite Pashmina shawls at Lal Chowk. Don’t forget to visit Mughal Gardens like Shalimar Bagh and Nishat Bagh, where history and nature blend beautifully.`,
    mustDo:
      "Try the authentic Kashmiri Wazwan cuisine, especially Rogan Josh and Yakhni!",
  });

  return (
    <section className="w-full">
      {/* HERO SECTION */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] flex items-center justify-start">
        <Image
          src="/assets/hero.jpg" // replace with your image
          alt="Kashmir Group Tour"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent"></div>

        <div className="relative z-10 max-w-4xl md:mt-32 px-5 sm:px-10 lg:px-20">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Kashmir – Where Every View <br className="hidden sm:block" />
            <span className="text-white">Feels Like a Dream</span>
          </h1>
          <p className="text-gray-200 text-sm sm:text-base lg:text-lg max-w-xl">
            Boost team bonding, reward top performers, and explore world-class
            destinations — all planned seamlessly by MICA.
          </p>
        </div>
      </div>

      {/* ARTICLE SECTION */}
      <div className="max-container w-full bg-white py-16 px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[4.2fr_1fr] gap-8 lg:gap-12">
          {/* Article Content - Left Column */}
          <div className="text-gray-800">
            {posts.map((post, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-heading mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3 text-[15px] sm:text-[16px]">
                  {post.content}
                </p>
                <p className="font-semibold text-[15px] sm:text-[16px]">
                  <span className="text-gray-900">Must-Do:</span> {post.mustDo}
                </p>
              </div>
            ))}
          </div>

          {/* Posted Info Card - Right Column */}
          <div className="lg:order-last order-first">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm text-sm text-gray-800 w-full max-w-60 lg:sticky lg:top-8">
              <p className="mb-2">
                <span className="font-semibold">Posted On:</span> 23 Nov, 2025
              </p>
              <p>
                <span className="font-semibold">Posted By:</span> Trip-Zee
              </p>
            </div>
          </div>
        </div>
      </div>

      <BlogStories />
    </section>
  );
};

export default KashmirSection;

import Image from "next/image"
import Link from "next/link"

import featuredProject1 from "@/assets/featured_project1.jpg"
import featuredProject2 from "@/assets/featured_project2.jpg"
import featuredProject3 from "@/assets/featured_project3.jpg"
import featuredProject4 from "@/assets/featured_project4.jpg"
import featuredProject5 from "@/assets/featured_project5.jpg"
import featuredProject6 from "@/assets/featured_project6.jpg"
import featuredProject7 from "@/assets/featured_project7.jpg"
import featuredProject8 from "@/assets/featured_project8.jpg"
import featuredProject9 from "@/assets/featured_project9.jpg"
import featuredProject10 from "@/assets/featured_project10.jpg"

export function Projects() {
  return (
    <section className="w-full">
      <main className="container mx-auto px-4 md:px-6 py-8">
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-4">Top Construction Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Image
                alt="Top Construction Project Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={featuredProject1}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2">High-rise Residential Complex</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the high-rise residential complex project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700" href="#">
                Read More
              </Link>
            </div>
          </div>
        </section>
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-4">Residential Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <Image
                alt="Luxury Villa Construction Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={featuredProject2}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Luxury Villa Construction</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the luxury villa construction project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
            <div>
              <Image
                alt="Affordable Housing Project Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={featuredProject3}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Affordable Housing Project</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the affordable housing project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
            <div>
              <Image
                alt="Modern Apartment Complex Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={featuredProject4}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Modern Apartment Complex</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the modern apartment complex project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
          </div>
        </section>
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-4">Commercial Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <Image
                alt="Shopping Mall Construction Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={featuredProject5}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Shopping Mall Construction</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the shopping mall construction project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
            <div>
              <Image
                alt="Office Building Construction Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={featuredProject6}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Office Building Construction</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the office building construction project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
            <div>
              <Image
                alt="Hotel Construction Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={featuredProject7}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Hotel Construction</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the hotel construction project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
          </div>
        </section>
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-4">Infrastructure Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <Image
                alt="Bridge Construction Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={featuredProject8}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Bridge Construction</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the bridge construction project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
            <div>
              <Image
                alt="Road Expansion Project Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={featuredProject9}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Road Expansion Project</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the road expansion project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
            <div>
              <Image
                alt="Airport Construction Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={featuredProject10}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Airport Construction</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the airport construction project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
          </div>
        </section>
      </main>
    </section>
  )
}

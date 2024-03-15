import Link from "next/link"

export function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Learn more about the team behind the platform.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="mx-auto w-full max-w-2xl space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We believe in the power of the web to connect people and ideas. Our mission is to make the web more
                  accessible, performant, and secure for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="mx-auto w-full max-w-2xl space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We&apos;re guided by a set of core values that inform everything we do. Transparency. Collaboration.
                  Empathy. Inclusivity. Continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="mx-auto w-full max-w-2xl space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet the Team</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We&apos;re a diverse team of engineers, designers, and advocates who are passionate about the web.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-5xl grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col gap-1">
                <img
                  alt="Avatar"
                  className="mx-auto aspect-square rounded-full overflow-hidden object-cover object-center"
                  height="500"
                  src="/placeholder.svg"
                  width="500"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold">Sarah Dayan</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">VP of Web3</p>
                </div>
                <p className="text-sm text-gray-500 md:text-base/relaxed lg:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
                  Sarah is a developer advocate with a focus on Web3. She&apos;s passionate about making the web more open,
                  secure, and decentralized.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <img
                  alt="Avatar"
                  className="mx-auto aspect-square rounded-full overflow-hidden object-cover object-center"
                  height="500"
                  src="/placeholder.svg"
                  width="500"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold">Tim Neutkens</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Co-Founder</p>
                </div>
                <p className="text-sm text-gray-500 md:text-base/relaxed lg:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
                  Tim is the co-creator of Next.js and the co-founder of Vercel. He&apos;s on a mission to make building web
                  applications as seamless as possible.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="mx-auto w-full max-w-2xl space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join the Team</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We&apos;re always looking for talented and passionate individuals to join our team. Check out our careers
                  page for current openings.
                </p>
              </div>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View Openings
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
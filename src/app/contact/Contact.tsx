import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface IconProps {
  className?: string;
}

export function Contact() {
  return (
    <div className="py-12 lg:py-24 xl:py-32">
      <div className="container grid max-w-2xl px-4 gap-8 sm:gap-12 md:px-6 lg:max-w-3xl xl:max-w-4xl items-center space-y-4">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email2">Email</Label>
              <Input id="email2" placeholder="Enter your email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message2">Message</Label>
            <Textarea className="min-h-[150px]" id="message2" placeholder="Enter your message" />
          </div>
          <Button>Send message</Button>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Connect with us</h3>
          <div className="grid grid-cols-3 items-center gap-4 text-center">
            <Link className="flex flex-col gap-1.5 text-sm opacity-60 hover:opacity-100" href="#">
              <StarIcon className="mx-auto w-6 h-6" />
              <span className="sr-only">Facebook</span>
              Facebook
            </Link>
            <Link className="flex flex-col gap-1.5 text-sm opacity-60 hover:opacity-100" href="#">
              <StarIcon className="mx-auto w-6 h-6" />
              <span className="sr-only">Instagram</span>
              Instagram
            </Link>
            <Link className="flex flex-col gap-1.5 text-sm opacity-60 hover:opacity-100" href="#">
              <StarIcon className="mx-auto w-6 h-6" />
              <span className="sr-only">Twitter</span>
              Twitter
            </Link>
            <Link className="flex flex-col gap-1.5 text-sm opacity-60 hover:opacity-100" href="#">
              <StarIcon className="mx-auto w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
              LinkedIn
            </Link>
            <Link className="flex flex-col gap-1.5 text-sm opacity-60 hover:opacity-100" href="#">
              <StarIcon className="mx-auto w-6 h-6" />
              <span className="sr-only">YouTube</span>
              YouTube
            </Link>
            <Link className="flex flex-col gap-1.5 text-sm opacity-60 hover:opacity-100" href="#">
              <StarIcon className="mx-auto w-6 h-6" />
              <span className="sr-only">TikTok</span>
              TikTok
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


function StarIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

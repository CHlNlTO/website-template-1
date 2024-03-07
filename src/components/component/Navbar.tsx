import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Facebook, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

interface IconProps {
  className?: string;
}

export function Navbar() {
  return (
    <header>
      <section className="px-4 lg:px-6 h-5 flex items-center justify-end gap-5 lg:gap-10 bg-gray-100 dark:bg-gray-800">
        <div className="flex items-center justify-end gap-1">
          <Mail className="h-3 w-3"></Mail>
          <p className="text-[10px] lg:text-[12px] font-medium hover:underline underline-offset-4">
            inquiries@business.name
          </p>
        </div>
        <div className="flex items-center justify-end gap-1">
          <Phone className="h-3 w-3 fill-white"></Phone>
          <p className="text-[8px] lg:text-[12px] font-medium hover:underline underline-offset-4">
            123-456-7890
          </p>
        </div>
        <div className="flex items-center justify-end gap-5">
          <Link href="https://facebook.com" target="_blank" passHref>
            <FaFacebookF className="h-3 w-3" />
          </Link>
          <Link href="https://instagram.com" target="_blank" passHref>
            <FaInstagram className="h-3 w-3" />
          </Link>
          <Link href="https://tiktok.com" target="_blank" passHref>
            <FaTiktok className="h-3 w-3" />
          </Link>
        </div>
      </section>
      <section className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="text-sm font-extrabold flex items-center justify-center gap-4" href="/">
            <MountainIcon className="h-6 w-6" />
            <span className="hidden sm:block">Business Name</span>
            <span className="sr-only ">Construction Inc</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/services">
              Services
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Projects
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Contact
            </Link>
          </nav>
        </section>
    </header>
  )
}

function MountainIcon(props: IconProps) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
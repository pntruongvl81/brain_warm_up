import Image from "next/image";
import Link from "next/link"; // Import Link component

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image

          src="/logo_company.png"
          alt="Company logo"
          width={360}
          height={76}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            We're dedicated to building outstanding brain-training games.
          </li>
          <li className="tracking-[-.01em]">
            We constantly seek and act on player feedback <br /> to make sure our games are the best they can be.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              //className="dark:invert"
              src="/fa.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Games
          </a>
          {/* Đã thay đổi thẻ <a> thành Link component */}
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/privacy-policy" // Đường dẫn đến trang policy.tsx
          // Không cần target="_blank" và rel="noopener noreferrer" vì đây là link nội bộ
          >
            Privacy Policy
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.facebook.com/BrainGameEvolution/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/facebook.svg"
            alt="Facebook icon"
            width={16}
            height={16}
          />
          Fanpage
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:pntruongvl81@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/gmail.svg"
            alt="Gmail icon"
            width={16}
            height={16}
          />
          Email
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://play.google.com/store/apps/details?id=com.brainwarmup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/google-play.svg"
            alt="Google Play icon"
            width={16}
            height={16}
          />
          Download Game →
        </a>
      </footer>
    </div>
  );
}
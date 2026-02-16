import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10">

        {/* Headline */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Rachel Hutter, PE, CSP
          </h1>
          <p className="mt-2 text-xl md:text-2xl text-gray-700">
            Keynote Speaker
          </p>
        </div>

        {/* Main Panorama Image */}
        <Image
          src="/Hutter SWE Keynote Pano.jpg"
          alt="Hutter SWE keynote panorama"
          width={2000}
          height={600}
          priority
          className="h-auto w-full rounded-lg object-cover"
        />

        {/* Grid of Two Images */}
        <div className="grid gap-6 md:grid-cols-2">
          <Image
            src="/Hutter SWE Keynote Landscape.jpg"
            alt="Hutter SWE keynote landscape"
            width={1200}
            height={800}
            className="h-auto w-full rounded-lg object-cover"
          />
          <Image
            src="/Hutter SWE Keynote crowd.jpg"
            alt="Hutter SWE keynote crowd"
            width={1200}
            height={800}
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>

        {/* Survey Link */}
        <div className="mt-10 text-center">
          <Link
            href="/survey"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Take the Leadership Preference Survey
          </Link>
        </div>
      </main>
    </div>
  );
}

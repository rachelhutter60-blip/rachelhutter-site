import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10">
        <Image
          src="/Hutter SWE Keynote Pano.jpg"
          alt="Hutter SWE keynote panorama"
          width={2000}
          height={600}
          priority
          className="h-auto w-full rounded-lg object-cover"
        />
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
      </main>
    </div>
  );
}

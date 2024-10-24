import Link from "next/link";

export default function Home() {
  return (
    <section className="flex  items-center justify-around  flex-col px-2  h-[75vh] ">
      <img  className="w-60 " src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Cloud%20Study%20Jam%20-%20Icon_YMgJgrk.png" />

      <div className="flex md:flex-row flex-col gap-2 w-full md:w-auto">
        <Link href="/Syllabus" className="p-5 border  rounded-md w-full  font-semibold text-center border-blue-700 hover:bg-blue-600 transition-all delay-75 shadow-md md:w-96  text-white bg-blue-500" >Syllabus</Link>
        <Link href="/" className="p-5 border  rounded-md w-full  font-semibold text-center border-blue-700 hover:bg-blue-600 transition-all delay-75 shadow-md md:w-96  text-white bg-blue-500" >Resources</Link>
      </div>
    </section>
  );
}

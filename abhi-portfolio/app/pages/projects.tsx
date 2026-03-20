import Link from "next/link";

function Project() {
  return (
    <div className="w-full bg-black p-10">
      <h1 className="text-center text-6xl">Projects</h1>
      <div className="flex gap-10 p-10">
        <div className="w-1/2 border p-4 rounded-2xl border-white">
          <h1 className="text-2xl">
            Vortex – Developer Networking & Collaboration Platform
          </h1>
          <p className="p-2">
            Vortex is a scalable, full-stack social platform designed
            specifically for developers to connect, collaborate, and showcase
            their work. It enables users to build rich professional profiles
            integrated with GitHub, discover personalized content feeds, and
            participate in collaborative project spaces.
          </p>
          <Link
            href={"https://github.com/AbhilashReddy1519/vortex"}
            target="_blank"
            rel="noopener"
          >
            <button className="w-full border rounded cursor-pointer mt-2 py-2 text-xl hover:bg-white hover:text-black">
              View
            </button>
          </Link>
        </div>
        <div className="w-1/2 border border-white p-4 rounded-2xl">
          <h1 className="text-2xl">
            Fylo – Location-Based Event Organizer Platform
          </h1>
          <p className="p-2">
            Fylo is a full-stack event management platform that allows users to
            discover and participate in events based on their real-time
            geographic location. It focuses on hyper-local visibility, ensuring
            users only see relevant nearby events, improving engagement and
            usability.
          </p>
          <Link
            href={
              "https://github.com/AbhilashReddy1519/fylo-an-event-ai-organiser"
            }
            target="_blank"
            rel="noopener"
          >
            <button className="w-full border rounded cursor-pointer mt-2 py-2 text-xl hover:bg-white hover:text-black">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
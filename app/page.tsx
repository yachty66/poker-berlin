import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";
import image1 from "../public/image1.jpeg";
import image2 from "../public/image2.jpeg";
import image3 from "../public/image3.jpeg";
import fs from "fs";
import path from "path";

// Helper function to get past events from filesystem
function getPastEvents() {
  const eventsDir = path.join(process.cwd(), "public", "past-events");

  try {
    const eventFolders = fs.readdirSync(eventsDir);

    const events = eventFolders
      .filter((folder) => {
        const folderPath = path.join(eventsDir, folder);
        return fs.statSync(folderPath).isDirectory();
      })
      .map((folder) => {
        const folderPath = path.join(eventsDir, folder);
        const photos = fs
          .readdirSync(folderPath)
          .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
          .map((photo) => `/past-events/${folder}/${photo}`);

        // Parse date from folder name (format: DD-MM-YYYY)
        const [day, month, year] = folder.split("-");
        const date = new Date(
          parseInt(year),
          parseInt(month) - 1,
          parseInt(day)
        );

        return {
          folder,
          date: date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          photos,
          sortDate: date,
        };
      })
      .sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime()); // Sort by date descending

    return events;
  } catch (error) {
    console.error("Error reading past events:", error);
    return [];
  }
}

export default function Home() {
  const pastEvents = getPastEvents();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/pokermain.mov"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Berlin Poker Nights
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join Berlin's exclusive poker community. €50 buy-in. Great company.
            Professional atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-lg py-6 px-8">
              <Link href="#join">Join Our Community</Link>
            </Button>
            <Button
              variant="outline"
              className="text-lg py-6 px-8 bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="#past-events">View Past Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="relative py-24 bg-gradient-to-b from-black via-zinc-900 to-zinc-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Main heading with glow effect */}
            <div className="text-center mb-12">
              <div className="inline-block relative mb-6">
                <div className="absolute inset-0 bg-red-600 blur-2xl opacity-50"></div>
                <h2 className="text-4xl md:text-6xl font-bold text-white relative leading-tight">
                  Berlin's Poker Community
                  <br />
                  <span className="text-red-500">for Tech Professionals</span>
                </h2>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                A community of startup founders, VCs, and engineers who share a
                passion for poker. Games are scheduled organically through
                WhatsApp—bringing together like-minded professionals for cash
                games in a relaxed, competitive atmosphere.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-8 hover:border-red-600 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                    <Users className="h-7 w-7 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Tech Community
                  </h3>
                  <p className="text-gray-400">
                    Founders, VCs & Engineers building the future
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-8 hover:border-red-600 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                    <Calendar className="h-7 w-7 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Flexible Schedule
                  </h3>
                  <p className="text-gray-400">
                    Organized organically via WhatsApp group
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-8 hover:border-red-600 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                    <MapPin className="h-7 w-7 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Cash Games
                  </h3>
                  <p className="text-gray-400">
                    Real money poker in the heart of Berlin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section
        id="past-events"
        className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              Past Events
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Relive the excitement from our previous poker nights
            </p>
          </div>

          <div className="space-y-16">
            {pastEvents.length > 0 ? (
              pastEvents.map((event, i) => (
                <div key={i} className="group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent flex-1"></div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-red-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white relative px-8 py-3 bg-zinc-800 rounded-full border-2 border-red-600">
                        {event.date}
                      </h3>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent flex-1"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {event.photos.map((photo, j) => (
                      <div
                        key={j}
                        className="group/photo relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300"></div>
                        <Image
                          src={photo}
                          alt={`Past event ${event.date} photo ${j + 1}`}
                          fill
                          className="object-cover group-hover/photo:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover/photo:translate-y-0 transition-transform duration-300">
                          <div className="flex items-center gap-2 text-white">
                            <Calendar className="h-5 w-5" />
                            <span className="font-semibold">{event.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-400 py-12">
                <p className="text-xl">No past events found.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; 2025 PokerBerlin.club. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

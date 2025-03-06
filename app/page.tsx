import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Trophy, Users } from "lucide-react";
import Image from "next/image";
import image1 from "../public/image1.jpeg";
import image2 from "../public/image2.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-zinc-900 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">PokerGermany.de</span>
          </div>
          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#about" className="hover:text-red-500 transition-colors">
              About
            </a>
            <a href="#events" className="hover:text-red-500 transition-colors">
              Events
            </a>
            <a href="#prizes" className="hover:text-red-500 transition-colors">
              Prizes
            </a>
            <a href="#gallery" className="hover:text-red-500 transition-colors">
              Gallery
            </a>
            <a href="#join" className="hover:text-red-500 transition-colors">
              Join Us
            </a>
          </nav>
          <Button className="bg-red-600 hover:bg-red-700">
            <Link href="#join">Join Now</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Berlin Poker Nights
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join Berlin's exclusive poker community every Wednesday. €50 buy-in.
            Great company. Professional atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-lg py-6 px-8">
              <Link href="#join">Join Our Community</Link>
            </Button>
            <Button
              variant="outline"
              className="text-lg py-6 px-8 bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="#events">View Schedule</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            About Our Poker Nights
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                We are a group of poker enthusiasts who meet every Wednesday in
                Berlin for exciting poker nights. Our community especially
                welcomes founders and professionals looking to network while
                enjoying a competitive game of poker.
              </p>
              <p className="text-lg mb-6">
                With a €50 buy-in, our games offer both an exciting challenge
                and worthwhile prizes. The environment is friendly yet
                competitive, perfect for both serious players and those looking
                to improve their skills.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-red-600" />
                  <span>Every Wednesday</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-red-600" />
                  <span>8:00 PM - 10:30 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-red-600" />
                  <span>Berlin</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-red-600" />
                  <span>Founders Welcome</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={image1}
                alt="Berlin Poker Night"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Upcoming Poker Nights
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">
                        Wednesday Poker Night
                      </h3>
                      <p className="text-gray-600">
                        {new Date(
                          Date.now() + i * 7 * 24 * 60 * 60 * 1000
                        ).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                      €50 Buy-in
                    </span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <span>8:00 PM - 10:30 PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-gray-400" />
                      <span>Berlin</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-gray-400" />
                      <span>Limited Seats Available</span>
                    </div>
                  </div>
                  <Button className="w-full bg-zinc-800 hover:bg-zinc-900">
                    RSVP via WhatsApp
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prize Distribution */}
      <section id="prizes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Prize Distribution
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Card className="w-full md:w-[300px] p-8 text-center relative overflow-hidden border-0 shadow-lg">
              <div className="absolute top-0 left-0 w-full h-2 bg-yellow-500"></div>
              <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">1st Place</h3>
              <p className="text-5xl font-bold text-yellow-500 mb-4">60%</p>
              <p className="text-gray-600">of the prize pool</p>
            </Card>

            <Card className="w-full md:w-[300px] p-8 text-center relative overflow-hidden border-0 shadow-lg">
              <div className="absolute top-0 left-0 w-full h-2 bg-gray-400"></div>
              <Trophy className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">2nd Place</h3>
              <p className="text-5xl font-bold text-gray-400 mb-4">30%</p>
              <p className="text-gray-600">of the prize pool</p>
            </Card>

            <Card className="w-full md:w-[300px] p-8 text-center relative overflow-hidden border-0 shadow-lg">
              <div className="absolute top-0 left-0 w-full h-2 bg-amber-700"></div>
              <Trophy className="h-16 w-16 text-amber-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">3rd Place</h3>
              <p className="text-5xl font-bold text-amber-700 mb-4">10%</p>
              <p className="text-gray-600">of the prize pool</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
              <Image
                src={image1}
                alt="Poker table with players"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
              <Image
                src={image2}
                alt="Poker night selfie"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Poker chips"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 bg-zinc-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Join Our Poker Community
            </h2>
            <p className="text-xl mb-8">
              Ready to join our weekly poker nights? Connect with us through
              WhatsApp to get all the details and secure your spot.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-xl py-6 px-8 rounded-lg">
              <a
                href="https://chat.whatsapp.com/HDUmzt4hPCMF0sxgMkLsW2"
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Join WhatsApp Group
              </a>
            </Button>
            <p className="mt-6 text-gray-400">
              By joining, you confirm that you are 18+ and agree to our
              community guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What skill level is required to join?",
                a: "All skill levels are welcome! Our community includes both beginners and experienced players.",
              },
              {
                q: "Is the €50 buy-in mandatory?",
                a: "Yes, the standard buy-in for our regular Wednesday games is €50.",
              },
              {
                q: "How many players typically attend?",
                a: "We usually have between 8-12 players each week.",
              },
              {
                q: "Can I join if I'm not a founder?",
                a: "While we especially welcome founders, our community is open to all poker enthusiasts.",
              },
              {
                q: "How do I find the location?",
                a: "The exact location details are shared in our WhatsApp group after you join.",
              },
            ].map((faq, i) => (
              <Card key={i} className="p-6">
                <h3 className="text-xl font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">PokerGermany.de</h3>
              <p className="text-gray-400">Berlin's Premier Poker Community</p>
            </div>
            <nav className="flex flex-wrap gap-8 justify-center mb-6 md:mb-0">
              <a href="#about" className="hover:text-red-500 transition-colors">
                About
              </a>
              <a
                href="#events"
                className="hover:text-red-500 transition-colors"
              >
                Events
              </a>
              <a
                href="#prizes"
                className="hover:text-red-500 transition-colors"
              >
                Prizes
              </a>
              <a
                href="#gallery"
                className="hover:text-red-500 transition-colors"
              >
                Gallery
              </a>
              <a href="#join" className="hover:text-red-500 transition-colors">
                Join Us
              </a>
            </nav>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white text-white hover:bg-white/10"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} PokerGermany.de. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Briefcase,
  Building2,
  ChevronRight,
  Compass,
  ExternalLink,
  HeartHandshake,
  Landmark,
  LifeBuoy,
  Scale,
  Users,
} from "lucide-react";

// Images
import heroBg from "@/public/assets/headerImage.jpg";
import activitiesImage from "@/public/assets/gallery2.jpg";
import president from "@/public/assets/ivy.jpeg";
import vice from "@/public/assets/ben.jpeg";
import financialSecretary from "@/public/assets/bene.jpg";
import welfare from "@/public/assets/sam.jpg";
import poo from "@/public/assets/salomey.jpeg";
import genSec from "@/public/assets/christabel.jpg";
import viceSec from "@/public/assets/maggie.jpg";
import crIt from "@/public/assets/profilePic.jpg";

const team = [
  {
    id: 1,
    name: "Ivy Osae",
    role: "President",
    image: president,
    intro:
      "I'm Ivy. I love to cook, enjoy the simplicity of life, and believe in respect for each other. I love nature and an occasional glass (bottle) of wine.",
  },
  {
    id: 2,
    name: "Benjamin Abbam-baiden",
    role: "Vice President",
    image: vice,
    intro:
      "You can call me Benny. I work at Wise, and I enjoy watching football and playing FIFA on the weekends.",
  },
  {
    id: 3,
    name: "Benedicta Allala",
    role: "Financial Secretary",
    image: financialSecretary,
    intro:
      "I am Benedicta, passionate about organization, finance, and helping the Association achieve its goals.",
  },
  {
    id: 4,
    name: "Samuel Amankwa",
    role: "Welfare Officer",
    image: welfare,
    intro:
      "I love nature and sports, and I ensure the welfare of all members is prioritized.",
  },
  {
    id: 5,
    name: "Salomey Amponsah",
    role: "Public and Organizing Officer",
    image: poo,
    intro:
      "I am Salomey Pomaa Amponsah, a due diligence agent at Wise, a lover of music and chocolates.",
  },
  {
    id: 6,
    name: "Crystabel Esi-Annoa Kelly-Bissue",
    role: "General Secretary",
    image: genSec,
    intro:
      "I am Crystabel, dedicated to communication and ensuring smooth operations within the Association.",
  },
  {
    id: 7,
    name: "Margaret Menorkpor",
    role: "Vice General Secretary",
    image: viceSec,
    intro:
      "My name is Margaret, well known as Mamaga Elorm. I'm a beacon of positivity, resilience, determination, and courage.",
  },
  {
    id: 8,
    name: "William Gyamfi Kumi",
    role: "Coordinator, Research and IT",
    image: crIt,
    intro:
      "I coordinate research and IT initiatives, supporting the Association through technology and innovation.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "About us",
  description:
    "About the Association of Ghanaians in Estonia (Eesti Ghanalaste Ühing MTÜ): our aims, activities and executive team.",
  path: "/about",
});

const heroFacts = ["Formed 2017", "Registered 2020", "Non-profit · Non-partisan"];

const principles = [
  {
    icon: HeartHandshake,
    title: "Non-profit",
    text: "We exist to serve our members, not to make a profit.",
  },
  {
    icon: Landmark,
    title: "Non-governmental",
    text: "Independent of any government or state body.",
  },
  {
    icon: Scale,
    title: "Non-partisan",
    text: "Not affiliated with any political party.",
  },
];

const aims = [
  {
    icon: Users,
    title: "Unity",
    text: "Bring together and foster friendly relationships among all Ghanaians resident in Estonia.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    text: "Assist members of the Association in times of difficulties.",
  },
  {
    icon: Compass,
    title: "Integration",
    text: "Create awareness among Ghanaians regarding cultural and socio-economic situations in Estonia to facilitate integration.",
  },
  {
    icon: Building2,
    title: "Representation",
    text: "Serve as the official body liaising between Ghanaians in Estonia and the Government of Ghana, Ghana Embassy, other consulates, and institutions.",
  },
  {
    icon: Briefcase,
    title: "Collaboration",
    text: "Form expert groups and leverage business cooperation and entrepreneurial initiatives to enhance Estonia-Ghana collaborations.",
  },
];

const activities = [
  {
    title: "Building community",
    text: "Organise Ghanaians resident in Estonia to foster friendly relations among them and with Estonian society.",
  },
  {
    title: "Meetings & workshops",
    text: "Organise meetings, workshops, seminars, and conferences supporting the objectives of the Association.",
  },
  {
    title: "Cultural events",
    text: "Organise events, exhibitions, and activities promoting cultural and socio-economic cohesion.",
  },
  {
    title: "Research & development",
    text: "Engage in research, scientific work, and development projects through business cooperation and entrepreneurial initiatives.",
  },
  {
    title: "And more",
    text: "Engage in other lawful activities aligned with the objectives of the Association.",
  },
];

const registration = [
  { label: "Formed", value: "September 2017" },
  { label: "Registered", value: "12 September 2020" },
  {
    label: "Legal basis",
    value: "Non-Profit Associations Act of Estonia (1996)",
  },
  { label: "Registration code", value: "80585799" },
];

const AboutPage = () => {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gray-900 text-white">
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="-z-20 object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24 xl:px-6 py-16 sm:py-20 md:py-28 lg:py-32">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-gray-300">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight size={14} />
              </li>
              <li aria-current="page" className="text-white">
                About us
              </li>
            </ol>
          </nav>

          <div className="mt-8 max-w-3xl">
            {/* Ghana flag stripe */}
            <div className="flex items-center gap-3">
              <span className="flex h-1.5 w-12 shrink-0 overflow-hidden rounded-full" aria-hidden="true">
                <span className="flex-1 bg-red-600" />
                <span className="flex-1 bg-yellow-400" />
                <span className="flex-1 bg-green-600" />
              </span>
              <p lang="et" className="text-sm font-semibold tracking-wide text-gray-200">
                Eesti Ghanalaste Ühing MTÜ
              </p>
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              About <span className="text-yellow-300">Us</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">
              We are an association of Ghanaians living in Estonia, officially
              Eesti Ghanalaste Ühing (The Estonian Ghanaian Association MTÜ).
            </p>

            <ul className="mt-8 flex flex-wrap gap-2 sm:gap-3">
              {heroFacts.map((fact) => (
                <li
                  key={fact}
                  className="rounded-full border border-white/30 bg-black/30 px-4 py-1.5 text-sm font-medium text-white"
                >
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5 lg:gap-16 lg:items-start">
          {/* Principles */}
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
              Who we are
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">
              What Makes Us <span className="text-green-700">Different</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl">
              The Association is non-profit, non-governmental and
              non-partisan — an independent community organisation run for the
              benefit of Ghanaians in Estonia.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {principles.map(({ icon: Icon, title, text }) => (
                <li
                  key={title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-5 sm:p-6"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-green-700 text-white">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Official registration */}
          <aside
            aria-labelledby="registration-heading"
            className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-700">
                <BadgeCheck size={22} aria-hidden="true" />
              </span>
              <h3 id="registration-heading" className="text-lg font-semibold text-gray-900">
                Official registration
              </h3>
            </div>

            <dl className="mt-6 divide-y divide-gray-100">
              {registration.map(({ label, value }) => (
                <div key={label} className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[9rem_1fr] sm:gap-4">
                  <dt className="text-sm text-gray-500">{label}</dt>
                  <dd className="font-medium text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>

            <a
              href="https://ariregister.rik.ee/eng/company/80585799"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-green-700 transition hover:text-green-800 hover:underline"
            >
              View in the Estonian e-Business Register
              <ExternalLink size={14} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </aside>
        </div>
      </section>

      {/* Aims and Objectives */}
      <section className="bg-gray-50 py-16 md:py-20 px-6 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {/* Heading fills the first grid cell on desktop (5 aims + heading = 3×2). */}
          <div className="sm:col-span-2 lg:col-span-1 lg:pr-6 lg:self-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
              Our purpose
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">
              Aims and <span className="text-green-700">Objectives</span>
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              What the Association works towards for Ghanaians in Estonia.
            </p>
          </div>

          {/* role="list": `display: contents` drops list semantics in some browsers. */}
          <ol role="list" className="contents">
            {aims.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className={`flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm ${
                  i === aims.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-green-50 text-green-700">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-gray-300" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Our Activities */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Heading + photo (sticks while the list scrolls on desktop) */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
              What we do
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">
              Our <span className="text-green-700">Activities</span>
            </h2>
            <p className="mt-4 max-w-xl text-gray-600 leading-relaxed">
              How we put our aims into practice throughout the year.
            </p>
            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src={activitiesImage}
                alt="Children in kente and colourful outfits performing a cultural dance at a community event"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                placeholder="blur"
                className="object-cover object-[center_55%]"
              />
            </div>
          </div>

          {/* Activities list */}
          <ol className="divide-y divide-gray-100 lg:pt-2">
            {activities.map(({ title, text }, i) => (
              <li key={title} className="flex gap-5 py-6 first:pt-0 last:pb-0 sm:gap-6">
                <span
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-green-700 text-lg font-bold text-green-700"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1 text-gray-600 leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Executive Team */}
      <section className="bg-gray-50 py-16 md:py-20 px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
              Leadership
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">
              Meet Our <span className="text-green-700">Executive Team</span>
            </h2>
            <p className="mt-4 max-w-2xl text-gray-600 leading-relaxed">
              The people who lead the Association and keep our community
              running.
            </p>
          </div>

          {/* Phones: compact horizontal cards. sm+: portrait photo cards. */}
          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {team.map((member) => (
              <li
                key={member.id}
                className="flex overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:shadow-md sm:flex-col"
              >
                <div className="relative min-h-[8.75rem] w-28 shrink-0 self-stretch bg-gray-100 sm:aspect-[4/5] sm:min-h-0 sm:w-full sm:self-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 112px"
                    placeholder="blur"
                    className="object-cover object-[center_30%]"
                  />
                </div>
                <div className="flex-1 p-4 sm:p-5">
                  <h3 className="font-semibold text-gray-900 leading-snug">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-green-700">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {member.intro}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

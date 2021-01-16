import Head from 'next/head'
import Image from 'next/image'
import { Chrono } from 'react-chrono'

import StarshipCard from 'components/StarshipCard'
import SuperHeavyCard from 'components/SuperHeavyCard'

export default function Home() {
  return (
    <div >
      <Head>
        <title>SpaceX Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container flex flex-col lg:m-auto lg:max-w-5xl">
        {/* Header */}
        <div className="flex flex-row p-2 bg-black text-white">
          <Image src="/images/spacex-logo.svg" width="107" height="40" />
          <h1 className="flex-grow font-spacex font-5xl font-medium uppercase justify-center m-auto">
            SpaceX Tracker
          </h1>
        </div>

        {/* Starship */}
        <div className="flex flex-row flex-nowrap overflow-auto">
          {/* Card */}
          <StarshipCard name="SN9" events={["cryo_proof", "static_fire", "static_fire", "static_fire"]} />
          <StarshipCard name="SN10" />
          <StarshipCard name="SN11" />
          <StarshipCard name="SN11" />
          <StarshipCard name="SN11" />
          <StarshipCard name="SN11" />
        </div>
        {/* Super Heavy */}
        <div className="flex flex-row flex-nowrap overflow-auto">
          {/* Card */}
          <SuperHeavyCard name="SH1" />
          <SuperHeavyCard name="SH2" />
          <SuperHeavyCard name="SH3" />
          <SuperHeavyCard name="SH4" />
          <SuperHeavyCard name="SH5" />
          <SuperHeavyCard name="SH6" />
        </div>
        {/* Event Timeline */}
        <div className="flex flex-row flex-nowrap overflow-auto lg:w-96">
          <Chrono
            items={[
              {
                title: "SN9",
                cardTitle: "Raptor Swap",
                cardSubtitle: "Damage was incurred by the static fire test requiring a replacement of SN44"
              }
            ]}
            mode="VERTICAL"
          />
        </div>

        <footer >
          Oh hey. @stgids
      </footer>
      </main>
    </div>
  )
}

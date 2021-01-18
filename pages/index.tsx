import { Chrono } from 'react-chrono'

import Layout from 'components/Layout'
import StarshipCard from 'components/StarshipCard'
import SuperHeavyCard from 'components/SuperHeavyCard'


export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col flex-nowrap overflow-auto">
        <h2 className="text-xl font-spacex font-uppercase">
          Starship
          </h2>
        <div className="flex-grow bg-starship-blue-300 h-1 w-40">
          {' '}
        </div>
        <div className="flex flex-row flex-nowrap">
          {/* Card */}
          <StarshipCard name="SN9" events={["cryo_proof", "static_fire", "static_fire", "static_fire"]} />
          <StarshipCard name="SN10" />
          <StarshipCard name="SN11" />
          <StarshipCard name="SN11" />
          <StarshipCard name="SN11" />
          <StarshipCard name="SN11" />
        </div>
      </div>
      {/* Super Heavy */}
      <div className="flex flex-col flex-nowrap overflow-auto">
        <h2 className="text-xl font-spacex font-uppercase">
          Super Heavy
          </h2>
        <div className="flex-grow bg-superheavy-red-300 h-1 w-40">
          {' '}
        </div>
        <div className="flex flex-row flex-nowrap overflow-auto">
          {/* Card */}
          <SuperHeavyCard name="SH1" />
        </div>
      </div>
      {/* Event Timeline */}
      <div className="flex flex-col flex-nowrap overflow-auto lg:w-96">
        <h2 className="text-xl font-spacex font-uppercase">
          Timeline
          </h2>
        <div className="flex-grow bg-blue-300 h-1 w-40">
          {' '}
        </div>
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
    </Layout>
  )
}

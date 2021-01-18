import Link from 'next/link'
import Image from 'next/image'

interface StarshipCardInput {
  name: String;
  events?: Array<String>;
}

export default function StarshipCard({ name, events }: StarshipCardInput) {
  let displayEvents: String = "";

  (events || []).forEach(e => {
    switch (e) {
      case 'rud':
        displayEvents = displayEvents.concat('💥');
        break;
      case 'cryo_proof':
        displayEvents = displayEvents.concat('❄️');
        break;
      case 'static_fire':
        displayEvents = displayEvents.concat('🔥');
        break;
      case 'launch':
        displayEvents = displayEvents.concat('🚀');
        break;
      default:
        break;
    }
  });

  return (
    <Link href={`/ship/${name.toLowerCase()}`}>
      <a>
        <div className="flex flex-col flex-nowrap w-24 m-2">
          <div className="w-24 ">
            <Image src="/images/sn9.jpg" width="215" height="420" />
          </div>
          <h2 className="font-spacex font-lg font-bold text-center">
            {name}
          </h2>
          <div className="w-24">
            {displayEvents}
          </div>
        </div>
      </a>
    </Link>
  )
}
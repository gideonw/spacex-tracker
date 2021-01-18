import Image from 'next/image'

interface SuperHeavyCardInput {
  name: String;
  events?: Array<String>;
}

export default function SuperHeavyCard({ name, events }: SuperHeavyCardInput) {
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
    <div className="flex flex-col flex-nowrap w-24 m-2">
      <div className="w-24 ">
        <Image src="/images/sh1.png" width="150" height="565" />
      </div>
      <h2 className="font-spacex font-lg font-bold text-center">
        {name}
      </h2>
      <div className="w-24">
        {displayEvents}
      </div>
    </div>
  )
}
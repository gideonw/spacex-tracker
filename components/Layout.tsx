import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Layout({ children, title }) {
  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>SpaceX Tracker{title === '' ? '' : ` - ${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <nav className="flex flex-row flex-grow w-full p-2 bg-black text-white">
        <Image src="/images/spacex-logo.svg" width="107" height="40" />
        <h1 className="flex-grow font-spacex text-3xl font-medium uppercase justify-center m-auto">
          <Link href="/">
            <a>
              SpaceX Tracker
            </a>
          </Link>
        </h1>
      </nav>
      <main className="container flex flex-col lg:m-auto lg:max-w-5xl lg:ml-2 flex-grow">
        {children}
      </main>
      <footer >
        Oh hey. @stgids
      </footer>
    </div>
  )
}
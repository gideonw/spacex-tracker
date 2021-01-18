import Image from 'next/image'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

import { getAllStarshipNames, getStarshipData, StarshipModel } from 'lib/starship'
import Layout from 'components/Layout'

type Context = GetStaticPropsContext<{ name: string }>

export default function StarshipDetails({ data }) {
  const renderData: StarshipModel = data
  const notes = data.notes.map(e => {
    return (
      <li>
        {e}
      </li>
    )
  })

  return (
    <Layout
      title={`Starship - ${data.title}`}>

      <div className="flex flex-col">
        <div className="flex flex-row">
          {/* Intro */}
          <div>
            <h2>{data.title}</h2>
            <div>
              {data.description}
            </div>
          </div>
          <div>
            <Image src={data.image} width="200" height="200" />
          </div>
        </div>
        {/* Details */}
        <div className="flex flex-col">
          <ul>
            {notes}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllStarshipNames()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context: Context) => {
  let data = {}
  if (context.params) {
    const { name } = context.params
    data = getStarshipData(name)
  } else {
    console.log("Page not found")
  }

  return {
    props: {
      data
    }
  }
}
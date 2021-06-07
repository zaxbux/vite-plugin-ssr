import './index.css'
import React from 'react'
import { SidePanel } from './SidePanel'
import { Header } from './Header'
import { Section } from './types'
import { Features } from './Features'
import Docs, { headings } from './Docs.mdx'
import { MDXProvider } from '@mdx-js/react'
import { assert, getSectionId, isBrowser } from './utils'

export { Page }

const sections: Section[] = [
  /*
  { level: 1, title: 'Introduction', id: '' },
  { level: 1, title: 'Table of Contents' },
  {
    level: 1,
    title: 'Get Started',
    sections: [
      { level: 2, title: 'Tour' },
      { level: 2, title: 'Boilerplates' },
      { level: 2, title: 'Manual Install' }
    ]
  },
  { level: 1, title: 'Guides' },
  { level: 2, title: 'Routing' },
  { level: 2, title: 'Pre-rendering' },
  { level: 1, title: 'API' }
  */
]

const headerWithId = (headerTag: string) => (props: Record<string, unknown>) => {
  const title = props.children
  if (typeof title === 'string') {
    const id = getSectionId({ title })
    props = { id, ...props }
    const level = parseInt(headerTag.slice(1), 10) - 1
    const lastSection = sections[sections.length - 1]
    const section = { title, level }
    //console.log(section)
    if (lastSection && level > lastSection.level) {
      lastSection.sections = lastSection.sections || []
      lastSection.sections.push(section)
    } else {
      sections.push(section)
    }
  }
  return React.createElement(headerTag, props)
}

const components = {
  h1: headerWithId('h1'),
  h2: headerWithId('h2'),
  h3: headerWithId('h3')
}

function Page() {
  console.log(<Docs />)
  return (
    <Layout>
      {/*
      <SidePanel sections={sections} />
      */}
      <div/>
      <div>
        <Header />
        <Features />
        <MDXProvider components={components}>
          <Docs />
        </MDXProvider>
      </div>
    </Layout>
  )
}

function Layout({ children }: { children: (JSX.Element | null)[] }) {
  const left = children[0]
  const right = children[1]
  return (
    <div
      style={{
        display: 'flex'
      }}
    >
      <div style={{ flexShrink: 0, width: 280 }}>
        <div style={{ height: '100vh', position: 'fixed', top: 0, overflowY: 'auto', borderRight: '1px solid #eee' }}>
          {left}
        </div>
      </div>
      <div style={{ padding: '0 100px' }}>{right}</div>
    </div>
  )
}

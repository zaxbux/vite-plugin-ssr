import React from 'react'
import './Header.css'
import iconPlugin from '../../frame/icons/vite-plugin-ssr.svg'
import iconReact from '../../frame/icons/react.svg'
import iconVue from '../../frame/icons/vue.svg'
import { CallToActionDescription, ScaffoldCallToAction } from './ScaffoldCallToAction'

export { Header }
export { MobileCallToAction }

function Header() {
  return (
    <>
      <div id="header">
        <LeftSide />
        <RightSide />
      </div>
      <HorizontalLine />
    </>
  )
}

function LeftSide() {
  return (
    <div id="header-left-side">
      <div
        id="header-logo"
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <img src={iconPlugin} />
        <h1>
          <code style={{ display: 'inline-block', padding: '0.2em 0.7em', borderRadius: 5 }}>vite-plugin-ssr</code>
        </h1>
      </div>
      <p id="header-tagline">Like Next.js / Nuxt but as do-one-thing-do-it-well Vite plugin.</p>
    </div>
  )
}

function RightSide() {
  return (
    <div id="header-right-side" style={{ marginLeft: 40 }}>
      <CallToActionDescription style={{ marginTop: 0 }}>
        Scaffold a new Vite/<code>vite-plugin-ssr</code> app
      </CallToActionDescription>
      <ScaffoldCallToAction />
      <div style={{ width: 1, height: 1, margin: 12 }} />
      <TourCallToAction />
    </div>
  )
}

function TourCallToAction({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={style}>
      <CallToActionDescription>
        Explore how it's like to use <code>vite-plugin-ssr</code>
      </CallToActionDescription>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          marginTop: 0,
          gridGap: 20,
          height: 50
        }}
      >
        <CallToAction href="/vue-tour" text="Vue Tour" icon={iconVue} />
        <CallToAction href="/react-tour" text="React Tour" icon={iconReact} />
      </div>
    </div>
  )
}

function CallToAction({ href, text, icon }: { href: string; text: string; icon: string }) {
  return (
    <a href={href}>
      <button
        type="button"
        style={{
          width: '100%',
          height: '100%',
          fontSize: '1.2em',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img src={icon} style={{ height: 30, marginRight: 5 }} />
        {text}
      </button>
    </a>
  )
}

function MobileCallToAction() {
  return (
    <div id="mobile-call-to-action" style={{ marginTop: -50, marginBottom: 60 }}>
      <HorizontalLine />
      <TourCallToAction style={{ maxWidth: 400, padding: '0 10px', margin: 'auto', textAlign: 'center' }} />
    </div>
  )
}

function HorizontalLine() {
  return (
    <div className="header-separator-line" style={{ textAlign: 'center' }}>
      <hr
        style={{
          display: 'inline-block',
          margin: 0,
          border: 0,
          borderTop: '1px solid #eee',
          maxWidth: 500,
          width: '80%'
        }}
      />
    </div>
  )
}

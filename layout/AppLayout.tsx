import Head from 'next/head'
import React, { ReactNode } from 'react'
import Nav from '../website/components/Nav'

interface Props {
  children: React.ReactNode
  toggleSidebar: boolean
  setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>
}
interface Children {
  children: ReactNode
  title: string
  url: string
}

export const LayoutNav = ({ children, toggleSidebar, setToggleSidebar }: Props) => {
  return (
    <>
      <div
        className={`fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden ${
          toggleSidebar ? 'block' : 'hidden'
        }`}
        onClick={() => setToggleSidebar((prevState: any) => !prevState)}
      ></div>

      <div
        className={`fixed top-0 px-2  z-30 inset-y-0 left-0 min-w-[17rem]  overflow-y-auto transition duration-300 transform lg:translate-x-0 lg:static ${
          toggleSidebar ? 'translate-x-0 ease-out h-full bg-black' : '-translate-x-full ease-in  '
        }`}
      >
        <nav className="mt-10">{children}</nav>
      </div>
    </>
  )
}

export const LayoutBody = ({ children, setToggleSidebar }: Props) => {
  return (
    <div className="flex-1 px-1 flex flex-col  w-full lg:h-screen lg:overflow-y-scroll  ">
      <button
        type="button"
        className="transition fixed z-50 flex items-center justify-center w-16 h-16 text-white bg-white  rounded-full  bottom-4 right-4 lg:hidden focus:outline-none focus-visible:ring bg-opacity-20 backdrop-filter backdrop-blur"
        onClick={() => setToggleSidebar((prevState: any) => !prevState)}
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <div>{children}</div>
    </div>
  )
}
export default function AppLayout({ children, title, url }: Children) {
  return (
    <div className="flex flex-col ">
      <Head>
        <title>{`Dev.ui|${title}`}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content="Dev UI is a free, open-source collection of UI components and templates based on Tailwind CSS"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Dev.ui|${title}`} />
        <meta
          property="og:description"
          content="Dev UI is a free, open-source collection of UI components and templates based on Tailwind CSS"
        />
        <meta property="og:url" content="https://dev-ui.vercel.app/" />
        <meta property="og:site_name" content={`Dev.ui|${title}`} />
        <meta property="og:image" content="https://dev-ui.vercel.app/dev-ui.gif" />
        <meta property="og:image:secure_url" content="https://dev-ui.vercel.app/" />
        <meta property="og:image:width" content="1440" />
        <meta property="og:image:height" content="800" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="flex px-1 md:px-5 w-full ">{children}</div>
    </div>
  )
}

import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import MoreDropdown from './MoreDropDown'
import ProfileLink from './ProfileLink'
import { auth } from '@/auth'

type Props = {}

export default async function SideBar ({}: Props) {
  const session = await auth()
  const user = session?.user
  return (
    <>
      <div className='flex h-full flex-col px-3 py-4 md:px-2'>
        <div className='border-t -ml-3 md:ml-0 bg-white dark:bg-neutral-950 h-16 justify-evenly fixed flex-1 md:relative md:h-full bottom-0 md:border-none flex flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 p-2 '>
          {/* LOGO! */}
          <Logo />

          {/* NAV LINKS! */}
          <NavLinks />

          {/* PROFILE LINK! */}
          {user && <ProfileLink user={user} />}

          <div className='hodden md:flex relative md:mt-auto flex-1 items-end w-full'>
            <MoreDropdown />
          </div>
        </div>
      </div>
    </>
  )
}
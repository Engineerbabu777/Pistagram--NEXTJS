import SideBar from "@/components/SideBar"

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex h-screen relative flex-col md:flex-row md:overflow-hidden'>
      {/* SIDE BAR! */}
      <div className='w-20 flex-none lg:w-64 md:border-r'>
        <SideBar />
      </div>

      {/* MAIN CONTENT! */}
      <div className='flex-grow mt-12 md:mt-0 w-full md:overflow-y-auto sm:p-5 md:p12 max-w-7xl mx:auto'>
        {children}
      </div>
    </div>
  )
}

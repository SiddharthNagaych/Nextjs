import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a className="bg-white ml-[800px] mt-[800px]"href="/">Home</a> |<a className="bg-white" href="/about">About</a>
          </nav>


        </header>
        
      
      <main>{children}</main>
      </body>
    </html>
  )
}

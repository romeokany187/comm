import "@/app/globals.css"
import Navbar from '@/components/Navbar';
import Provider from '@/components/Provider';


export const metadata = {
    title: "E-commerce",
    description: "Discover & sell & buy some thing"
    
}

const RootLayout = ({children}) => {
    return (
        <html lang='en'>
            <head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            </head>
            <body>
                <Provider>
                    <div className="main">
                    </div>

                    <main className='app'>
                        <Navbar />
                        {children}
                    </main>
                </Provider>

            </body>
        </html>
    )
}

export default RootLayout
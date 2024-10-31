// components/Footer.tsx
import Container from './container'

const Footer = () => {
  return (
      <footer className="bg-neutral-50 dark:bg-black border-t border-neutral-200 h-96">
          <div className="h-full items-center justify-center overflow-hidden">


            <div className="mt-10">
            <span className="md:text-6xl text-2xl text-center">
              <div className="">
              Feel free to contact me at:{' '}
              <a href="mailto:eliastrana@gmail.com" className="hover:underline">
                eliastrana@gmail.com
              </a>
                </div>
            </span>
            </div>

            <div className="md:text-6xl text-2xl text-center mt-10">

            <span className="mx-8 border-2 p-2 rounded-lg border-black dark:border-white">
              <a
                  href="https://github.com/Eliastrana/personalwebsite"
                  className="hover:underline"
                  target="_blank"
              >
                Code for this site
              </a>
            </span>


            <span className="mx-8 border-2 p-2 rounded-lg border-black dark:border-white">
              <a
                  href="https://www.linkedin.com/in/elias-trana-a21a5125b/"
                  className="hover:underline"
                  target="_blank"
              >
                LinkedIn
              </a>
            </span>

            </div>


            <div className="whitespace-nowrap animate-marquee italic text-12xl">

              ELIAS TRANA ELIAS TRANA ELIAS TRANA ELIAS TRANA
            </div>
          </div>
      </footer>
  )
}

export default Footer

// components/Footer.tsx
import Container from './container'

const Footer = () => {
  return (
      <footer className=" h-96">
        <div className="h-full items-baseline overflow-hidden">


          <div className=" text-center mt-40 space-x-2">

            <span className=" border-2 p-2 rounded-lg border-black dark:border-white">
              <a
                  href="https://github.com/Eliastrana/personalwebsite"
                  className="hover:underline"
                  target="_blank"
              >
                Code for this site
              </a>
            </span>


            <span className=" border-2 p-2 rounded-lg border-black dark:border-white">
              <a
                  href="https://www.linkedin.com/in/elias-trana-a21a5125b/"
                  className="hover:underline"
                  target="_blank"
              >
                LinkedIn
              </a>
            </span>

          </div>

          <div className="mt-10">
            <span className="text-center md:font-josefin">
              <div className="">
              Feel free to contact me at:{' '}
                <a href="mailto:eliastrana@gmail.com" className="hover:underline">
                eliastrana@gmail.com
              </a>
                </div>
            </span>
          </div>

        </div>
      </footer>
  )
}

export default Footer

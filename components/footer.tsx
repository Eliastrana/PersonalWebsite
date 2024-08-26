import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-3xl lg:text-[2rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Feel free to contact me at:{' '}
            <a href="mailto:eliastrana@gmail.com" className="hover:underline">
              eliastrana@gmail.com
            </a>
          </h3>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
                href={`https://github.com/Eliastrana/personalwebsite`}
                className="mx-3 font-bold hover:underline"
            >
              Code for this site
            </a>

            <a
                href={`https://www.linkedin.com/in/elias-trana-a21a5125b/`}
                className="mx-3 font-bold hover:underline"
            >
              LinkedIn
            </a>


          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

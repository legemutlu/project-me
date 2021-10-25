export default function Custom404() {
  return (
      <div className="flex h-screen justify-center items-center">
        <div className="m-auto">
          <img className="h-64 mx-auto" src="me-emoji/sware.webp" />
          <h1 className="text-center text-lg font-light text-highlight object-center">
            <b className="text-xl">404</b> | This page doesn't seem to exist.
          </h1>
          <p className="text-center text-gray-500 mt-5 mb-10">
            Maybe one day the page will be able to exist. Maybe won't, who knows.
            <br />
            Apparently nobody belongs anywhere. Everybody's gonna die.
            <br/>
            Come keep surfing on internet.
          </p>
        </div>
      </div>
  )
}
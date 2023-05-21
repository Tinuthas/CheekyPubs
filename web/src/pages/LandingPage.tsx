
import Cropped from "../assets/thumbnail_daycare.png"
import { Map } from '../components/Map'
import { SliderPhotos } from "../components/SliderPhotos"
import '../styles/global.css'
import gm1 from '../assets/grooming/grooming1.jpeg'
import gm2 from '../assets/grooming/grooming2.jpeg'
import gm3 from '../assets/grooming/grooming3.jpeg'
import gm4 from '../assets/grooming/grooming4.jpeg'
import gm5 from '../assets/grooming/grooming5.jpeg'
import gm6 from '../assets/grooming/grooming6.jpeg'
import gm7 from '../assets/grooming/grooming7.jpeg'
import gm8 from '../assets/grooming/grooming8.jpeg'

const location = {
  address: 'Green Gate Business Centre, 1 Gould St, The Lough, Cork',
  lat: 51.8906946,
  lng: -8.4830449,
}

const API_MAPS = import.meta.env.VITE_API_MAPS || ""

export function LandingPage() {
//lg:w-[1024px]
  return (
    <div className="flex w-full h-full flex-col bg-pinkBackground">
      <div className="md:mx-[100px] lg:mx-[200px] lg:mt-10  ">

      
      <header className="bg-pinkBackground h-fit w-full flex flex-col justify-center ">
      
        <div className="flex justify-center">
          <img src={Cropped} className=" max-h-[300px] md:rounded-xl"/>
        </div>
        <h1 className="font-cursed leading-6 text-center break-words antialiased hover:subpixel-antialiased font-bold text-neutral-50 text-6xl bg-pinkBackground p-2  mt-10"><span className="text-xl align-middle	">Declan's </span>Cheeky Pups <br/><span className=" text-3xl">Dog Grooming & Daycare</span></h1>
       
      </header>
      <main className="w-full bg-pinkBackground text-neutral-500 ">
        <div className="">
          <div className="m-5 bg-white p-7 md:rounded">
          <h3 className="text-center font-medium text-2xl text-neutral-600 font-cursed">WHAT DO WE DO?</h3>
            <p className="mt-5 text-center">Declan’s Cheeky Pups is a calm and controlled environment, we're trained to take care of dogs and with profissional staff.</p>
            <p className="mt-2 text-center">We work from Monday to Friday and you can schedule your dog to daycare or grooming by calling or texting us, our phone lines are open from <strong>9AM</strong> ultil <strong>5PM</strong>. For bookings call us on <strong>083 487 3020</strong>.</p>
          </div>
          <div className="mx-5 p-7 md: rounded bg-white">
            <h3 className="text-center font-medium text-2xl text-neutral-600 font-cursed">DAYCARE</h3>
            <p className="mt-5 text-center">Cheeky Pups Daycare offers your dog a fun, safe and relaxing space to socialise, exercise and learn. We are offering you peace of mind while you are out busy running errands or at work that your dog is being looked after by highly trained staff in a cozy intimate environment. While at Cheeky Pups your dog will make lots of new friends and enjoy mental stimulation throughout the day.</p>
            <p className="mt-2 text-center">Cheeky Pups dog daycare opens <strong>7:30AM</strong> ultil <strong>6:30PM</strong> Monday to Friday.</p>
            <table className="table-auto border-collapse border border-zinc-400  hover:border-zinc-600 w-full justify-center align-middle mt-5 mb-5 text-center bolder">
              <thead>
                <tr>
                  <th className="border border-zinc-300 bg-zinc-200 h-11">Description</th>
                  <th className="border border-zinc-300 bg-zinc-200 h-11">Price</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td className="border border-zinc-300 h-8">Full Day</td>
                <td className="border border-zinc-300 h-8">€17.50</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 h-8">Half Day</td>
                <td className="border border-zinc-300 h-8">€12.50 (up to 5 hours)</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 h-8">Two dogs per day</td>
                <td className="border border-zinc-300 h-8">€30 (save €5) </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 h-8">Full week for one dog</td>
                <td className="border border-zinc-300 h-8">€75 (Save €12.50) for this dog</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 h-8">Full week for second Dog</td>
                <td className="border border-zinc-300 h-8">€65 (save €22.50) for this dog</td>
              </tr>
              </tbody>
            </table>
            <SliderPhotos images={[
              {url: 'https://scontent.fdub2-4.fna.fbcdn.net/v/t39.30808-6/310985322_534388258690283_1619704563610950096_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AaGwNIDbthgAX8Tm0B3&_nc_ht=scontent.fdub2-4.fna&oh=00_AfD9tkmF49mAWLnY10hqr4-L-X3tFfKoL_CJXREQGdu8DQ&oe=646ED797'},
              {url: 'https://scontent.fdub2-3.fna.fbcdn.net/v/t39.30808-6/307977218_521372669991842_3202328689759599600_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8opJEZqWZlUAX8KGNg5&_nc_ht=scontent.fdub2-3.fna&oh=00_AfBpDedBMrTVtEk546ctWpJ0sIHO0cve46vldwTJpca7ag&oe=647011E6'},
              {url: 'https://scontent.fdub2-4.fna.fbcdn.net/v/t39.30808-6/312942096_552002103595565_1046452538812897477_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=m0ZPqllC3YQAX894LSZ&_nc_ht=scontent.fdub2-4.fna&oh=00_AfB11yK3cM_OivA7__NbDm_vgyeXGILsMci_vePy86ZIyA&oe=646E7A1F'},
              {url: 'https://scontent.fdub2-4.fna.fbcdn.net/v/t39.30808-6/292262729_462372032558573_7972972760816399964_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7jIAcZ4iz4kAX8gQ8vr&_nc_ht=scontent.fdub2-4.fna&oh=00_AfBY_7sZgORpT3LL80etEVb9HGa7WMfC_qGGKsCckMsDJw&oe=646F208C'},
              {url: 'https://scontent.fdub2-4.fna.fbcdn.net/v/t39.30808-6/315059624_568350071960768_3153900740500722910_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cbMnR5z3KM8AX_xlFBd&_nc_ht=scontent.fdub2-4.fna&oh=00_AfC9zlvOC5ny3ZU8j3xtu-EyYipZM4YnmHkyRQlRLsttMA&oe=646E8B4E'},
              {url: 'https://scontent.fdub2-4.fna.fbcdn.net/v/t39.30808-6/341565597_161321059898085_3951047958934122459_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=C5VUY5DSCWsAX9AAln4&_nc_ht=scontent.fdub2-4.fna&oh=00_AfBVZEohxOSRC0e4qWA6ljc-TFxQTUZV3eIhn6DPxff2gA&oe=646F6A24'},
              {url: 'https://scontent.fdub2-4.fna.fbcdn.net/v/t39.30808-6/342693844_191385520418437_2711372216129761849_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_aNtiFNts4IAX-WqKEM&_nc_ht=scontent.fdub2-4.fna&oh=00_AfAJqemlPjufExl9C2VlQOp8yL1MAjDEtliQZYdsG2Ulew&oe=646E593F'},
              {url: 'https://scontent.fdub2-4.fna.fbcdn.net/v/t39.30808-6/347254438_1816033162127529_6634439168324741950_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ZJjRekUMQN8AX-aBq-X&_nc_ht=scontent.fdub2-4.fna&oh=00_AfDYSq6kMubJSEcq87DIrkUfEZ8iabhPsWtKt9YFiKIQyg&oe=646F3755'}, 
              {url: 'https://scontent.fdub2-4.fna.fbcdn.net/v/t39.30808-6/347244087_548795227330362_6747542161048627831_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Z1gMT7Pp9KIAX-8UT0r&_nc_ht=scontent.fdub2-4.fna&oh=00_AfBJkn4D7LqKBbQEa9ls71lhI1LMmP2-5Uh2-4V-Dgj6DQ&oe=646F68F4'}, 
              {url: 'https://scontent.fdub2-4.fna.fbcdn.net/v/t39.30808-6/347438881_803885618053854_1779967297671937697_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OXRPibq-QSgAX9CQrjd&_nc_ht=scontent.fdub2-4.fna&oh=00_AfBhbSRJFBYJnY3D1ozibpRSS46t_LtXtj4Aj6hWQtBRFg&oe=646E8EF2'}, 
              {url: 'https://scontent.fdub2-4.fna.fbcdn.net/v/t39.30808-6/344871378_2169973869880000_6906980230215327397_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=o7Nb3BYs44AAX94p2Fe&_nc_ht=scontent.fdub2-4.fna&oh=00_AfBS0ov1S-73Z3t7Q-0gNGVbubCvI76OFG8thKQ4FgOu5w&oe=646FBBB4'},
              {url: 'https://scontent.fdub2-4.fna.fbcdn.net/v/t39.30808-6/343566648_766408581729746_1599029279473760831_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0y33Qck5ilkAX_6lcZV&_nc_ht=scontent.fdub2-4.fna&oh=00_AfAxLu6HkoQ7FJ64TyUD6ElYMyyPNH1W8-8GzsuV6WGZHw&oe=646EBABE'},
              {url: 'https://scontent.fdub2-4.fna.fbcdn.net/v/t39.30808-6/347118203_1036636683981159_3661666226286290728_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=yACMwxorc7YAX-7VekQ&_nc_ht=scontent.fdub2-4.fna&oh=00_AfDsv4JfMK2d3bELuKWa_SwPoNjcgvC-zw8YL-rHK0fQIA&oe=646E648E'}]} />
          </div>
          {/*
          <div className="m-5 bg-white p-7 md:rounded">
            <h3 className="text-center font-medium text-lg font-cursed">WHAT DO WE OFFER?</h3>
            <p className="mt-5">We pride ourselves in offering your pooch the best grooming experience possible! We offer a range of services for your furry friend. We cater to Small, Medium & Large dogs.</p>
            <p className="mt-2">THE WORKS SESSION INCLUDES: Hair cut, Wash & Dry PLUS Nails & Ears at no extra cost.</p>
          </div>
          */}
          <div className="m-5 bg-white p-7 md:rounded">
            <h3 className="text-center font-medium text-2xl text-neutral-600 font-cursed ">GROOMING</h3>
            <p className="mt-5 text-center">We pride ourselves in offering your pooch the best grooming experience possible! We offer a range of services for your furry friend. We cater to Small, Medium & Large dogs.</p>
            <p className="mt-2 mb-5 text-center">THE WORKS SESSION INCLUDES: <strong>Hair cut, Wash & Dry</strong> PLUS <strong>Nails & Ears</strong> at no extra cost.</p>


            <SliderPhotos images={[
              {url: gm1}, {url: gm2}, {url: gm3}, {url: gm4}, {url: gm5}, {url: gm6}, {url: gm7}, {url: gm8}, ]} />
          </div>

          <div className="m-5 bg-white p-7 md:rounded">
            <h3 className="text-center font-medium text-2xl text-neutral-600 font-cursed">GET IN TOUCH</h3>
            <p className="mt-5 text-center">
              Give us a call on <span className="font-bold">083 487 1320</span> or send us a email <span className="font-bold">info@cheekypups.com</span>.
            </p>
            <p className="mt-2 text-center">
              You can find us on Facebook <a href="https://www.facebook.com/CheekyDogsDogGrooming/?fref=ts" className="font-bold">here</a>.
            </p>
          </div>
          <div className="m-5 bg-white p-7 md:rounded w-f">
            <h3 className="text-center font-medium text-2xl bg-white text-neutral-600 font-cursed">WHERE ARE WE?</h3>
            <p className="mt-5 text-center">
              Green Gate Business Centre, Gould St, The Lough, Cork - <strong>T12 Y65D</strong>
            </p>
            <Map googleMapsApiKey={API_MAPS} lat={51.890693} lng={-8.482955} zoom={15}/>
          </div>
        </div>
      </main>
      </div>
      <footer className="bg-pinkBackground">
        <div className="my-4 flex justify-center">
            <a
              href="https://www.facebook.com/CheekyDogsDogGrooming/?fref=ts"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/cheeky.pups/"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            
            <a
              href="https://www.tiktok.com/@cheeky.pups"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mx-auto h-full w-4" viewBox="0 0 16 16"> <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/> </svg>
            </a>
        </div>
        <hr className="mx-10"/>
        <p className="text-white text-center m-4">Copyright © 2023 Declan's Cheeky Pups</p>
      </footer>
    </div>
  )
}
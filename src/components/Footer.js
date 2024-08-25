const Footer = ()=>(
    `
    <nav>
        <div class="section flex justify-between gap-4 items-center py-6 border-b-2 border-b-divider">
          <h3 class="text-gray-00 text-base">Welcome to Misercom e-commerce Store</h3>
          <div class="flex gap-4 items-center">
            <div class="flex gap-4 text-gray-00 items-center">
              <h3 class="text-base">Follow us:</h3>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-square-x-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div class="border-l-2 border-l-divider">
              <div class="relative">
                <button class="flex items-center px-6 py-2 text-sm font-medium uppercase text-gray-00 transition duration-150 ease-in-out" type="button">
                  USD
                  <span class="ml-2"><i class="fa-solid fa-chevron-down"></i></span>
                </button>
                <ul class="absolute z-[1000] m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white text-base">
                  <li>
                    <a class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700" href="#">UGX</a>
                  </li>
                  <li>
                    <a class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700" href="#">EUR</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="section flex justify-between items-center gap-6 py-6">
          <div class="flex gap-2 items-center text-white">
            <img src="./public/misercom_logo.png"
                 alt="Misercom Logo"
                 class="w-14 h-14"
            />
            <h1 class="text-3xl font-extrabold">Misercom</h1>
          </div>
          <div class="max-w-[35rem] w-full bg-white py-4 px-6 flex gap-4 justify-between items-center">
            <div class="flex-1">
              <input id="search" type="text" class="w-full text-gray-500 ring-0 border-0 outline-none focus:outline-none" placeholder="Search for anything..." />
            </div>
            <div class="text-gray-900 whitespace-nowrap"><label for="search"><i class="fa-solid fa-magnifying-glass"></i></label></div>
          </div>
          <div class="flex gap-6 text-gray-00 text-2xl">
            <div class="relative">
              <div class="absolute -top-2 -right-2 bg-white w-5 h-5 text-secondary-700 flex items-center justify-center text-sm  rounded-full">2</div>
              <i class="fa-brands fa-opencart"></i>
            </div>
            <div><i class="fa-regular fa-heart"></i></div>
            <div><i class="fa-regular fa-user"></i></div>
          </div>
        </div>
      </nav>
    `
)

export default Footer;
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-screen pb-24 bg-neutral-900 text-white">
      <div className="p-6">
        <div className="p-6 border-x border-b border-neutral-800 rounded-2xl shadow-xl">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-6 h-6 text-xs font-semibold text-neutral-900 bg-white rounded hover:z-20 cursor-pointer">
                Bw
              </div>
              <div className="relative w-6 h-6 -ml-0.5 bg-sky-200 rounded-full outline outline-2 outline-neutral-900 shadow-lg hover:z-20 cursor-pointer">
                <Image
                  src="/images/austin.png"
                  alt="Profile picture for Austin"
                  className="mt-0.5"
                  fill={true}
                />
              </div>
              <div className="relative w-6 h-6 -ml-1.5 bg-amber-200 rounded-full outline outline-2 outline-neutral-900 shadow-lg hover:z-20 cursor-pointer">
                <Image
                  src="/images/tj.png"
                  alt="Profile picture for Austin"
                  className="mt-0.5"
                  fill={true}
                />
              </div>
              <h4 className="ml-3">BuildWell</h4>
            </div>
            <div className="flex justify-end"></div>
          </nav>

          <div className="mt-9">
            <div>
              <h1 className="text-2xl text-neutral-400">
                <span className="text-white">
                  Your <span className="text-red-500">Ruby on Rails</span>{" "}
                  partners.{" "}
                </span>
                Gain access to instant, world-class developers for one simple
                monthly fee.
              </h1>
              <div className="flex gap-x-3 mt-9 text-sm">
                <button className="flex items-center gap-x-0.5 pl-4 pr-3 py-1.5 rounded-lg bg-white font-medium text-black">
                  See plans
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="transform rotate-90"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M14.75 4.75L19.25 9L14.75 13.25"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M19.25 9H8.75C6.54086 9 4.75 10.7909 4.75 13V19.25"
                    ></path>
                  </svg>
                </button>
                <button className="flex items-center gap-x-0.5 pl-4 pr-3 py-1.5 rounded-lg bg-white/10 border border-neutral-700 font-medium">
                  Book a call
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M19.25 12.25v-3.5a2 2 0 0 0-2-2H6.75a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h4.5m3.5-1.5 1.5 1.5c.75-2.25 3-3.5 3-3.5M8 4.75v3.5m8-3.5v3.5m-8.25 2.5h8.5"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 py-6 pl-12 overflow-x-hidden">
        <h1 className="pr-12 text-xl text-neutral-400">
          <span className="text-white">Skip the hiring mess. </span>
          We can be up and running in less than a day.
        </h1>
        <div className="flex px-6 py-3 mt-9">
          <div className="-ml-9 p-3 text-sm rounded-xl bg-gradient-to-bl from-sky-50 to-sky-200 shadow-xl transform -rotate-3">
            <div className="flex items-center gap-x-1.5">
              <div className="flex items-center justify-center w-5 h-5 font-semibold rounded-full bg-gradient-to-b from-indigo-400 to-sky-200">
                S
              </div>
              <h4 className="font-medium text-sky-900">Subscribe</h4>
            </div>
            <div className="mt-3 mb-1.5 pr-3 text-sm font-medium text-neutral-900">
              <p>- Dedicated developers</p>
              <p>- Quick turnaround</p>
              <p>- Integrate with your team</p>
              <p>- Private Slack channel</p>
              <p>- Pause or cancel anytime</p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6 pr-12 overflow-x-hiden">
        <h1 className="pl-12 text-xl text-neutral-400">
          <span className="text-white">Dedicated to you. </span>
          We simplify the development process to fit your workflow and needs.
        </h1>
        <div className="flex justify-end mt-6 px-6 py-3">
          <div className="w-56 -mr-9 px-3 pt-3 text-sm rounded-xl bg-gradient-to-bl from-indigo-50 to-indigo-300 shadow-xl transform rotate-3">
            <div className="flex items-center gap-x-1.5">
              <div className="relative w-4 h-4">
                <Image src="/images/slack.png" alt="Slack logo" fill={true} />
              </div>
              <h4 className="font-medium text-indigo-900">Slack</h4>
            </div>
            <p className="mt-2 px-0.5 font-medium text-neutral-900">
              Once you have subscribed, we will get you set up on Slack!
            </p>
            <div className="mt-4">
              <div className="text-xs font-medium bg-neutral-900 rounded-t-xl">
                <div className="px-2 py-2.5 border-b border-neutral-800">
                  <div className="w-20 h-2 bg-neutral-800 rounded-sm"></div>
                </div>
                <div className="px-2 py-2.5 border-b border-neutral-800">
                  <div className="w-12 h-2 bg-neutral-800 rounded-sm"></div>
                </div>
                <div className="p-2 text-neutral-200 border-b border-neutral-900">
                  #build-well
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-6 py-6 pl-12 overflow-x-hidden">
        <h1 className="pr-12 text-xl text-neutral-400">
          <span className="text-white">Requests as good as completed. </span>
          We will have code tested and reviewed in an average of 5 days.
        </h1>
        <div className="flex justify-center px-6 py-3 mt-9">
          <div className="-ml-9 p-3 text-sm rounded-xl bg-gradient-to-bl from-slate-400/10 to-slate-400/10 shadow-xl transform">
            <div className="flex items-center gap-x-1.5">
              <div className="relative w-5 h-5 -mt-1 text-emerald-300">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75"
                  ></path>
                </svg>
              </div>
              <h4 className="font-medium text-white">Requests</h4>
            </div>
            <div className="relative w-72 h-16 mt-3 mb-1.5 text-sm font-medium text-neutral-200">
              <div className="absolute z-30 p-2.5 bg-neutral-900 rounded-xl border border-neutral-800 shadow-xl">
                <div className="flex gap-x-2">
                  <img
                    src="https://github.com/wassson.png"
                    className="w-8 h-8 rounded-md"
                  />
                  <div className="text-xs">
                    <p className="font-lato font-bold">Joe Shmoe</p>
                    <p className="font-lato font-regular">
                      Hey, <span className="text-sky-500"> @buildwell</span>{" "}
                      another request incoming!
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-3 ml-1">
                <div className="absolute z-20 w-64 h-12 mt-3 p-2.5 bg-neutral-900 rounded-xl border border-neutral-800 shadow-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3">
        <div className="px-3 pt-6 pb-3 border-x border-t border-neutral-800 rounded-xl shadow-xl">
          <h1 className="px-12 text-center text-xl text-neutral-400">
            <span className="text-white">Flexible subscriptions. </span>
            Pause or cancel at any time.
          </h1>
          <div className="mt-6 px-4 py-3 bg-neutral-800 rounded-xl">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-medium text-white">
                The Bottom Line
              </h1>
              <div className="flex items-center justify-center px-3 py-0.5 text-sm font-lato font-bold text-indigo-900 bg-gradient-to-br from-indigo-300 to-indigo-200 border border-indigo-100 rounded-full">
                <p>$7,000</p>
              </div>
            </div>
            <p className="mt-1.5 text-sm text-neutral-400">
              Best for those with an ongoing need for development work.
            </p>
            <div className="flex gap-x-3 mt-6 text-sm">
              <button className="flex items-center gap-x-0.5 pl-4 pr-3 py-1.5 rounded-lg bg-gradient-to-br from-indigo-300 to-indigo-200 border border-indigo-100 font-medium text-black">
                Purchase plan
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="transform rotate-90"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M14.75 4.75L19.25 9L14.75 13.25"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M19.25 9H8.75C6.54086 9 4.75 10.7909 4.75 13V19.25"
                  ></path>
                </svg>
              </button>
              <button className="flex items-center gap-x-0.5 pl-4 pr-3 py-1.5 rounded-lg bg-white/10 border border-neutral-600 font-medium">
                Book a call
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M19.25 12.25v-3.5a2 2 0 0 0-2-2H6.75a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h4.5m3.5-1.5 1.5 1.5c.75-2.25 3-3.5 3-3.5M8 4.75v3.5m8-3.5v3.5m-8.25 2.5h8.5"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-6 px-4 py-3 bg-gradient-to-br from-indigo-100 to-indigo-400 rounded-xl">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-medium text-neutral-950">
                The Speed Runner
              </h1>
              <div className="flex items-center justify-center px-3 py-0.5 text-sm font-lato font-bold text-emerald-900 bg-gradient-to-br from-emerald-300 to-emerald-100 border border-emerald-100 rounded-full">
                <p>$10,500</p>
              </div>
            </div>
            <p className="mt-1.5 text-sm text-neutral-700">
              Best for the teams and projects that need to move quickly.
            </p>
            <div className="flex gap-x-3 mt-6 text-sm">
              <button className="flex items-center gap-x-0.5 pl-4 pr-3 py-1.5 rounded-lg bg-white font-medium text-black">
                Purchase plan
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="transform rotate-90"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M14.75 4.75L19.25 9L14.75 13.25"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M19.25 9H8.75C6.54086 9 4.75 10.7909 4.75 13V19.25"
                  ></path>
                </svg>
              </button>
              <button className="flex items-center gap-x-0.5 pl-4 pr-3 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700 font-medium">
                Book a call
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M19.25 12.25v-3.5a2 2 0 0 0-2-2H6.75a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h4.5m3.5-1.5 1.5 1.5c.75-2.25 3-3.5 3-3.5M8 4.75v3.5m8-3.5v3.5m-8.25 2.5h8.5"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 px-12 overflow-x-hidden">
        <h1 className="text-center text-xl text-neutral-400">
          <span className="text-white">We love to code. </span>
          Truly. But more than that, we want to delight you with the quality
          that we deliver. We promise to make every line of code worth it.
        </h1>
        <div className="flex justify-center mt-6">
          <div className="relative h-20 w-72">
            <Image
              src="/images/signatures.png"
              alt="Profile picture for Austin"
              fill={true}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center justify-center gap-x-2.5 mt-6 mb-3">
            <div className="relative w-6 h-6 bg-sky-200 rounded-full outline outline-2 outline-neutral-900 shadow-lg hover:z-20 cursor-pointer">
              <Image
                src="/images/austin.png"
                alt="Profile picture for Austin"
                className="mt-0.5"
                fill={true}
              />
            </div>
            <div className="relative w-6 h-6 bg-amber-200 rounded-full outline outline-2 outline-neutral-900 shadow-lg hover:z-20 cursor-pointer">
              <Image
                src="/images/tj.png"
                alt="Profile picture for TJ"
                className="mt-0.5"
                fill={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

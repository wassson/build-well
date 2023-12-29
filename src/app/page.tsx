import Image from 'next/image'

export default function Home() {
  return (
    // <div className="w-screen min-h-screen p-6 bg-neutral-900 text-white">
    //   <nav className="flex items-center justify-between">
    //     <div className="flex items-center">
    //       <div className="flex flex-col items-center justify-center w-6 h-6 outline outline-2 outline-white bg-black rounded hover:z-20 cursor-pointer">
    //         <div className="flex">
    //           <div className="w-2 h-2 rounded-b-md rounded-tr-md bg-white"></div>
    //           <div className="w-2 h-2 rounded-b-md rounded-tl-md bg-white"></div>
    //         </div>
    //         <div className="flex">
    //           <div className="w-2 h-2 rounded-t-md rounded-br-md bg-white"></div>
    //           <div className="w-2 h-2 rounded-t-md rounded-bl-md bg-white"></div>
    //         </div>
    //       </div>
    //       <div className="relative w-6 h-6 -ml-0.5 bg-sky-200 rounded-full outline outline-2 outline-white shadow-lg hover:z-20 cursor-pointer">
    //         <Image
    //           src="/images/austin.png"
    //           alt="Profile picture for Austin"
    //           className="mt-0.5"
    //           fill={true}
    //         />
    //       </div>
    //       <div className="relative w-6 h-6 -ml-1.5 bg-amber-200 rounded-full outline outline-2 outline-white shadow-lg hover:z-20 cursor-pointer">
    //         <Image
    //           src="/images/tj.png"
    //           alt="Profile picture for Austin"
    //           className="mt-0.5"
    //           fill={true}
    //         />
    //       </div>
    //     </div>
    //     <div className="flex justify-end">
    //       <div className="flex items-center px-3 py-1 text-neutral-400 hover:text-white border border-neutral-800 rounded-lg shadow-lg cursor-pointer">
    //         Press{" "}
    //         <span className="text-white">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="1.5"
    //               d="M17.25 6.75V12a2 2 0 0 1-2 2h-8.5m0 0 3.5-3.25M6.75 14l3.5 3.25"
    //             ></path>
    //           </svg>
    //         </span>
    //         to get started
    //       </div>
    //     </div>
    //   </nav>

    //   <div className="mt-12">
    //     <div className="flex flex-col items-center">
    //       <h4 className="text-2xl text-white">build well</h4>
    //       <p className="text-center text-neutral-400">~</p>
    //       {/* <h4 className="text-2xl text-neutral-400">~<span className="mx-0.5 text-white">build well</span>~</h4> */}
    //       <div>
    //         <p className="text-neutral-400">
    //           Your Ruby on Rails partners
    //         </p>
    //       </div>
    //       <div className="mt-3">
    //         {/* <p className="text-sm text-neutral-700">20+ years of experience</p> */}
    //         <p className="text-sm text-neutral-700">
    //           Rails &#x2022; Hotwire &#x2022; React
    //         </p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex md:justify-center mt-12">
    //     <div className="md:w-1/2 ml-3">
    //       <p className="mb-1.5 text-neutral-200">The basics</p>
    //     </div>
    //   </div>
    //   <div className="grid md:grid-cols-4">
    //     <div className="grid md:grid-cols-2 gap-3 col-start-2 col-span-2">
    //       <div className="p-4 md:p-6 rounded-xl bg-neutral-800 shadow-lg">
    //         <h4 className="mb-1">Choose a subscription</h4>
    //         <p className="text-sm text-neutral-400">
    //           We offer two subscriptions:{" "}
    //           <span className="text-white underline">The Generalist</span>, and{" "}
    //           <span className="text-white underline">The Speed Runner</span>.
    //         </p>
    //       </div>
    //       <div className="p-4 md:p-6 rounded-xl bg-neutral-800 shadow-lg">
    //         <h4 className="mb-1">Connect on Slack</h4>
    //         <p className="text-sm text-neutral-400">
    //           Once you have subscribed, we will get you set up on Slack. This is
    //           where you will make requests.
    //         </p>
    //       </div>
    //       <div className="p-4 md:p-6 rounded-xl bg-neutral-800 shadow-lg">
    //         <h4 className="mb-1">Sync codebase</h4>
    //         <p className="text-sm text-neutral-400">
    //           With an existing project, we will fit into your workflow.
    //           Otherwise, we have got it covered.
    //         </p>
    //       </div>
    //       <div className="p-4 md:p-6 rounded-xl bg-neutral-800 shadow-lg">
    //         <h4 className="mb-1">Zero contracts</h4>
    //         <p className="text-sm text-neutral-400">
    //           Each payment covers one month. Once that month is up, you can
    //           choose to stay, pause, or go. No harm no foul!
    //         </p>
    //       </div>
    //       <div className="p-4 md:p-6 rounded-xl bg-neutral-800 shadow-lg">
    //         <h4 className="mb-1">Completely asynchronous</h4>
    //         <p className="text-sm text-neutral-400">
    //           Of course, we will start with a debrief of your project, but once
    //           we get going, we will be all async baby.
    //         </p>
    //       </div>
    //       <div className="p-4 md:p-6 rounded-xl bg-neutral-800 shadow-lg">
    //         <h4 className="mb-1">Quick turnaround</h4>
    //         <p className="text-sm text-neutral-400">
    //           On average we will have a PR tested and reviewed within 5 business
    //           days - depending on the size of your request!
    //         </p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex justify-center mt-12">
    //     <div className="md:w-1/2 ml-3">
    //       <p className="mb-1.5 text-neutral-200">The details</p>
    //       <p className="text-neutral-400">
    //         This system is as flexible as it gets. No contracts, completely asynchronous, and
    //         opt-out any time. We are here to help you build well.
    //       </p>
    //     </div>
    //   </div>

    //   <div className="flex md:justify-center mt-12">
    //     <div className="md:w-1/2 ml-3">
    //       <p className="mb-1.5 text-neutral-200">The subscriptions</p>
    //     </div>
    //   </div>
    //   <div className="grid md:grid-cols-4 gap-x-3">
    //     <div className="md:col-start-2 mb-3 md:mb-0 p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-indigo-300/10 shadow-lg">
    //       <div className="mb-3 pb-3 border-b border-neutral-700">
    //         <div className="flex items-center justify-between mb-1">
    //           <h4>The Generalist</h4>
    //           <h4 className="font-medium">$7,000/m</h4>
    //         </div>
    //         <p className="text-sm text-neutral-400">
    //           Best for those who need one request completed at a time.
    //         </p>
    //       </div>
    //       <div className="flex flex-col gap-y-1 text-sm">
    //         <p>- One request at a time</p>
    //         <p>- Quick turnaround</p>
    //         <p>- Integrate with your team</p>
    //         <p>- Unlimited code reviews</p>
    //         <p>- Tested code</p>
    //         <p>- CI/CD workflows</p>
    //         <p>- Pause or cancel when you are ready</p>
    //       </div>
    //     </div>
    //     <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-emerald-300/10 shadow-lg">
    //       <div className="mb-3 pb-3 border-b border-neutral-700">
    //         <div className="flex items-center justify-between mb-1">
    //           <h4>The Speed Runner</h4>
    //           <h4 className="font-medium">$10,500/m</h4>
    //         </div>
    //         <p className="text-sm text-neutral-400">
    //           Best for the teams and products that need to move faster.
    //         </p>
    //       </div>
    //       <div className="flex flex-col gap-y-1 text-sm">
    //         <p>- Everything in The Generalist</p>
    //         <p className="text-emerald-400">+ Two requests at a time</p>
    //         <p className="text-emerald-400">+ Access to our design system</p>
    //         <p className="text-emerald-400">+ Raycast extension</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex md:justify-center mt-12">
    //     <div className="md:w-1/2 ml-3">
    //       <p className="mb-1.5 text-neutral-200">The questions</p>
    //     </div>
    //   </div>
    //   <div className="flex md:justify-center">
    //     <div className="md:w-1/2 text-sm">
    //       <p className="inline-block max-w-2/3 px-3 py-1.5 bg-neutral-800 rounded-full">
    //         What happens when I want to stop?
    //       </p>
    //       <div className="flex justify-end">
    //         <p className="max-w-2/3 inline-block mt-3 px-3 py-1.5 text-neutral-700 bg-white rounded-xl md:rounded-full">
    //           You can pause or cancel at any point! No harm no foul.
    //         </p>
    //       </div>
    //       <div className="mt-4">
    //         <p className="inline-block max-w-2/3 px-3 py-1.5 bg-neutral-800 rounded-full">
    //           How does asynchronous work.. work?
    //         </p>
    //         <div className="flex justify-end">
    //           <p className="w-2/3 mt-3 px-3 py-1.5 text-neutral-700 bg-white rounded-xl">
    //             When you choose a subscription, we will set up a time to meet
    //             and discuss your project needs. Once all questions are answered
    //             and you are ready to get started, you will be free to make
    //             requests via Slack. We will handle all regular communication
    //             through Slack, but rest assured you can reach out to us any time
    //             you need us.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="mt-4">
    //         <p className="inline-block max-w-2/3 px-3 py-1.5 bg-neutral-800 rounded-full">
    //           Can I upgrade later?
    //         </p>
    //         <div className="flex justify-end">
    //           <p className="max-w-2/3 inline-block mt-3 px-3 py-1.5 text-neutral-700 bg-white rounded-xl md:rounded-full">
    //             Yes! You can upgrade any point you are ready to jump to the next
    //             level.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="mt-4">
    //         <p className="inline-block max-w-2/3 px-3 py-1.5 bg-neutral-800 rounded-full">
    //           I am not familiar with Ruby on Rails, but I do have experience
    //           with ..., are you open to it?
    //         </p>
    //         <div className="flex justify-end">
    //           <p className="max-w-2/3 inline-block mt-3 px-3 py-1.5 text-neutral-700 bg-white rounded-full">
    //             Yes!
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex justify-center mt-12">
    //     <div className="md:w-1/2 ml-3">
    //       <p className="mb-1.5 text-neutral-200">The promise</p>
    //       <p className="text-neutral-400">
    //         We love to code. Truly. More important than that, we want to instill
    //         delight in you through what we deliver. We promise to make every
    //         line of code worth it.
    //       </p>
    //     </div>
    //   </div>

    //   <div className="flex justify-center mt-6 mb-3">
    //     <div className="relative h-24 w-80">
    //       <Image
    //         src="/images/signatures.png"
    //         alt="Profile picture for Austin"
    //         fill={true}
    //       />
    //     </div>
    //   </div>
    //   <div className="flex items-center justify-center gap-x-2.5 mb-6">
    //     <div className="relative w-6 h-6 bg-sky-200 rounded-full outline outline-2 outline-white shadow-lg hover:z-20 cursor-pointer">
    //       <Image
    //         src="/images/austin.png"
    //         alt="Profile picture for Austin"
    //         className="mt-0.5"
    //         fill={true}
    //       />
    //     </div>
    //     <div className="relative w-6 h-6 bg-amber-200 rounded-full outline outline-2 outline-white shadow-lg hover:z-20 cursor-pointer">
    //       <Image
    //         src="/images/tj.png"
    //         alt="Profile picture for TJ"
    //         className="mt-0.5"
    //         fill={true}
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="w-screen bg-neutral-900 text-white">
      <div className="p-6">
        <div className="p-6 border-x border-b border-neutral-800 rounded-2xl shadow-xl">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex flex-col items-center justify-center w-6 h-6 bg-white rounded hover:z-20 cursor-pointer">
                <div className="flex">
                  <div className="w-2 h-2 rounded-b-md rounded-tr-md bg-neutral-900"></div>
                  <div className="w-2 h-2 rounded-b-md rounded-tl-md bg-neutral-900"></div>
                </div>
                <div className="flex">
                  <div className="w-2 h-2 rounded-t-md rounded-br-md bg-neutral-900"></div>
                  <div className="w-2 h-2 rounded-t-md rounded-bl-md bg-neutral-900"></div>
                </div>
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
              <h4 className="ml-3">build well</h4>
            </div>
            <div className="flex justify-end"></div>
          </nav>

          <div className="mt-9">
            <div>
              <h1 className="text-2xl text-neutral-400">
                <span className="text-white">
                  Your Ruby on Rails partners.{" "}
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
                <button className="flex items-center gap-x-0.5 pl-4 pr-3 py-1.5 rounded-lg bg-white/10 font-medium">
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

      <div className="mt-6 py-6 px-12 overflow-x-hidden">
        <h1 className="text-xl text-neutral-400">
          <span className="text-white">Skip the hiring mess. </span>
          We work quickly to get your projects where they need to go.
        </h1>
        <div className="relative px-6 py-3 mt-9">
          <div className="w-48 h-56 -ml-9 p-3 text-sm rounded-xl bg-gradient-to-bl from-sky-100 to-sky-200 shadow-xl transform -rotate-3">
            <div className="flex items-center gap-x-1.5">
              <div className="flex items-center justify-center w-5 h-5 font-semibold rounded-full bg-gradient-to-b from-indigo-400 to-sky-200">
                S
              </div>
              <h4 className="font-medium text-sky-900">Subscribe</h4>
            </div>
            <p className="mt-1 text-neutral-900/50">
              Choose a subscription and we will get you set up with a prive
              Slack channel.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-6 pt-6 pb-24 pr-12">
        <div className="flex justify-end px-6 py-3">
          <div className="w-48 h-56 -mr-9 p-3 text-sm rounded-xl bg-gradient-to-bl from-indigo-100 to-indigo-300 shadow-xl transform rotate-3">
            <div className="flex items-center gap-x-1.5">
              <div className="relative w-4 h-4">
                <Image src="/images/slack.png" alt="Slack logo" fill={true} />
              </div>
              <h4 className="font-medium text-indigo-900">Slack</h4>
            </div>
            <p className="mt-1 text-neutral-900/50">
              Once you have subscribed, we will get you set up on Slack!
            </p>
          </div>
        </div>
        <div className="absolute z-20 w-96 -mt-20 ml-12 bg-neutral-800 rounded-xl shadow-xl">
          <div className="p-3">
            <div className="flex gap-x-1.5">
              <div className="relative w-10 h-5 bg-amber-200 rounded-md shadow-lg hover:z-20 cursor-pointer">
                <Image
                  src="/images/tj.png"
                  alt="Profile picture for Austin"
                  className="mt-0.5"
                  fill={true}
                />
              </div>
              <div className="flex-grow">
                <p className="text-sm font-lato font-bold">build well</p>
                <p className="text-sm font-lato">
                  Welcome to Build Well! We are excited to get started. We will
                  reach out to you shortly to schedule a call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-neutral-900 text-white">
      <nav className="flex items-center justify-between p-6">
        <div className="flex items-center">
          <div className="flex flex-col items-center justify-center w-6 h-6 outline outline-2 outline-white bg-black rounded hover:z-20 cursor-pointer">
            <div className="flex">
              <div className="w-2 h-2 rounded-b-md rounded-tr-md bg-white"></div>
              <div className="w-2 h-2 rounded-b-md rounded-tl-md bg-white"></div>
            </div>
            <div className="flex">
              <div className="w-2 h-2 rounded-t-md rounded-br-md bg-white"></div>
              <div className="w-2 h-2 rounded-t-md rounded-bl-md bg-white"></div>
            </div>
          </div>
          <div className="relative w-6 h-6 -ml-0.5 bg-sky-200 rounded-full outline outline-2 outline-white shadow-lg hover:z-20 cursor-pointer">
            <Image
              src="/images/austin.png"
              alt="Profile picture for Austin"
              className="mt-0.5"
              fill={true}
            />
          </div>
          <div className="relative w-6 h-6 -ml-1.5 bg-amber-200 rounded-full outline outline-2 outline-white shadow-lg hover:z-20 cursor-pointer">
            <Image
              src="/images/tj.png"
              alt="Profile picture for Austin"
              className="mt-0.5"
              fill={true}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center px-3 py-1 text-neutral-400 hover:text-white border border-neutral-800 rounded-lg shadow-lg cursor-pointer">
            Press <span className="mx-1.5 text-white">↩</span> to get started
          </div>
        </div>
      </nav>

      <div className="mt-12">
        <div className="flex flex-col items-center">
          <h4 className="text-2xl text-white">build well</h4>
          <p className="text-center text-neutral-400">~</p>
          {/* <h4 className="text-2xl text-neutral-400">~<span className="mx-0.5 text-white">build well</span>~</h4> */}
          <div className="mt-3">
            <p className="text-neutral-400">
              2 world className Ruby on Rails developers
            </p>
          </div>
          <div className="mt-3">
            <p className="text-sm text-neutral-700">20+ years of experience</p>
            {/* <p className="text-sm text-neutral-700">RoR &#x2022; Hotwire &#x2022; React</p> */}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <div className="w-1/2 ml-3">
          <p className="mb-1.5 text-neutral-200">The basics</p>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className="grid grid-cols-2 gap-3 col-start-2 col-span-2">
          <div className="p-6 rounded-xl bg-neutral-800 shadow-lg">
            <h4 className="mb-1">Choose a subscription</h4>
            <p className="text-sm text-neutral-400">
              We offer two subscriptions:{" "}
              <span className="text-white underline">The Generalist</span>, and{" "}
              <span className="text-white underline">The Speed Runner</span>.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-neutral-800 shadow-lg">
            <h4 className="mb-1">Connect on Slack</h4>
            <p className="text-sm text-neutral-400">
              Once you've subscribed, we'll get you set up on Slack. This is
              where you'll make requests.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-neutral-800 shadow-lg">
            <h4 className="mb-1">Sync codebase</h4>
            <p className="text-sm text-neutral-400">
              With an existing project, we'll fit into your workflow. Otherwise,
              we've got it covered.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-neutral-800 shadow-lg">
            <h4 className="mb-1">Zero contracts</h4>
            <p className="text-sm text-neutral-400">
              Each payment covers one month. Once that month is up, you can
              choose to stay, pause, or go. No harm no foul!
            </p>
          </div>
          <div className="p-6 rounded-xl bg-neutral-800 shadow-lg">
            <h4 className="mb-1">Completely asynchronous</h4>
            <p className="text-sm text-neutral-400">
              Of course, we'll start with a debrief of your project, but once we
              get going, we'll be all async baby.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-neutral-800 shadow-lg">
            <h4 className="mb-1">Quick turnaround</h4>
            <p className="text-sm text-neutral-400">
              On average we'll have a PR tested and reviewed within 5 business
              days - depending on the size of your request!
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <div className="w-1/2 ml-3">
          <p className="mb-1.5 text-neutral-200">The subscriptions</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-3">
        <div className="col-start-2 p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-indigo-300/10 shadow-lg">
          <div className="mb-3 pb-3 border-b border-neutral-700">
            <div className="flex items-center justify-between mb-1">
              <h4>The Generalist</h4>
              <h4 className="font-medium">$7,000/m</h4>
            </div>
            <p className="text-sm text-neutral-400">
              Best for those who need one request completed at a time.
            </p>
          </div>
          <div className="flex flex-col gap-y-1 text-sm">
            <p>- One request at a time</p>
            <p>- Quick turnaround</p>
            <p>- Integrate with your team</p>
            <p>- Unlimited code reviews</p>
            <p>- Tested code</p>
            <p>- CI/CD workflows</p>
            <p>- Pause or cancel when you're ready</p>
          </div>
        </div>
        <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-800 to-emerald-300/10 shadow-lg">
          <div className="mb-3 pb-3 border-b border-neutral-700">
            <div className="flex items-center justify-between mb-1">
              <h4>The Speed Runner</h4>
              <h4 className="font-medium">$10,500/m</h4>
            </div>
            <p className="text-sm text-neutral-400">
              Best for the teams and products that need to move faster.
            </p>
          </div>
          <div className="flex flex-col gap-y-1 text-sm">
            <p>- Everything in The Generalist</p>
            <p className="text-emerald-400">+ Two requests at a time</p>
            <p className="text-emerald-400">+ Access to our design system</p>
            <p className="text-emerald-400">+ Raycast extension</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <div className="w-1/2 ml-3">
          <p className="mb-1.5 text-neutral-200">The questions</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 text-sm">
          <p className="inline-block max-w-2/3 px-3 py-1.5 bg-neutral-800 rounded-full">
            What happens when I want to stop?
          </p>
          <div className="flex justify-end">
            <p className="max-w-2/3 inline-block mt-3 px-3 py-1.5 text-neutral-700 bg-white rounded-full">
              You can pause or cancel at any point! No harm no foul.
            </p>
          </div>
          <div className="mt-4">
            <p className="inline-block max-w-2/3 px-3 py-1.5 bg-neutral-800 rounded-full">
              How does asynchronous work.. work?
            </p>
            <div className="flex justify-end">
              <p className="w-2/3 mt-3 px-3 py-1.5 text-neutral-700 bg-white rounded-xl">
                When you choose a subscription, we'll set up a time to meet and
                discuss your project needs. Once all questions are answered and
                you're ready to get started, you'll be free to make requests via
                Slack. We'll handle all regular communication through Slack, but
                rest assured you can reach out to us any time you need us.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="inline-block max-w-2/3 px-3 py-1.5 bg-neutral-800 rounded-full">
              Can I upgrade later?
            </p>
            <div className="flex justify-end">
              <p className="max-w-2/3 inline-block mt-3 px-3 py-1.5 text-neutral-700 bg-white rounded-xl">
                Yes! You can upgrade any point you're ready to jump to the next
                level.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="inline-block max-w-2/3 px-3 py-1.5 bg-neutral-800 rounded-full">
              I'm not familiar Ruby on Rails, but I do have experience with ...,
              are you open to it?
            </p>
            <div className="flex justify-end">
              <p className="max-w-2/3 inline-block mt-3 px-3 py-1.5 text-neutral-700 bg-white rounded-xl">
                Yes!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <div className="w-1/2 ml-3">
          <p className="mb-1.5 text-neutral-200">The promise</p>
          <p className="text-neutral-400">
            We love to code. Truly. More important than that, we want to instill
            delight in you through what we deliver. We promise to make every
            penny worth it.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-6 pb-24">
        <div className="relative h-24 w-80">
          <Image
            src="/images/signatures.png"
            alt="Profile picture for Austin"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
}

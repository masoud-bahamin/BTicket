import ContactForm from "@/components/Templates/Contact/ContactForm";

function Contact() {
  return (
    <div>
      <div className="bg-body-text text-white">
        <div className="container flex flex-wrap gap-4 justify-between py-8 lg:py-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5">Contact Us</h2>
            <p className="max-w-96">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <p>Home / Contact Us</p>
        </div>
      </div>
      <div className="container flex flex-wrap gap-16 py-12 min-h-[70vh]">
        <ContactForm />
        <div>
          <p className="text-primary mb-5"> Contact Us</p>
          <h2 className="text-xl md:text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-body-text max-w-96 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20">
            <div className="flex gap-2 items-center">
              <div className="bg-primary p-4 rounded-lg text-white">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="2em"
                  width="2em"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.763.075A.5.5 0 0115 .5v15a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V14h-1v1.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V10a.5.5 0 01.342-.474L6 7.64V4.5a.5.5 0 01.276-.447l8-4a.5.5 0 01.487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V15h2V1.309l-7 3.5V15z"
                  />
                  <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-bold">Denpasar</h3>
                <p className="max-w-40">Jl. Raya Puputan No 142, Denpasar</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-primary p-4 rounded-lg text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M19 2H9c-1.103 0-2 .897-2 2v5.586l-4.707 4.707A1 1 0 003 16v5a1 1 0 001 1h16a1 1 0 001-1V4c0-1.103-.897-2-2-2zm-8 18H5v-5.586l3-3 3 3V20zm8 0h-6v-4a.999.999 0 00.707-1.707L9 9.586V4h10v16z" />
                  <path d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 1h2v2H7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-bold">Bandung</h3>
                <p className="max-w-40">Jl. Raya Puputan No 815, Kuta</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-primary p-4 rounded-lg text-white">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-bold">Call Us</h3>
                <p className="max-w-40">(+90) 535 484 3540</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-primary p-4 rounded-lg text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-bold">
                  Email Information
                </h3>
                <p className="max-w-40">bahaminwp@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

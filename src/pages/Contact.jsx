function Contact() {
  return (
    <>
      <section className="grow relative w-full min-h-screen bg-[#1b1b1b] flex items-center justify-center px-6 py-6">
        <div className="relative w-full  rounded-3xl overflow-hidden shadow-2xl bg-black">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=80')",
            }}
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 p-10 lg:p-10 text-white">
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-sm opacity-70 mb-4">Hi there!!!</p>
                <h1 className="text-4xl font-semibold mb-8">Contact Me</h1>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm opacity-80">
                <div>
                  <p className="uppercase mb-2">Our address</p>
                  <p>Yangon</p>
                </div>

                <div>
                  <p className="uppercase mb-2">Our contacts</p>
                  <p>wunnasoehtun@gmail.com</p>
                  <p>+959 455 445 625</p>
                </div>
              </div>
            </div>

            <div className="relative w-xs bg-white rounded-xl shadow-xl p-8 text-black">
              <h3 className="text-sm font-medium mb-6">Contact Me</h3>

              <form className="space-y-6 p-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                />
                <textarea
                  placeholder="Message"
                  rows="3"
                  className="w-full border-b border-gray-300 focus:outline-none py-2 resize-none"
                />

                <div className="flex flex-col justify-between pt-4">
                  <label className="text-sm text-gray-500 cursor-pointer mb-4">
                    Upload file
                    <input type="file" className="hidden" />
                  </label>
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-900 transition"
                  >
                    SEND MESSAGE →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

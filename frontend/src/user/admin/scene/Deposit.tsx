const Deposit = () => {
    return (
      <div className="bg-gray-100 h-screen w-90 flex justify-center items-center relative">
        <div className="shadow-md rounded-lg w-5/6 lg:w-3/5 bg-white absolute">
          <form className="flex flex-col gap-2 p-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="FullName">Full name (on the card)</label>
              <input
                type="text"
                name=""
                id="FullName"
                className="p-2 border-gray-200 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="FullName">Card number</label>
              <input
                type="text"
                name=""
                id="FullName"
                className="p-2 border-gray-200 rounded-md"
                required
              />
            </div>
            <div>
              <div className="flex flex-col md:flex-row gap-2">
                <div>
                  <label htmlFor="FullName">Expiration</label>
                  <div className="flex md:flex-row flex-col  gap-3">
                    <input
                      type="text"
                      name=""
                      id="FullName"
                      className="p-2 border-gray-200 rounded-md"
                      required
                    />
                    <input
                      type="text"
                      name=""
                      id="FullName"
                      className="p-2 border-gray-200 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="md:absolute md:right-6  flex flex-col md:items-center">
                  <label htmlFor="FullName">CVC</label>
                  <div className="flex flex-col md:flex-row gap-2">
                    <input
                      type="text"
                      name=""
                      id="FullName"
                      className="p-2 border-gray-200 rounded-md md:w-20 w-full"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="my-2 w-full bg-blue-600 p-2 text-white hover:bg-blue-800 active:bg-blue-900 rounded-md border border-blue-600"
            >
              Pay $1.00
            </button>
          </form>
        </div>
      </div>
    );
}

export default Deposit
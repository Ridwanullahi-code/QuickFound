const Withdraw = () => {
    return (
      <div className="bg-gray-100 h-screen w-90 justify-center items-center flex p-10 md:p-0 relative">
        <div className="shadow-md rounded-lg absolute bg-white w-5/6 lg:w-3/5">
          <form className="flex flex-col gap-2 p-6">
            <div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="p-2 border-gray-200 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  name="number"
                  id="phoneNumber"
                  className="p-2 border-gray-200 rounded-md"
                  required
                />
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-1">
              <label htmlFor="FullName">Full name (on the card)</label>
              <input
                type="text"
                name="fullname"
                id="FullName"
                className="p-2 border-gray-200 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="cardNumber">Card number</label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                className="p-2 border-gray-200 rounded-md"
                required
                maxLength={16}
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
                      placeholder="MM"
                      maxLength={2}
                    />
                    <input
                      type="text"
                      name=""
                      id="FullName"
                      className="p-2 border-gray-200 rounded-md"
                      required
                      placeholder="YY"
                      maxLength={2}
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
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 p-2 text-white my-2 hover:bg-blue-800 active:bg-blue-900 rounded-md border border-blue-600"
            >
              Withdraw $20.00
            </button>
          </form>
        </div>
      </div>
    );
}

export default Withdraw;
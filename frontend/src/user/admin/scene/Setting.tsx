import Footer from "../../../components/Footer";

const Setting = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen p-3 md:px-0 flex flex-col justify-center items-center">
        <div className="bg-white border border-gray-300 rounded-md md:w-3/4 w-full md:p-10 p-5 shadow-lg">
          <div className="flex flex-col gap-4 text-gray-500 text-sm">
            <h2 className="font-bold">CHANGE PASSWORD</h2>
            <div className="flex justify-between items-center">
              <label htmlFor="current-password" className="font-bold">
                Current Password
              </label>
              <input
                type="password"
                id="current-password"
                className="w-3/5 rounded-md border border-gray-300 leading-tight appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="new-password" className="font-bold">
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                className="w-3/5 rounded-md border border-gray-300 leading-tight appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex justify-between items-baseline">
              <label htmlFor="confirm-password" className="font-bold">
                Confirm Password
              </label>
              <div className="flex flex-col gap-3 w-3/5">
                <input
                  type="password"
                  id="confirm-password"
                  className="rounded-md border border-gray-300 leading-tight appearance-none focus:outline-none focus:shadow-outline"
                />
                <span className="text-center text-sm text-gray-600">
                  8 characters or longer. Combine upper and lowercase letters
                  and numbers.
                </span>
              </div>
            </div>
            <div className="text-end">
              <button
                className="bg-blue-600 text-white rounded-md p-2 px-4 font-bold active:bg-blue-800 hover:bg-blue-700"
                type="button"
              >
                Save Changes
              </button>
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row justify-between">
                <p className="font-bold">EMAIL VERIFICATION</p>
                <div className="w-full md:w-3/5 flex items-center justify-between">
                  <span className="text-sm">ridwanullahiajayi01@gmail.com</span>
                  <button className="bg-blue-600 text-white p-2 px-6 font-bold rounded-md  active:bg-blue-800 hover:bg-blue-700">
                    Edit
                  </button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <p className="font-bold">PHONE VERIFICATION</p>
                <div className="w-full md:w-3/5 flex items-center justify-between">
                  <span className="text-sm">
                    Your phone is verified with Loom. Click Edit to make changes
                  </span>
                  <button className="bg-blue-600 text-white p-2 px-6 font-bold rounded-md  active:bg-blue-800 hover:bg-blue-700">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Setting;

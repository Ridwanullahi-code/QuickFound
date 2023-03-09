import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import Footer from '../../../components/Footer'

const Refer = () => {
  const copy = 'md73829373'
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text:string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copy)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-screen">
      <div className="relative">
        <img
          src="https://fiverr-res.cloudinary.com/q_auto/general_assets/referral_program/assets/f1/banner_background_md.jpg"
          className="absolute h-[30rem] w-full object-fit"
          alt="background image"
        />
        <div className="py-10  w-full absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center gap-5">
          <img
            className="rounded-full h-28 w-28"
            src="https://images.unsplash.com/photo-1631947430066-48c30d57b943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=416&q=80"
            alt="my-image"
          />
          <h3 className="font-bold text-5xl text-center text-white">
            Invite Friends & <br /> You Both Get Up To $100
          </h3>
          <p className="text-2xl font-medium text-gray-200 text-center">
            Introduce your friends to the easiest way to get things done
          </p>
          <form className="w-full md:w-4/5 bg-white p-6 md:rounded-md flex flex-col gap-8 mb-20 shadow-lg">
            <div className="flex flex-col md:flex-row w-full gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-md outline-none border border-gray-200 p-2 flex-1 "
              />
              <button
                type="submit"
                className="rounded-md flex text-white font-bold bg-blue-600 hover:opacity-90 active:bg-blue-900 w-full md:w-24 justify-center items-center p-3"
              >
                Send
              </button>
            </div>
            <hr />
            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
              <div className="border border-gray-200 rounded-md w-full flex space-between">
                <input
                  value={copy}
                  className="flex-1 p-2 outline-none"
                  readOnly
                />
                <button
                  type="button"
                  className="p-3 bg-gray-200  border border-gray-200"
                  onClick={handleCopyClick}
                >
                  {isCopied ? "Copied!" : "Copy Link"}
                </button>
              </div>
              <div>
                <div className="flex justify-center items-center gap-3">
                  <button className="text-blue-900 hover:text-white flex p-4 border border-blue-900 rounded-sm hover:bg-blue-900 ">
                    <FaFacebookF />
                  </button>
                  <button className="text-[#1DA1F3] hover:text-white flex p-4 border border-[#1DA1F3] rounded-sm hover:bg-[#1DA1F3]">
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Refer;
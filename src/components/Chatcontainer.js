import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import "../App.css";

const Chatcontainer = () => {
  return (
    <div className="chat-container">
      <div className="card">
        <div className="card-body1">
          <div className="logosection">
            <div className="logoimg">
              <p className="text-2xl font-bold text-white">
                Chati<span class="text-blue-500">Z</span>
              </p>
            </div>
            <div className="threedots">
              <Menu as="div" className="relative ml-3">
                <MenuButton
                  className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white"
                  aria-label="More options"
                >
                  <span className="block w-1 h-1 bg-current rounded-full mb-0.5"></span>
                  <span className="block w-1 h-1 bg-current rounded-full mb-0.5"></span>
                  <span className="block w-1 h-1 bg-current rounded-full"></span>
                </MenuButton>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5"
                    >
                      Your profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5"
                    >
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5"
                    >
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
          <searchbox className="searchbox">
            <input
              type="text"
              placeholder="Search..."
              className="searchinput"
            />
          </searchbox>
          <div className="chatusers scrollbar-hide">
            <div className="user">
              <img
                src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
                alt="User 1"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-col">
                <p> Johnson mathew</p>
                <small className="text-gray-400">Offline</small>
              </div>
            </div>
            <div className="user">
              <img
                src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
                alt="User 2"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-col">
                <p> Johnson mathew</p>
                <small className="text-gray-400">Offline</small>
              </div>
            </div>
            <div className="user">
              <img
                src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
                alt="User 3"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-col">
                <p> Williams</p>
                <small className="text-gray-400">Offline</small>
              </div>
            </div>
            <div className="user">
              <img
                src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
                alt="User 1"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-col">
                <p> Johnson</p>
                <small className="text-gray-400">Offline</small>
              </div>
            </div>
            <div className="user">
              <img
                src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
                alt="User 2"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-col">
                <p> Smith</p>
                <small className="text-gray-400">Offline</small>
              </div>
            </div>
            <div className="user">
              <img
                src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
                alt="User 3"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-col">
                <p> Williams</p>
                <small className="text-gray-400">Offline</small>
              </div>
            </div>
            <div className="user">
              <img
                src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
                alt="User 1"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-col">
                <p> Johnson</p>
                <small className="text-gray-400">Offline</small>
              </div>
            </div>
            <div className="user">
              <img
                src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
                alt="User 2"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-col">
                <p> Smith</p>
                <small className="text-gray-400">Offline</small>
              </div>
            </div>
            <div className="user">
              <img
                src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
                alt="User 3"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-col">
                <p> Williams</p>
                <small className="text-gray-400">Offline</small>
              </div>
            </div>
            <div className="user">
              <img
                src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
                alt="User 1"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-col">
                <p> Johnson</p>
                <small className="text-gray-400">Offline</small>
              </div>
            </div>
            <div className="user">
              <img
                src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
                alt="User 2"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-col">
                <p> Smith</p>
                <small className="text-gray-400">Offline</small>
              </div>
            </div>
            <div className="user">
              <img
                src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
                alt="User 3"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-col">
                <p> Williams</p>
                <small className="text-gray-400">Offline</small>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body2">
          <div className="message flex flex-col h-full justify-between w-full p-4">
            <div className="message-header flex items-center gap-2 mb-4 justify-space-between">
              <div className="flex items-center justify-between gap-4">
                <img
                  src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-col">
                  <p className="font-semibold"> Johnson mathew</p>
                  <small className="text-gray-400">Online</small>
                </div>
              </div>
            </div>
            <div className="message-body w-full">
              <div className="messagespace">
                <p className=" messagebubble border border-gray-300 rounded-md p-2 ml-auto">hi how r u</p>
                 <p className=" messagebubble border border-gray-300 rounded-md p-2 ">hi how r u</p>
                  <p className=" messagebubble border border-gray-300 rounded-md p-2 ml-auto">hi how r u</p>
                   <p className=" messagebubble border border-gray-300 rounded-md p-2 ml-auto">hi how r u</p>
                    <p className=" messagebubble border border-gray-300 rounded-md p-2 ">hi how r u</p>
                     <p className=" messagebubble border border-gray-300 rounded-md p-2 ">hi how r u</p>
                      <p className=" messagebubble border border-gray-300 rounded-md p-2 ml-auto">hi how r u</p>
                       <p className=" messagebubble border border-gray-300 rounded-md p-2 ">hi how r u</p>
                        <p className=" messagebubble border border-gray-300 rounded-md p-2 ml-auto">hi how r u</p>
                         <p className=" messagebubble border border-gray-300 rounded-md p-2 ml-auto">hi how r u</p>
                          <p className=" messagebubble border border-gray-300 rounded-md p-2 ">hi how r u</p>

              </div>
            </div>
            <div className="message-input mt-4">
              <div className="flex items-center gap-3 p-3.5 bg-gray-800 border border-gray-600 rounded-3xl backdrop-blur">
                {/* Photo upload icon (left) */}
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all duration-200 hover:scale-105"
                  title="Attach photo"
                >
                  📷
                </button>
                <input
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                  type="text"
                  placeholder="Type your message..."
                />
                {/* Send icon (right) */}
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-indigo-500 text-white hover:bg-indigo-600 transition-all duration-200 hover:scale-105"
                  title="Send message"
                >
                  ➤
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body3">
          <h1 className="text-2xl font-bold text-gray-900"> 
            <div className="section3header flex items-center gap-2 mb-4 justify-space-between mb-5 " >
              <img
                src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
                alt="User"
                className="w-20 h-20 rounded-full"
              />
              <div className="flex-col">
                <p className="text-lg"> Johnson mathew</p>
                <small className="text-gray-400">Online</small>
              </div>
            </div>

          </h1>
          <div className="border-t border-gray-300 pt-4 h-10"></div>
        </div>
      </div>
    </div>
  );
};
export default Chatcontainer;

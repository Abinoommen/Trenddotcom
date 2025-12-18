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
              <button
                className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white"
                aria-label="More options"
              >
                <span className="block w-1 h-1 bg-current rounded-full mb-0.5"></span>
                <span className="block w-1 h-1 bg-current rounded-full mb-0.5"></span>
                <span className="block w-1 h-1 bg-current rounded-full"></span>
              </button>
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
              <hr/>
              </div>
            </div>
            <div className="message-body w-full">
              <input
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                type="text"
                placeholder="Type your message..."/>
                
            </div>
          </div>
        </div>
        <div className="card-body3">
          <h2 className="text-2xl font-bold text-gray-900">Chat Container3</h2>
        </div>
      </div>
    </div>
  );
};
export default Chatcontainer;

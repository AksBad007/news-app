const ArticleReader = ({ article, onClose }) => {
  const { title, content, url, urlToImage } = article;

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h2 className="text-gray-700 font-bold my-4 text-center">{title}</h2>
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <img
              src={urlToImage}
              alt="news banner"
              className="w-full h-40 object-cover mb-4"
            />

            <p className="text-gray-700 mb-4">{content}</p>
          </div>

          <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <a
              href={url}
              className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-500 text-white font-semibold hover:bg-blue-600 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              View Original
            </a>

            <button
              onClick={onClose}
              className="w-full inline-flex justify-center rounded-md border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-100 px-4 py-2 focus:outline-none focus:ring focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleReader;

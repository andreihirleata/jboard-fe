export const Footer = () => {
  return (
    <footer className="w-full bg-primary bottom-0 flex flex-col sm:flex-row justify-center items-center sm:justify-between p-10">
      <div className="sm:m-0 m-10 flex flex-row justify-center items-center" style={{width: "300px"}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16 mr-3 text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
        <h3 className="text-platinum text-lg font-medium">Jobs are our job</h3>

      </div>
    <hr className="w-full sm:invisible pb-5"/>
      <div className="flex flex-row justify-around w-80">
      <ul className="flex flex-col">
        <li className="text-gray-300 text-lg font-medium mb-3">About us</li>
        <li className="text-gray-300 text-lg font-medium mb-3">Contact</li>
        <li className="text-gray-300 text-lg font-medium mb-3">Search</li>
        <li className="text-gray-300 text-lg font-medium mb-3">Placeholder</li>
      </ul>
      <ul className="flex flex-col">
        <li className="text-gray-300 text-lg font-medium mb-3">About us</li>
        <li className="text-gray-300 text-lg font-medium mb-3">Contact</li>
        <li className="text-gray-300 text-lg font-medium mb-3">Search</li>
        <li className="text-gray-300 text-lg font-medium mb-3">Placeholder</li>
      </ul>
      </div>
     
  

    </footer>
  );
};

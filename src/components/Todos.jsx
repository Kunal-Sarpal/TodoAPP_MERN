import { useState } from "react";


function Todos() {
  // State to track whether the task is completed or not
  const [completed, setCompleted] = useState(false);

  // Function to handle the click event
  const handleClick = () => {
    // Toggle the completed state when the button is clicked
    setCompleted(!completed);
  };

  // Determine the color of the button based on the completed state
  const buttonColor = completed ? 'bg-green-600' : 'bg-blue-500';

  return (
    <div className="w-44 h-52 bg-white p-3 text-zinc-800 rounded-2xl shadow-gray-600 shadow-sm border-2">
      <h1 className="h-[20%] flex justify-center items-center font-semibold text-2xl">Studying</h1>
      <h1 className="h-[60%] flex justify-center p-2"><p>I will study at 2AM</p></h1>
      <div className="w-full flex justify-center">
        {/* Apply dynamic class based on completed state */}
        <button onClick={handleClick} className={`flex justify-center items-center p-2 text-xs rounded-sm ${buttonColor} text-white`}>
          {completed ? 'Completed' : 'Mark as completed'}
        </button>
      </div>
    </div>
  );
}

export default Todos;

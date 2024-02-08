const ProgressBar = ({ questionsAnswered }) => {
  const progressWidth = (questionsAnswered / 2) * 100;

  return (
    <div className="w-full bg-gray-200 my-6 rounded-full h-5 dark:bg-gray-500 dark:bg-opacity-50">
      <div
        className="h-5 rounded-full transition-all duration-1000 ease-in-out"
        style={{
          width: `${progressWidth}%`,
          background: "linear-gradient(to right, #F4517A, #B84BE9)",
        }}
      ></div>
    </div>
  );
};
export default ProgressBar;

export const Testimonial = ({ name, feedback }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-left h-full flex flex-col justify-between transition-colors duration-300">
    <p className="text-gray-800 dark:text-gray-200 italic mb-4">"{feedback}"</p>
    <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
  </div>
);

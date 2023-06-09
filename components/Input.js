import React from "react";

const Input = (props) => {
   return (
      <>
         <label
            htmlFor={props.id}
            className="block mb-2 font-medium text-gray-900 dark:text-white"
         >
            {props.label}
         </label>
         <input
            name={props.name}
            type={props.type}
            id={props.id}
            className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-primary outline-none"
            placeholder={props.placeholder}
            required={props.required}
            rel={props.rel}
            defaultValue={props.value}
         />
      </>
   );
};

export default Input;

import React from "react";  

const MultiSelectDropdown = ({list, addItem} : any) => {
  return (<div id="dropdown" className="absolute shadow top-100 bg-white z-40 w-80 lef-0 rounded-[36px] max-h-select overflow-y-auto ">
  <div className="flex flex-col w-full">
      { list.map((item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined, key: React.Key | null | undefined) => {
          return <div key={key} 
          className="cursor-pointer w-full border-gray-100 rounded-t border-b text-gray-400 hover:bg-gray-100 pl-4" 
          onClick={() => addItem(item)}>
          <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-gray-100" >
              <div className="w-full items-center flex">
      <   div className="mx-2 leading-6  ">
          { item }
         </div>
        </div>
       </div>
      </div>
      })}
  </div>
</div>);

};

export default MultiSelectDropdown; 
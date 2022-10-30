import React from "react";  

const MultiSelectDropdown = ({list, addItem} : any) => {
  return (<div id="dropdown" className="absolute shadow bg-white z-40 w-96 max-h-80 lef-0 rounded-l-[36px] max-h-select overflow-y-auto">
  <div className="flex flex-col w-full">
      { list.map((item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined, key: React.Key | null | undefined) => {
          return <div key={key} 
          className="cursor-pointer w-full border-gray-100 rounded-t border-b text-gray-400 hover:bg-gray-50 pl-4" 
          onClick={() => addItem(item)}>
          <div className="flex w-full items-center p-2 pl-2 border-transparent " >
              <div className="w-full items-center flex">
                <div className="mx-2 leading-6 ">
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
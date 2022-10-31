import { CaretDown, X } from "phosphor-react";
import React, { useState, Component } from "react";
import MultiSelectDropdownCities from "./MultiselectDropdownCities"

const MultiselectInputCities = () => {
    // state showing if dropdown is open or closed
    const [dropdown, setDropdown] = useState(false);
    // managing dropdown items (list of dropdown items)
    const [items, setItems] = useState(['Amparo, Estado de S\u00e3o Paulo', 'Brisbane, Queensland, Austr\u00e1lia', 'Costa Dourada, Queensland, Austr\u00e1lia', 'Sydney, Nova Gales do Sul, Austr\u00e1lia', 'Londres, Reino Unido', 'Manchester, Reino Unido', 'Cambridge, Reino Unido', 'Liverpool, Reino Unido', 'Oxford, Reino Unido', 'Torquay, Reino Unido', 'Salisb\u00faria, Reino Unido', 'Edimburgo, Reino Unido', 'Bournemouth, Reino Unido', 'Dublin, Irlanda', 'Auckland, Nova Zel\u00e2ndia', 'Melbourne, Victoria, Austr\u00e1lia', 'Perth, Austr\u00e1lia Ocidental, Austr\u00e1lia', 'Adelaide, Austr\u00e1lia Meridional, Austr\u00e1lia', 'Cairns, Queensland, Austr\u00e1lia', 'Cairns, Queensland, Austr\u00e1lia', 'Vancouver, BC, Canad\u00e1', 'Toronto, ON, Canad\u00e1', 'Sliema, Malta', 'Nova York, NY, Estados Unidos', 'Boston, MA, Estados Unidos', 'Washington, DC, Estados Unidos', 'Filad\u00e9lfia, PA, Estados Unidos', 'Miami, Fl\u00f3rida, Estados Unidos', 'Chicago, IL, Estados Unidos', 'Seattle, WA, Estados Unidos', 'Portland, OR, Estados Unidos']);
    // contains selected items
    const [selectedItems, setSelected] = useState([]);


    const toogleDropdown = () => {
        setDropdown(!dropdown)
    };
    // adds new item to multiselect 
    const addTag = (item: ConcatArray<never>) => {
        setSelected(selectedItems.concat(item));
        setDropdown(false);
    };
    // removes item from multiselect
    const removeTag = (item: never) => {
        const filtered = selectedItems.filter((e) => e !== item);
        setSelected(filtered);
    }

    return (
    <div className="autcomplete-wrapper">
        <div className="autcomplete">
          <div className="w-96 flex flex-col items-center mx-auto">
          <div className="w-full">
              <div className="flex flex-col items-center relative">
                  <div className="w-full ">
                      <div className="my-2 p-1 flex border border-gray-100 bg-white text-gray-400 rounded-4xl min-h-max shadow-flat">
                          <div className="flex flex-auto flex-wrap">
                              {
                                  selectedItems.map((tag, index) => {
                                      return (
                                          <div key={index} className="flex justify-center items-center m-1 gap-1 font-medium py-1 px-2 bg-white rounded-full text-gray-400 border border-gray-300 ">
                                                  <div className="text-sm font-normal leading-none max-w-full flex-initial">{ tag }</div>
                                                  <div className="flex flex-auto flex-row-reverse cursor-pointer">
                                                      <div onClick={() => removeTag(tag)}>
                                                        <X />
                                                      </div>
                                                  </div>
                                              </div>)
                                  })
                              }
                              <div className="flex-1">
                                  <input placeholder="Selecione as cidades" className="bg-transparent p-1 px-5 appearance-none outline-none h-full w-full placeholder:text-gray-300"/>
                              </div>
                          </div>
                          <div className="text-gray-300 w-10 py-1 pl-2 pr-1 border-l flex items-center border-gray-200" onClick={toogleDropdown}>
                              <button className="cursor-pointer w-8 h-8 pr-2-1 text-gray-600 outline-none focus:outline-none">
                                  <CaretDown className="w-6 h-6" />
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
              { dropdown  ? <MultiSelectDropdownCities list={items} addItem={addTag}></MultiSelectDropdownCities>: null }
          </div>
          </div>

        </div>
    </div>)
};


export default MultiselectInputCities
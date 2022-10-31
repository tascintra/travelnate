import AsyncSelect from "react-select/async"
import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import Creatable from 'react-select/creatable'
const url = "https://api.github.com/search/users?q=John&per_page=5"

function SelectDropdown() {
  const [options, setOptions] = useState([""]);



    return (
      <div>
        <Creatable
        placeholder= "Selecione os países"
        options={options}
        isMulti
        noOptionsMessage={() => "name not found"}
      ></Creatable>
      </div>
    );

}

export default SelectDropdown
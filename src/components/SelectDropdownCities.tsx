import { useEffect, useState } from "react"
import axios from "axios"
import Select from "react-select"

const url = "https://amazon-api.sellead.com/city"

function SelectDropdownCities() {
  const [cities, setCities] = useState([""])

  useEffect(() => {
    const getData = async () => {
      const arr: any = []
      await axios.get(url).then((res) => {
        let result = res.data
        result.map((city: any) => {
          return arr.push({ value: city.code, label: city.name_ptbr })
        })
        setCities(arr)
      })
    }
    getData()
  })

  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      background: "#FFF",
      borderColor: "#EAEAEA",
      boxShadow: state.isFocused
        ? "0 0 12px 0 #0000001A"
        : "0 2px 2px 0 #0000001A",
      borderRadius: "48px",
      padding: "8px 16px",
      width: "320px",
      "@media (min-width: 1024px)": {
        width: "382px",
      },
      "&:hover": {
        borderColor: null,
      },
    }),

    option: (base: any, state: any) => ({
      ...base,
      color: "#999999",
      backgroundColor: state.isFocused ? "#F5F5F5" : null,
      "&:hover": {
        backgroundColor: "#F5F5F5",
      },
    }),

    multiValue: (base: any) => ({
      ...base,
      backgroundColor: "#EAEAEA",
      color: "#999999",
      borderRadius: "48px",
      padding: "0px 4px",
    }),
  }

  return (
    <div>
      <Select
        placeholder={<div className='text-gray-300'>Selecione as cidades</div>}
        styles={customStyles}
        options={cities}
        isMulti
        noOptionsMessage={() => "Cidade não encontrada"}
      ></Select>
    </div>
  )
}

export default SelectDropdownCities

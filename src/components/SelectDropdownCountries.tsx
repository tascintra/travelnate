import { useEffect, useState } from "react"
import axios from "axios"
import Select from "react-select"

const url = "https://amazon-api.sellead.com/country"

function SelectDropdownCountries() {
  const [countries, setCountries] = useState([""])

  useEffect(() => {
    const getData = async () => {
      const arrCountries: any = []
      await axios.get(url).then((res) => {
        let result = res.data
        result.map((country: any) => {
          return arrCountries.push({ value: country.code, label: country.name_ptbr })
        })
        const arrAscendingCountries = [...arrCountries].sort((a, b) => a.label > b.label ? 1 : -1)
        setCountries(arrAscendingCountries)
      })
    }
    getData()
  }, [])

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
        placeholder={<div className='text-gray-300'>Selecione os países</div>}
        styles={customStyles}
        options={countries}
        isMulti
        noOptionsMessage={() => "País não encontrado"}
      ></Select>
    </div>
  )
}

export default SelectDropdownCountries

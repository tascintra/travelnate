// https://amazon-api.sellead.com
import { useEffect, useState } from "react";
import axios from 'axios'

const url = "https://amazon-api.sellead.com/country"

export const api = axios.create({
  
  baseURL: 'https://amazon-api.sellead.com',
})

// https://amazon-api.sellead.com
import { useEffect, useState } from "react";
import axios from 'axios'

export const api = axios.create({
  
  baseURL: 'https://amazon-api.sellead.com',
})

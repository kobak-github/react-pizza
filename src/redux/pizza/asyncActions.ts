import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pizza } from "./types";
import { SearchPizzaParams } from "./slice";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params
    const { data } = await axios.get<Pizza[]>(
      `https://638da1efaefc455fb2a742a8.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data;
  }
)
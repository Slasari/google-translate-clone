import { Action, FromLenguage, Lenguage, State } from "../types";
import {useReducer} from 'react'

const initialState: State = {
  fromLenguage: "auto",
  toLenguage: "en",
  fromText: "",
  result: "",
  loading: false,
};

function reducer(state: State, action: Action) {
  const { type } = action;

  if (type === "INTERCHANGE_LENGUAGES") {
    return {
      ...state,
      fromLenguage: state.toLenguage,
      toLenguage: state.fromLenguage,
    };
  }

  if (type === "SET_FROM_LENGUAGE") {
    return {
      ...state,
      fromLenguage: action.payload,
    };
  }

  if (type === "SET_TO_LENGUAGE") {
    return {
      ...state,
      toLenguage: action.payload,
    };
  }

  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: "",
    };
  }

  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: action.payload,
    };
  }

  return state;
}

export function useStore() {
  const [{ 
    fromLenguage, 
    toLenguage, 
    fromText, 
    result, 
    loading 
}, dispatch] = useReducer(reducer, initialState);

  const interchangeLenguages = () => {
    dispatch({ type: "INTERCHANGE_LENGUAGES" });
  };
  const setFromLenguage = (payload: FromLenguage) => {
    dispatch({ type: "SET_FROM_LENGUAGE", payload});
  };
  const setToLenguage = (payload: Lenguage) => {
    dispatch({ type: "SET_TO_LENGUAGE", payload });
  };
  const setFromText = (payload: string) => {
    dispatch({ type: "SET_FROM_TEXT", payload });
  };
  const setResult = (payload: string) => {
    dispatch({ type: "SET_RESULT", payload });
  };

  return {
    fromLenguage,
    toLenguage,
    fromText,
    result,
    loading,
    interchangeLenguages,
    setFromLenguage,
    setToLenguage,
    setFromText,
    setResult
  };
}

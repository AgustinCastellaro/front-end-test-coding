import { useLocation } from "react-router-dom";

export function SearchQuery(){
    return new URLSearchParams(useLocation().search);
}
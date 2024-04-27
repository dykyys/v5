import Spinner from "../Spinner/Spinner";
import { CiSearch } from "react-icons/ci";



const SearchButton = () => {
  

  return (
    <button
      type="submit"
      className="absolute right-1 top-1 flex h-12 w-12 items-center justify-center rounded-full border-0 fill-black opacity-60 transition-opacity hover:cursor-pointer hover:opacity-100"
    >
      {
        <CiSearch className="h-6 w-6 fill-slate-500 transition-transform duration-200" />
      }
    </button>
  );
};

export default SearchButton;

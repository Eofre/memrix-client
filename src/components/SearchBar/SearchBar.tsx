import { FC } from "react";
import classes from "./SearchBar.module.scss";
import { Input } from "../UI/Input";
import { BsSearchHeart } from "react-icons/bs";

interface SearchBarProps {}

export const SearchBar: FC<SearchBarProps> = () => {
  return (
    <div className={classes.searchBar}>
      <BsSearchHeart />
      <input type="text" placeholder="Поиск..." />
    </div>
  );
};

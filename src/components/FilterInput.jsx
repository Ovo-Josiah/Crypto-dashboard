import { useRef } from "react";

const FilterInput = ({ filter, onChangeFilter }) => {
  const focus = useRef(null);

  return (
    <div className="filter">
      <input
        type="text"
        value={filter}
        placeholder="Filter coins by name or symbol"
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
};

export default FilterInput;

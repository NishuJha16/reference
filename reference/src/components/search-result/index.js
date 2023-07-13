import "./index.style.scss";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmployeeDetails from "../employee-details";

const SearchResult = ({ searchedRecord, onClear }) => {
  return (
    <div className="search-wrapper">
      <div className="search-result">
        <div className="sr-left">
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={onClear}
          />
          <div className="header">
            Search Result for <span>{`"${searchedRecord.profile.name}"`}</span>
          </div>
        </div>
        <Button variant="outlined" onClick={onClear}>
          Clear Result
        </Button>
      </div>
      <EmployeeDetails employeeDetails={searchedRecord} />
    </div>
  );
};
export default SearchResult;

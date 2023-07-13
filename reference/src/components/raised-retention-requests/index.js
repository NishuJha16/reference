import { raisedRetentionRequests } from "../../dummy-data/asdm.meta";
import CustomTable from "../table";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Tag from "../tag";
import "./index.style.scss";
import { useState } from "react";
import { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchResult from "../search-result";

const formatStatus = (status) => {
  switch (status) {
    case "approved":
      return "success";
    case "rejected":
      return "error";
    default:
      return "warning";
  }
};

const columns = [
  {
    id: "profile",
    label: "Name",
    minWidth: 170,
  },
  { id: "email", label: "Email Address", minWidth: 100 },
  {
    id: "grade",
    label: "Grade",
    minWidth: 170,
    format: (value) => (
      <div className="formatted">{value.toLocaleString()}</div>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    minWidth: 170,
    format: (value) => value.toLocaleString(),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
  },
];

const cellFormatter = (rows) => {
  return rows.map((row) => ({
    ...row,
    profile: (
      <div className="profile-td">
        <img
          src={row.profile.profileImage}
          alt="profile"
          className="profile-image"
        />
        <div className="profile-td-details">
          <div className="text-bold-small">{row.profile.name}</div>
          <Tag text={row.profile.employeeId} />
        </div>
      </div>
    ),
    status: (
      <Tag type={formatStatus(row.status.toLowerCase())} text={row.status} />
    ),
  }));
};

const RaisedRetentionRequests = () => {
  const [searchText, setSearchText] = useState("");
  const [currentRetentionRequests, setCurrentRetentionRequests] = useState(
    raisedRetentionRequests
  );
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    const filteredRequest = raisedRetentionRequests?.filter(
      (request) =>
        request?.profile?.name
          ?.toLowerCase()
          .includes(searchText.toLowerCase().trim()) ||
        request?.profile?.employeeId
          ?.toLowerCase()
          .includes(searchText.toLowerCase().trim())
    );
    setCurrentRetentionRequests(filteredRequest);
  }, [searchText]);

  const clearSearch = () => {
    setSearchText("");
    setCurrentRetentionRequests(raisedRetentionRequests);
  };

  return selectedRow ? (
    <SearchResult
      searchedRecord={selectedRow}
      onClear={() => setSelectedRow(null)}
    />
  ) : (
    <div className="rr-wrapper">
      <div className="rr-header">
        <div className="title">RETENTION REQUESTS</div>
        <div className="cta">
          <TextField
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            className="search-input"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            placeholder="Search"
          />
          {searchText && (
            <Button variant="contained" onClick={clearSearch}>
              Clear Search
            </Button>
          )}
        </div>
      </div>
      <CustomTable
        columns={columns}
        onRowClick={(row) =>
          setSelectedRow(
            currentRetentionRequests.filter(
              (data) => data.email === row.email
            )[0]
          )
        }
        rows={cellFormatter(currentRetentionRequests)}
      />
    </div>
  );
};
export default RaisedRetentionRequests;

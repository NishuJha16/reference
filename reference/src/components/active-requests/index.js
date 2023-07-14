import "../raised-retention-requests/index.style.scss";
import { raisedRetentionRequests } from "../../dummy-data/asdm.meta";
import CustomTable from "../table";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Tag from "../tag";
import { useState } from "react";
import { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { requestStatus } from "../../helpers/constants";

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
];

const pastRequestColumns = [
  ...columns,
  {
    id: "status",
    label: "Status",
    minWidth: 170,
  },
];

const activeRequestColumns = [
  ...columns,
  {
    id: "status",
    label: "Action",
    minWidth: 170,
  },
];

const pastCellFormatter = (rows) => {
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

const activeCellFormatter = (rows) => {
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
      <Tag
        text="View Details"
        customClass="view-btn"
        onClick={() => console.log(row)}
      />
    ),
  }));
};

const ActiveAndPastRetentionRequests = ({ statusStep }) => {
  const [status, setStatus] = useState("active");

  const getActiveRequests = () => {
    return raisedRetentionRequests.filter(
      (request) =>
        request.requestStatusStep === statusStep &&
        request.status === requestStatus.OPEN
    );
  };
  const getPastRequests = () => {
    return raisedRetentionRequests.filter(
      (request) =>
        request.requestStatusStep === statusStep &&
        request.status !== requestStatus.OPEN
    );
  };
  const [searchText, setSearchText] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const [activeRequests, setActiveRequests] = useState(getActiveRequests());
  const [pastRequests, setPastRequests] = useState(getPastRequests());

  useEffect(() => {
    const data = status === "active" ? getActiveRequests() : getPastRequests();
    const filteredRequest = data?.filter(
      (request) =>
        request?.profile?.name
          ?.toLowerCase()
          .includes(searchText.toLowerCase().trim()) ||
        request?.profile?.employeeId
          ?.toLowerCase()
          .includes(searchText.toLowerCase().trim())
    );
    status === "active"
      ? setActiveRequests(filteredRequest)
      : setPastRequests(filteredRequest);
  }, [searchText, status]);

  const clearSearch = () => {
    setSearchText("");
    setActiveRequests(getActiveRequests());
    setPastRequests(getPastRequests());
  };

  return (
    <div className="rr-wrapper">
      <div className="rr-header">
        <div className="welcome-text">{`Welcome ${user?.name}!!`}</div>
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
      <ButtonGroup
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Button
          variant={status === "active" ? "contained" : "outlined"}
          onClick={() => setStatus("active")}
        >
          {`Active Requests(${activeRequests.length})`}
        </Button>
        <Button
          variant={status === "past" ? "contained" : "outlined"}
          onClick={() => setStatus("past")}
        >
          {`Past Requests (${pastRequests.length})`}
        </Button>
      </ButtonGroup>
      {status === "active" ? (
        <CustomTable
          columns={activeRequestColumns}
          rows={activeCellFormatter(activeRequests)}
        />
      ) : (
        <CustomTable
          columns={pastRequestColumns}
          rows={pastCellFormatter(pastRequests)}
        />
      )}
    </div>
  );
};
export default ActiveAndPastRetentionRequests;

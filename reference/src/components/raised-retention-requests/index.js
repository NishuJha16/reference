import { raisedRetentionRequests } from "../../dummy-data/asdm.meta";
import CustomTable from "../table";
import Tag from "../tag";
import "./index.style.scss";

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
  return (
    <CustomTable
      columns={columns}
      rows={cellFormatter(raisedRetentionRequests)}
    />
  );
};
export default RaisedRetentionRequests;

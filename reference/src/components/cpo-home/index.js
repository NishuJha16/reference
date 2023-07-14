import ActiveAndPastRetentionRequests from "../active-requests";

const CpoHome = () => {
  return (
    <div className="request-table">
      <ActiveAndPastRetentionRequests statusStep={4} />
    </div>
  );
};
export default CpoHome;

import ActiveAndPastRetentionRequests from "../active-requests";

const HrHome = () => {
  return (
    <div className="request-table">
      <ActiveAndPastRetentionRequests statusStep={3} />
    </div>
  );
};
export default HrHome;

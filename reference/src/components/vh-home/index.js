import ActiveAndPastRetentionRequests from "../active-requests";

const VhHome = () => {
  return (
    <div className="request-table">
      <ActiveAndPastRetentionRequests statusStep={1} />
    </div>
  );
};
export default VhHome;

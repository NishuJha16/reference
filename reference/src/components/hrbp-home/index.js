import ActiveAndPastRetentionRequests from "../active-requests";

const HrbpHome = () => {
  return (
    <div className="request-table">
      <ActiveAndPastRetentionRequests statusStep={2} />
    </div>
  );
};
export default HrbpHome;

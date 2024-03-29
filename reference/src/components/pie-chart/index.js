import { PieChart, Pie, LabelList, Tooltip, Cell } from "recharts";

const RequestPieChart = ({ values }) => {
  return (
    <PieChart width={480} height={480}>
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={values}
        width={480}
        height={480}
        outerRadius={160}
        fill="#08B8A1"
        label
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <LabelList
          dataKey="name"
          position="right"
          style={{ fontSize: "16px", fontWeight: 400, color: "#000000" }}
        />
        {values.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};
export default RequestPieChart;

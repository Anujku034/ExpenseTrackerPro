import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
function IncomeExpenseChart() {
  const data = [
    { month: "Jan", income: 20000, expense: 10000 },
    { month: "Feb", income: 22000, expense: 12000 },
    { month: "Mar", income: 30000, expense: 15000 },
    { month: "Apr", income: 18000, expense: 9000 },
    { month: "May", income: 28000, expense: 13000 },
    { month: "Jun", income: 30000, expense: 14000 },
    { month: "Jul", income: 32000, expense: 16000 },
    { month: "Aug", income: 26000, expense: 12000 },
    { month: "Sep", income: 22000, expense: 10000 },
    { month: "Oct", income: 22000, expense: 10000 },
    { month: "Nov", income: 22000, expense: 10000 },
    { month: "Dec", income: 22000, expense: 10000 },
  ];

  return (
    <div className="h-70 w-full rounded-2xl bg-white p-5 shadow-xl">

      <h2 className="mb-4 text-lg font-semibold text-slate-800">
        Income vs Expenses
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="income"
            fill="#22c55e"
            radius={[4, 4, 0, 0]}
          />

          <Bar
            dataKey="expense"
            fill="#f87171"
            radius={[4, 4, 0, 0]}
          />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}
export default IncomeExpenseChart;
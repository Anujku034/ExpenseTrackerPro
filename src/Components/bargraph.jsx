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
    <div className="w-full rounded-2xl bg-white p-3 shadow-xl sm:p-4 md:p-5">

      {/* Heading */}
      <h2 className="mb-3 text-base font-semibold text-slate-800 sm:mb-4 sm:text-lg">
        Income vs Expenses
      </h2>

      {/* Responsive Chart */}
      <div className="h-[250px] w-full sm:h-[300px] md:h-[340px] lg:h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: -15,
              bottom: 5,
            }}
            barGap={2}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 11 }}
              interval="preserveStartEnd"
            />

            <YAxis
              tick={{ fontSize: 11 }}
              width={45}
            />

            <Tooltip />

            <Bar
              dataKey="income"
              fill="#22c55e"
              radius={[4, 4, 0, 0]}
              maxBarSize={25}
            />

            <Bar
              dataKey="expense"
              fill="#f87171"
              radius={[4, 4, 0, 0]}
              maxBarSize={25}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default IncomeExpenseChart;
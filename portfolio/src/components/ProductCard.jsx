import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function ProductCard({ product }) {
  const { name, url, logo, description, accent, accentLight, chartColor, data } =
    product;

  const latestUsers = data.length > 0 ? data[data.length - 1].users : 0;
  const formattedUsers =
    latestUsers >= 1000
      ? `${(latestUsers / 1000).toFixed(1)}k`
      : latestUsers.toString();

  // Y-axis ticks in steps of 5: 0, 5, 10, 15, 20, 25...
  const maxUsers = Math.max(...data.map((d) => d.users), 1);
  const niceMax = Math.ceil(maxUsers / 5) * 5;
  const yTicks = [];
  for (let i = 0; i <= niceMax; i += 5) {
    yTicks.push(i);
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shrink-0">
            <img
              src={logo}
              alt={`${name} logo`}
              className="w-10 h-10 object-contain"
            />
          </div>
          <div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[15px] text-gray-900 hover:underline"
            >
              {name}
            </a>
          </div>
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
          style={{ backgroundColor: accentLight, color: accent }}
        >
          {formattedUsers} users
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-3 pl-[52px]">{description}</p>

      {/* Chart */}
      <div className="h-[140px] mt-auto">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, bottom: 0, left: -10 }}
          >
            <defs>
              <linearGradient
                id={`gradient-${name}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={chartColor} stopOpacity={0.25} />
                <stop offset="95%" stopColor={chartColor} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#9ca3af" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#9ca3af" }}
              width={40}
              domain={[0, niceMax]}
              ticks={yTicks}
              allowDecimals={false}
              tickFormatter={(v) =>
                v >= 1000 ? `${(v / 1000).toFixed(1)}k` : `${v}`
              }
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              formatter={(value) => [`${value} users`, "Users"]}
            />
            <Area
              type="monotone"
              dataKey="users"
              stroke={chartColor}
              strokeWidth={2}
              fill={`url(#gradient-${name})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

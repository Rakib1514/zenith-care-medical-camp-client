import SectionHeading from "../../components/SectionHeading";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Rectangle,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import usePayHistory from "../../hooks/usePayHistory";
import { useParams } from "react-router-dom";
import useMyRegCampsData from "../../hooks/useMyRegCampsData";
import { Helmet } from "react-helmet-async";
import { Skeleton } from "antd";

const Analytics = () => {
  const { uid } = useParams();
  const { myPayHistory, isLoading } = usePayHistory(uid);
  const { myRegCampsData, isLoading: regLoading } = useMyRegCampsData(uid);

  const data = [
    { name: "Total Registered", value: myRegCampsData?.length || 0 },
    { name: "Total Joined", value: myPayHistory?.length || 0 },
  ];
  const COLORS = ["#0076BA", "#00C49F"];

  if (isLoading || regLoading) {
    return (
      <div>
        <div className="skeleton w-full h-60" />
        <Skeleton active className="mt-12" />
      </div>
    );
  }

  return (
    <div className="px-4">
      <Helmet title="Zenith | Analytics" />
      <SectionHeading
        heading="Your Analytics"
        subHeading="Explore detailed insights from your camp activities."
      />
      <div>
        <div>{/* Stat */}</div>
        <div className="md:flex ">
          <div className="h-[50svh] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={myPayHistory}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="campName" tick={null} />
                <YAxis dataKey="campFee" />
                <Tooltip />
                <Bar
                  dataKey="campFee"
                  fill="#0076BA"
                  activeBar={<Rectangle fill="#1B477B" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="h-[50svh] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <div>
                <p>
                  Total Register: <span className="px-2 bg-primary ml-2" />
                </p>
                <p>
                  Total Joined: <span className="px-2 bg-[#00C49F] ml-2" />
                </p>
              </div>
              <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label="something"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

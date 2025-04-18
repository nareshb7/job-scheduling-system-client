const StatusBox = ({
  title,
  count,
  color,
}: {
  title: string;
  count: number;
  color: string;
}) => {
  return (
    <div
      className={`rounded-xl p-4 shadow-sm ${color} text-center border border-gray-200 font-bold`}
    >
      <div className="text-xl font-bold">{count}</div>
      <div className="text-sm text-gray-700">{title}</div>
    </div>
  );
};

export default StatusBox;

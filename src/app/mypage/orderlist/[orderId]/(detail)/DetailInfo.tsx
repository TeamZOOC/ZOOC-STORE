const DetailInfo = ({
  label,
  value,
}: {
  label: string;
  value?: string | null;
}) => (
  <p>
    <strong>{label}</strong> {value}
  </p>
);

export default DetailInfo;

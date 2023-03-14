interface HeadingProps {
  label: string;
}

export default function Heading({ label }: HeadingProps) {
  const firstWord = label.split(" ")[0];
  const rest = label.split(" ").slice(1).join(" ");
  return (
    <h3 className={"font-semibold text-xl capitalize"}>
      <span className={"bg-primary text-white px-1"}>{firstWord}</span>{" "}
      <span>{rest}</span>
    </h3>
  );
}

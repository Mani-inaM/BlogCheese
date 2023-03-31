import { AiFillCamera } from "react-icons/ai";
import { FaLeaf, FaTshirt } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

const Categories = () => {
  const items = [
    { id: 1, label: "Environment and nature", icon: <FaLeaf /> },
    { id: 2, label: "Technology", icon: <MdComputer /> },
    { id: 3, label: "Lifestyle and fashion", icon: <FaTshirt /> },
    { id: 4, label: "Photography", icon: <AiFillCamera /> },
  ];

  return (
    <div className={"my-28"}>
      <h3 className={"text-center text-2xl font-semibold"}>Categories</h3>
      <div className={"container mt-16 grid grid-cols-4 gap-x-8"}>
        {items.map((item) => (
          <div
            key={item.id}
            className={
              "flex h-[150px] items-center justify-center bg-primary/10"
            }
          >
            <div className={"flex flex-col"}>
              <span className={"mx-auto mb-6 text-4xl text-primary"}>
                {item.icon}
              </span>
              <p>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

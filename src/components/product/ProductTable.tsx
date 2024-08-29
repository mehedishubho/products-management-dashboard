import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import data from "../../Data";

export default function ProductTable() {
  return (
    <table className="product-table">
      <thead>
        <tr>
          {data?.procutHead?.map((d, i) => (
            <th key={i}>{d}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.procutData?.map((product, i) => (
          <tr>
            <td>{i + 1}</td>
            <td>{product?.ipc}</td>
            <td>
              <div className="product-table-details">
                <div className="img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSXMKOta29nLjSouFEyDZi2IO3cfn9dtOBQ&s"
                    alt={product?.name}
                  />
                </div>
                <div className="content">
                  <p>{product?.name}</p>
                  <span>{product?.brand}</span>
                </div>
              </div>
            </td>
            <td>{product?.catagory}</td>
            <td>{product?.stock}</td>
            <td>{product?.price}</td>
            <td>
              <p
                className={`status ${
                  (product?.status?.toLowerCase() === "public" && "public") ||
                  (product?.status?.toLowerCase() === "inactive" &&
                    "inactive") ||
                  (product?.status?.toLowerCase() === "scheduled" &&
                    "scheduled") ||
                  ""
                }`}
              >
                {product?.status}
              </p>
            </td>
            <td>
              <div className="btns">
                <Link to="/view">
                  <FaEye />
                </Link>
                <Link className="edit" to="/edit">
                  <FaEdit />
                </Link>
                <button>
                  <MdDelete />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

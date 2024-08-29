import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Pagination from "../components/product/Pagination";
import ProductFilter from "../components/product/ProductFilter";
import ProductTable from "../components/product/ProductTable";
import ProductTop from "../components/product/ProductTop";

export default function Product() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="product">
      <ProductTop />
      <div className="product-body">
        <ProductFilter />
        <div className="product-search">
          <div className="input-group">
            <label htmlFor="product-search">Search Prodcut</label>
            <input
              type="text"
              id="product-search"
              placeholder="Search Product"
            />
          </div>
          <div className="product-add-btn">
            <Link className="btn" to={"/add"}>
              <FaPlus /> Add New Product
            </Link>
          </div>
        </div>

        <ProductTable />
        <div className="product-bottom">
          <div className="identity">
            <p>Showing 1 to 7 of 100 entries </p>
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={50}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}

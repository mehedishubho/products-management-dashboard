export default function ProductFilter() {
  return (
    <div className="product-filter">
      <div className="input-group">
        <label htmlFor="status">Product Status</label>
        <select name="status" id="status">
          <option>All Status</option>
          <option>Publish</option>
          <option>Scheduled</option>
          <option>Inactive</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="status">Product Category</label>
        <select name="Category" id="Category">
          <option>All Category</option>
          <option>Phone</option>
          <option>Shoes</option>
          <option>Accessories</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="Stock"> Stock</label>
        <select name="Stock" id="Stock">
          <option>All product</option>
          <option>In Stock</option>
          <option>Out of Stock</option>
        </select>
      </div>
    </div>
  );
}

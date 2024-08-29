interface ProductData {
  name: string;
  ipc: string;
  catagory: string;
  stock: number;
  price: number;
  status: string;
  brand: string;
}

interface Data {
  procutHead: string[];
  procutData: ProductData[];
}

const data: Data = {
  procutHead: [
    "No",
    "IPC",
    "Procut",
    "Category",
    "Stock",
    "Price",
    "Status",
    "Actions",
  ],

  procutData: [
    {
      name: "produch name",
      ipc: "234324",
      catagory: "Electronics",
      stock: 23,
      price: 334,
      status: "public",
      brand: "apple",
    },
    {
      name: "produch name",
      ipc: "234324",
      catagory: "Electronics",
      stock: 23,
      price: 334,
      status: "public",
      brand: "apple",
    },
    {
      name: "produch name",
      ipc: "234324",
      catagory: "Electronics",
      stock: 23,
      price: 334,
      status: "public",
      brand: "apple",
    },
    {
      name: "produch name",
      ipc: "234324",
      catagory: "Electronics",
      stock: 23,
      price: 334,
      status: "public",
      brand: "apple",
    },
    {
      name: "produch name",
      ipc: "234324",
      catagory: "Electronics",
      stock: 23,
      price: 334,
      status: "public",
      brand: "apple",
    },
    {
      name: "produch name",
      ipc: "234324",
      catagory: "Electronics",
      stock: 23,
      price: 334,
      status: "public",
      brand: "apple",
    },
    {
      name: "produch name",
      ipc: "234324",
      catagory: "Electronics",
      stock: 23,
      price: 334,
      status: "public",
      brand: "apple",
    },
    {
      name: "produch name",
      ipc: "234324",
      catagory: "Electronics",
      stock: 23,
      price: 334,
      status: "Scheduled",
      brand: "apple",
    },
    {
      name: "produch name",
      ipc: "234324",
      catagory: "Electronics",
      stock: 23,
      price: 334,
      status: "public",
      brand: "apple",
    },
    {
      name: "produch name",
      ipc: "234324",
      catagory: "Electronics",
      stock: 23,
      price: 334,
      status: "Inactive",
      brand: "apple",
    },
  ],
};

export default data;

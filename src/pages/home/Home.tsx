import { useCallback, useEffect, useState } from "react";
import { useActionData, useLoaderData, useSubmit } from "react-router-dom";
import { IUser } from "../../interface/user";
import { debounce } from "lodash";

function Home() {
  const [data, setData] = useState([]);
  const users: any = useLoaderData();
  const searchResult: any = useActionData();
  const submit = useSubmit();
  const getUserByName = (name: string) => {
    const payload = { name };
    submit(payload, {
      method: "post",
    });
  };

  const handleSearch = (e: any) => {
    handleDebounceSearch(e.target.value);
  };

  const handleDebounceSearch = useCallback(
    debounce((searchValue) => {
      getUserByName(searchValue);
    }, 400),
    []
  );
  useEffect(() => {
    if (searchResult?.length) setData(searchResult);
    else setData(users);
  }, [searchResult]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Danh sách người dùng
      </h1>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4 flex items-center border border-gray-300 rounded-md overflow-hidden">
          <span className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 18a8 8 0 100-16 8 8 0 000 16z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35"
              ></path>
            </svg>
          </span>
          <input
            type="text"
            name="name"
            placeholder="Tìm kiếm người dùng..."
            className="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleSearch}
          />
        </div>
        <ul>
          {data.length === 0 ? (
            <p className="text-center">Đang tải dữ liệu...</p>
          ) : (
            data.map((user: IUser, index: number) => (
              <li
                key={user.id}
                className="py-4 flex items-center justify-between border-b border-gray-200 last:border-b-0"
              >
                <div className="flex items-center">
                  <img
                    src={
                      user.avatarUrl ||
                      `https://picsum.photos/48?random=${index}`
                    } // Sử dụng ảnh mặc định từ Lorem Picsum
                    alt={user.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-lg font-semibold">{user.name}</p>
                    <p className="text-gray-500">{user.email}</p>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Home;

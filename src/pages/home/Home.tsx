import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { IUser } from "../../interface/user";

function Home() {
  const users: any = useLoaderData();
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Danh sách người dùng
      </h1>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <ul>
          {users.length === 0 ? (
            <p className="text-center">Đang tải dữ liệu...</p>
          ) : (
            users.map((user: IUser, index: number) => (
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

'use client';
import { UserType } from '../../types/userType';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';

async function getAllUser(): Promise<UserType[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users`);
  const data = await res.json();
  const users: UserType[] = data.users;
  return users;
}

export default function UserCard() {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getAllUser,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <section className="grid gap-6 *:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 p-4 w-[90%] mx-auto">
      {users?.map((user) => (
        <div
          key={user.id}
          className="mx-auto w-full max-w-lg bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border p-6 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="flex-shrink-0">
            <Image
              width={80}
              height={80}
              alt="User Avatar"
              className="object-cover rounded-full border-2 border-gray-200 shadow-sm"
              unoptimized
              src={user.image}
            />
          </div>
          <div className="flex-grow w-full text-center md:text-left">
            <p className="font-semibold text-gray-800 text-base mb-1">{user.email}</p>
            <p className="font-medium text-gray-600 text-sm mb-1">{user.phone}</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{user.username}</h3>
            <p className="text-gray-500 mb-4">
              John is a Senior Developer, mainly works in backend technologies.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="bg-gray-100 border px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700">
                Discrete Math
              </span>
              <span className="bg-gray-100 border px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700">
                Topology
              </span>
              <span className="bg-gray-100 border px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700">
                Neural Nets
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

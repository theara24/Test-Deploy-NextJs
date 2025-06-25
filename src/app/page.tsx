import UserCard from "@/components/users/UserCard";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-[90%] mx-auto">
      <UserCard />
    </main>
  );
}

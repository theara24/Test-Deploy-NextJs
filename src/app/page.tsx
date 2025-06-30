import UserCard from '@/components/users/UserCard';
import Image from 'next/image';
export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mt-8">
        <h1 className="text-red-500 text-4xl font-bold mb-4">
          This is a simple example of using TanStack Query with Next.js.
        </h1>
      </div>
      <UserCard />
      <hr />
      <h1 className="text-red-500 text-4xl font-bold mb-4 text-center mt-10">
        This is a simple example of import Image in Next.js.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <Image
          src="/1.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <Image
          src="/2.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <Image
          src="/3.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <hr />
      <h1 className="text-red-500 text-4xl mb-4 text-center mt-10">
        សួស្តី! នេះគឺជាឧទាហរណ៍សាមញ្ញនៃការប្រើប្រាស់ TanStack Query ជាមួយ
        Next.js។
      </h1>
      <ol className="mt-8 text-black list-decimal mx-20">
        <li>Download fonts and add to follder project</li>
        <li>Export font in file Layout</li>
        <li>Add style to global style css</li>
      </ol>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <Image
          src="/localfont.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <Image
          src="/localfont2.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <Image
          src="/localfont3.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>

      <hr />
    </main>
  );
}
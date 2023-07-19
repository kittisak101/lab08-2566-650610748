import { Footer } from "@/comp/Header";
import { Header } from "@/comp/Header";
import { Task } from "@/comp/Header";
import { TaskInput } from "@/comp/Header";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        <Task title="Read a book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="Sleep" />
      </div>
      {/* //footer section */}
      <Footer year="2023" fullName="Kittisak Bundit" studentId="650610748" />
    </div>
  );
}

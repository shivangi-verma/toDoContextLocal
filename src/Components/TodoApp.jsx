import { Input } from "@/components/ui/input";
import { CircleFadingArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useState } from "react";

export default function TodoApp() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const addListItem = () => {
    // setText((prev) => console.log(prev));
    console.log(text);
    setText("");

    console.log(list);
  };

  const deleteListItem = () => {};

  return (
    <div className="h-screen w-screen flex flex-col justify-between bg-black">
      {/* Heading */}
      <div className="heading text-center cursor-default">
        <span
          style={{ userSelect: "none" }}
          className="
            font-[Work_Sans]
            font-medium
            text-nowrap
            text-[#272c34]
            leading-[0.9]
            tracking-[-0.3rem]
            sm:tracking-[-0.6rem]
            m-2
            text-7xl
            sm:text-7xl
            md:text-8xl
            lg:text-[10rem]
            xl:text-[14rem]
          "
        >
          Forwardlist
        </span>
      </div>

      {/* Input + Add Button */}
      <div className="content flex flex-row justify-center">
        <div
          className="
            todoInput
            flex flex-row justify-center gap-4

            sm:w-xs
            md:w-md
            lg:w-xl
            xl:w-xl
          "
        >
          <Input
            className="
              bg-[#272c34]
              border-[#272c34]
              text-white
              placeholder:text-gray-300
              focus-visible:ring-2
              focus-visible:ring-gray-500
              focus-visible:bg-[#373e48]
            "
            placeholder="To Do Item..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />

          <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
            <Button
              className="border-none"
              variant="outline"
              onClick={addListItem}
            >
              Add
              <CircleFadingArrowUpIcon />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          className="
            flex justify-center
            text-[28px]
            text-white
            font-[DM_Sans]
            m-3

            text-md
            sm:text-md
            md:text-xl
            lg:text-2xl
            xl:text-2xl

            hover:text-amber-100
            cursor-pointer
          "
          style={{ userSelect: "none" }}
        >
          Made by Shivangi
        </motion.div>
      </div>
    </div>
  );
}

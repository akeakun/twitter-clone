"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import { Icon } from "@radix-ui/react-select";
import EmojiPicker from "emoji-picker-react";
import { Globe2, Smile, UserRoundCheck, Users, Image } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";

const TextAreaComp = () => {
  const [value, setValue] = useState("");
  const [canReply, setCanReply] = useState("eo");
  //   const [canReply, setCanReply] = useState("")
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      // @ts-ignore
      const scrollHeight = textareaRef.current.scrollHeight;
      // @ts-ignore
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [value]);

  const handleInputChange = (event: any) => {
    setValue(event.target.value);
  };
  const handleReplyChange = (value: string) => {
    setCanReply(value);
  };
  const handleEmojiChange = (value: any) => {
    setValue((prev) => {
      return prev + value.emoji;
    });
  };

  return (
    <div className="flex-1 h-fit">
      <div className="h-fit">
        <Textarea
          ref={textareaRef} // Assign the ref to the textarea element
          className="px-0 flex-wrap border-none text-lg focus-visible:ring-0 resize-none"
          placeholder="What is happening?!"
          rows={1}
          value={value}
          onChange={handleInputChange}
        />
      </div>
      <div className="py-2 space-y-4">
        <Select onValueChange={handleReplyChange}>
          <SelectTrigger className="w-fit space-x-2 h-fit bg-blue-200 py-1 px-2 rounded-full">
            <Icon>
              {canReply === "eo" && (
                <div className="p-1 bg-blue-600 rounded-full">
                  <Globe2 size={15} color="white" />
                </div>
              )}
              {canReply === "ayf" && (
                <div className="p-1 bg-blue-600 rounded-full">
                  <UserRoundCheck size={15} color="white" />
                </div>
              )}
              {canReply === "afy" && (
                <div className="p-1 bg-blue-600 rounded-full">
                  <Users size={15} color="white" />
                </div>
              )}
            </Icon>
            <SelectValue
              placeholder={`Everyone can reply`}
              className="text-xs"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="eo">Everyone can reply</SelectItem>
            <SelectItem value="ayf">Accounts you Follow can reply</SelectItem>
            <SelectItem value="afy">
              Accounts that follow you can reply
            </SelectItem>
          </SelectContent>
        </Select>
        <Separator />
        <div className="flex justify-between">
          <div className=" space-x-2">
            <button className=" bg-transparent">
              <Image />
            </button>
            <Popover>
              <PopoverTrigger>
                <Smile />
              </PopoverTrigger>
              <PopoverContent>
                <EmojiPicker onEmojiClick={handleEmojiChange} />
              </PopoverContent>
            </Popover>
          </div>
          <Button className="rounded-full mx-2">Post</Button>
        </div>
      </div>
    </div>
  );
};

export default TextAreaComp;

/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SearchableDropdown = ({
   options = [],
   placeholder = "Select an option...",
   value,
   onSelect,
   width = "280px",
}) => {
   const [open, setOpen] = useState(false);

   return (
      <Popover open={open} onOpenChange={setOpen}>
         <PopoverTrigger asChild className="w-full m-0">
            <Button
               variant="outline"
               role="combobox"
               aria-expanded={open}
               className={`w-[${width}] justify-between hover:bg-white`}
            >
               {value
                  ? options.find((option) => option.value === value)?.label
                  : placeholder}
               <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
         </PopoverTrigger>
         <PopoverContent className={`w-full p-0`}>
            <Command>
               <CommandInput placeholder={`Search ${placeholder}...`} className="h-9" />
               <CommandList>
                  <CommandEmpty>No option found.</CommandEmpty>
                  <CommandGroup>
                     {options.map((option) => (
                        <CommandItem
                           key={option.value}
                           value={option.value}
                           onSelect={(currentValue) => {
                              onSelect(currentValue === value ? "" : currentValue);
                              setOpen(false);
                           }}
                        >
                           {option.label}
                           <CheckIcon
                              className={cn(
                                 "ml-auto h-4 w-4",
                                 value === option.value ? "opacity-100" : "opacity-0"
                              )}
                           />
                        </CommandItem>
                     ))}
                  </CommandGroup>
               </CommandList>
            </Command>
         </PopoverContent>
      </Popover>
   );
};

export default SearchableDropdown;

"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

type FilterValue = "all" | "true" | "false";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("completed") ?? "all";

  function handleFilter(filter: FilterValue) {
    const params = new URLSearchParams(searchParams);
    params.set("completed", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border rounded">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        全て
      </Button>
      <Button
        filter="true"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        完了
      </Button>
      <Button
        filter="false"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        未完了
      </Button>
    </div>
  );
}

type ButtonProps = {
  filter: FilterValue;
  activeFilter: string;
  handleFilter: (filter: FilterValue) => void;
  children: ReactNode;
};

function Button({ filter, handleFilter, activeFilter, children }: ButtonProps) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`rounded text-sm text-[#27374D] font-bold px-3 py-2 md:px-4 md:py-3 hover:bg-[#526D82] 
        ${filter === activeFilter ? "bg-[#27374D] text-[#DDE6ED]" : ""}`}
    >
      {children}
    </button>
  );
}

export default Filter;

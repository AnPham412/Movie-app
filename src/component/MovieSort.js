import React from "react";
import { FSelect } from "./form";

const SORT_OPTIONS = [
    { value: "featured", label: "Featured" },
    { value: "newest", label: "Newest" },
    {value: "hot", label: "Hot" },
    {value: "genres", label: "Tag" },
    {value: "cinema", label: "Cinema"},
];

function MovieSort() {
    return (
        <div>
            <FSelect name="sortBy" size="small" sx={{ width: 300 }}>
                {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </FSelect>
        </div>
    );
}

export default MovieSort;
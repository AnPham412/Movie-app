import React from "react";
import { FSelect } from "./form";

const SORT_OPTIONS = [
    { value: "alphabet", label: "A-Z" },
    { value: "reverse", label: "Z-A" },
    { value: "cinema", label: "Cinema"},
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
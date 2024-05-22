"use client"

import {  useState } from "react";

export const useToggle = (initialValue) => {
    const [isExpanded, setIsExpanded] = useState(initialValue)

    const handleToggle = () => {
        setIsExpanded(!isExpanded)
    }

    return ({ isExpanded, handleToggle });
};

export default useToggle

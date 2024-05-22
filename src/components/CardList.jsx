"use client"

import useFetch from "@/hooks/useFetch";
import ContentCard from "@/components/ContentCard";

export default function CardList() {
    const API_URL = "https://stoplight.io/mocks/engine/fullstack-spec/52502230/content";
    const { data, isLoading, isError } = useFetch(API_URL)

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error</div>
    }

    if (!Array.isArray(data) || data.length === 0) {
        return <div>No items to display</div>
    }

    return <section className="grid grid-cols-1 gap-x-6 gap-y-8  xl:gap-x-8">
        {data.map((card, key) => <ContentCard key={key} {...card} />)}
    </section>
}

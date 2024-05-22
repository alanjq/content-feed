import ViewMoreButton from "@/components/ViewMoreButton"
import useToggle from "@/hooks/useToggle"
import { IContentCard } from "../interfaces/IContentCard"

export default function ContentCard({ id, image, title, subTitle, body, author, comments }: IContentCard) {
    const { handleToggle, isExpanded } = useToggle(false)

    return <section className="relative bg-gray-100 rounded-lg shadow-md flex flex-col gap-4 md:max-w-md">
        <div className="flex-col group aspect-h-7 aspect-w-10 w-full overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <div className="px-4 bg-slate-700 flex-row text-white">
                <small className="text-gray-100">{author}</small>
                <h2 className="pointer-events-none block truncate text-lg font-medium">{title}</h2>
            </div>
            <img src={image} alt="" className="mx-auto pointer-events-none object-cover" />
        </div>
        <div className="flex flex-row px-4">
            <h3 className="flex-col flex-1 font-bold text-slate-600">{subTitle}</h3>
            <span className="flex-col text-purple-700">Comments</span>
            
        </div>
        <article className="px-5 mb-4 flex flex-col gap-4">
            <p className={`flex-col text-sm font-medium text-wrap text-gray-700 break-words ${isExpanded ? '' : 'line-clamp-3'}`}>{body}</p>
            <ViewMoreButton onClick={handleToggle} isExpanded={isExpanded} />
        </article>
    </section>
}

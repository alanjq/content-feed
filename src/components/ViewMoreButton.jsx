
export default function ViewMoreButton({ onClick, isExpanded }) {
    return <button type="button"
        className={`flex-col mx-auto block py-2 px-4  rounded-lg ${isExpanded ? 'text-purple-600' : 'text-blue-600'} text-white`}
        onClick={onClick}>{isExpanded ? 'Hide' : 'View more'}</button>
}

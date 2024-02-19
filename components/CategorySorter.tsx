// In CategorySorter.tsx

interface CategorySorterProps {
    selectedTag: string | null; // Assuming selectedTag can be null
    onTagChange: (tag: string | null) => void;
    tags: string[];
}

const CategorySorter: React.FC<CategorySorterProps> = ({
                                                           selectedTag,
                                                           onTagChange,
                                                           tags = [] // Default to an empty array if tags are undefined
                                                       }) => {
    // Determine if the 'All' button should be styled as selected
    const isAllSelected = selectedTag === null;

    return (
        <div className="flex flex-wrap space-x-2"> {/* Adjusted for layout */}
            <button
                key="All"
                onClick={() => onTagChange(null)}
                className={`px-4 py-2 rounded-full mb-5 ${
                    isAllSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'
                } transition-colors duration-300 ease-in-out`} // Apply dynamic styling for 'All' button
            >
                All
            </button>
            {tags.map((tag) => (
                <button
                    key={tag}
                    onClick={() => onTagChange(tag)}
                    className={`px-4 py-2 rounded-full mb-5 ${
                        selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'
                    } transition-colors duration-300 ease-in-out`} // Apply dynamic styling for other buttons
                >
                    {tag}
                </button>
            ))}
        </div>
    );
};


export default CategorySorter;

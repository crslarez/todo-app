import { FilterButtom, FilterButtomContainer, FiltersContainer, ItemsLeft } from "./TodoFilters.components"

const TodoFilters = () => {
    return (
        <FiltersContainer>
            <ItemsLeft />
            <FilterButtomContainer>
                <FilterButtom action={() => { }} active="All" filter='All' />
                <FilterButtom action={() => { }} active="All" filter='Active' />
                <FilterButtom action={() => { }} active="All" filter='Completed' />
            </FilterButtomContainer>

        <button className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
            Clear Completed
        </button>
        </FiltersContainer>


    )
}

export { TodoFilters }
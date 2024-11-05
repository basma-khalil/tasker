// Components
import { Input } from '@/components/ui/input';

export default function Search() {
  // const handleSearch: ChangeEventHandler<HTMLInputElement> = (evt) => {
  //   const query = evt.target.value.trim();
  // };

  return (
    <div className="w-full">
      <label htmlFor="search" className="sr-only">
        sSearch tasks by title
      </label>

      <Input
        id="search"
        type="search"
        name="search"
        // onChange={handleSearch}
        placeholder="Search tasks by title..."
        className="pl-10 bg-search-icon bg-no-repeat bg-[length:20px_20px] [background-position:10px_50%]"
        autoComplete="search"
      />
    </div>
  );
}

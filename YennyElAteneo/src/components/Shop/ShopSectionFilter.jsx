import { useState } from "react";
import Sidebar from "./Sidebar";
import BookCard from "./BookCard";
import { FiFilter, FiX } from "react-icons/fi";

export default function BookStoreFilter({ books, genres, languages, formats }) {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedFormats, setSelectedFormats] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleChange = (value, selected, type) => {
    const updateFn = {
      genre: setSelectedGenres,
      language: setSelectedLanguages,
      format: setSelectedFormats,
    }[type];

    updateFn((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const clearFilters = () => {
    setSelectedGenres([]);
    setSelectedLanguages([]);
    setSelectedFormats([]);
  };

  const filteredBooks = books.filter((book) => {
    if (selectedGenres.length && !selectedGenres.includes(book.genre))
      return false;
    if (selectedLanguages.length && !selectedLanguages.includes(book.language))
      return false;
    if (selectedFormats.length && !selectedFormats.includes(book.format))
      return false;
    return true;
  });

  return (
    <div className="min-h-screen  bg-neutral-dark">
      <div className="lg:hidden fixed  left-4 z-40 top-1 pt-20">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-white rounded-md shadow-sm"
          aria-label="Toggle filters"
        >
          {isSidebarOpen ? <FiX size={24} /> : <FiFilter size={24} />}
        </button>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0  bg-black bg-opacity-50 lg:hidden z-20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          <div
            className={`fixed lg:relative rounded-md top-0 left-0 h-full w-64  transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 transition-transform duration-300 ease-in-out z-30 border-r border-border overflow-y-auto mt-16 lg:mt-0`}
          >
            <Sidebar
              genres={genres}
              languages={languages}
              formats={formats}
              selectedGenres={selectedGenres}
              selectedLanguages={selectedLanguages}
              selectedFormats={selectedFormats}
              onChange={handleChange}
              clearFilters={clearFilters}
            />
          </div>

          <div className="w-full max-w-full px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-lg text-muted-foreground">
                    No books match your filters
                  </p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-foreground transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

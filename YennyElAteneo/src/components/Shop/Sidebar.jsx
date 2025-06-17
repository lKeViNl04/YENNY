import { FiX } from "react-icons/fi";

export default function Sidebar({
  genres,
  languages,
  formats,
  selectedGenres,
  selectedLanguages,
  selectedFormats,
  onChange,
  clearFilters
}) {
  return (
    <div className="p-4 bg-black/70 text-white ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-heading font-heading">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-sm text-primary hover:text-accent-red transition-colors"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Genres</h3>
          <div className="space-y-2">
            {genres.map(genre => (
              <label key={genre} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedGenres.includes(genre)}
                  onChange={() => onChange(genre, selectedGenres, "genre")}
                  className="rounded border-border text-primary focus:ring-primary"
                />
                <span>{genre}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {languages.map(language => (
              <button
                key={language}
                onClick={() => onChange(language, selectedLanguages, "language")}
                className={`px-3 py-1 border ${selectedLanguages.includes(language) ? "bg-primary text-accent-blue" : "border-border"} rounded-md hover:border-primary transition-colors`}
              >
                {language}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Formats</h3>
          <div className="flex flex-wrap gap-2">
            {formats.map(format => (
              <button
                key={format}
                onClick={() => onChange(format, selectedFormats, "format")}
                className={`px-3 py-1 border ${selectedFormats.includes(format) ? "bg-primary text-accent-blue" : "border-border"} rounded-md hover:border-primary transition-colors`}
              >
                {format}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 

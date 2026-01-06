const FilterForm = ({ filterText, onFilterChange }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="search" style={{ marginRight: '10px', fontWeight: 'bold' }}>
        Filter by Title:
      </label>
      <input
        id="search"
        type="text"
        value={filterText}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Type to filter..."
        style={{ padding: '8px', width: '300px' }}
      />
    </div>
  );
};

export default FilterForm;
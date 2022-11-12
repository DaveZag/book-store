const Form = () => (
  <div className="form-container flex flex-col">
    <h2 className="form-title">Add new Book</h2>
    <form className="form flex">
      <input
        type="text"
        className="book-name-input input"
        placeholder="Book title..."
        required
      />
      <select className="genre-input input">
        <option value="action">Action</option>
        <option value="adventure">Adventure</option>
        <option value="drama">Drama</option>
      </select>

      <button type="button" className="submit-btn">
        Add book
      </button>
    </form>
  </div>
);

export default Form;

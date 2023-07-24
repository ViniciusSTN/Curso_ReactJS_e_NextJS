import './styles.css';

export const TextInput = ({ searchvalue, handleChange }) => {
  return (
    <input
      className='text-input'
      type="search"
      onChange={handleChange}
      value={searchvalue}
      placeholder='Type your search'
    />
  );
}
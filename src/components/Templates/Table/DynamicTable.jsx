import React from 'react';
import PropTypes from 'prop-types';
import './DynamicTable.css';

export const DynamicTable = ({ data, onButtonClickDelete }) => {
  if (!data || data.length === 0) {
    return <p>No data to display.</p>;
  }
  const keys = Object.keys(data[0]);

  return (
    <table className="dynamic-table">
      <thead>
        <tr>
          {keys.map((key, index) => (
            <th key={index}>{key}</th>
          ))}
          <th>Actions</th> {/* Add a header for the button column */}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>{/* Remove any whitespace between tags */}
            {keys.map((key, colIndex) => (
              <td key={colIndex}>{row[key]}</td>
            ))}
            <td>
               {/* Add a button that calls the onButtonClick function with the current row  */}
              <button onClick={() => onButtonClickDelete(row)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

DynamicTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
  onButtonClickDelete: PropTypes.func.isRequired, // Add a prop type for the button click handler
};

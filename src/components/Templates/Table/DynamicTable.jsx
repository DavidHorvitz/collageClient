import React from 'react';
import PropTypes from 'prop-types';
import './DynamicTable.css'; // import the CSS file for styling

export const DynamicTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data to display.</p>;
  }
  const keys = Object.keys(data[0]); // Get the keys from the first object in the data array

  return (
    <table className="dynamic-table">
      <thead>
        <tr>
          {/* Render table headers based on the keys */}
          {keys.map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Render table rows based on the data prop and keys */}
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {/* Render table cells based on the keys */}
            {keys.map((key, colIndex) => (
              <td key={colIndex}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

DynamicTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({}) // Use a dynamic shape for the objects in the data array
  ).isRequired,
};

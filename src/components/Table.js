// components/Table.js
export default function Table({ data }) {
    if (!data || data.length === 0) {
      return <p className="text-center">No data available</p>;
    }
  
    // Get table headers from the keys of the first object
    const headers = Object.keys(data[0]);
  
    return (
      <div className="overflow-x-auto mt-5  flex-col flex gap-5 text-xs "> 
      <div className="container m-auto border p-3 rounded-full shadow-xl shadow-blue-50  w-full" >
        <input type="text" className="  w-full  outline-none   " />
      </div>

        <table className="container m-auto border border-gray-300">
          <thead className="bg-gray-200 sticky top-0 z-10"> {/* Sticky header */}
            <tr>
              {headers.map((header) => (
                <th key={header} className="border border-gray-300 p-2 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {headers.map((header) => (
                  <td key={`${rowIndex}-${header}`} className="border border-gray-300 p-2">
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
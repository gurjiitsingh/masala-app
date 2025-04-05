import React, { useEffect, useState } from 'react';

const data = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Orange' },
  { id: 4, name: 'Mango' },
  { id: 5, name: 'Grapes' },
];

export default function SearchForm({handleSearchForm}:{handleSearchForm:(e:string)=>void}) {
  const [query, setQuery] = useState('');
  // console.log("query--------",query)
  // const filteredData = data.filter(item =>
  //   item.name.toLowerCase().includes(query.toLowerCase())
  // );
  useEffect(()=>{
    handleSearchForm(query)
  },[query])
 

  return (
    <div className="max-w-md ">
      <input
        type="text"
        placeholder="Gerichte suchen..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full seach-form"
      />
      {/* <ul className="list-disc pl-5">
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <li key={item.id}>{item.name}</li>
          ))
        ) : (
          <li className="text-gray-500">No results found.</li>
        )}
      </ul> */}
    </div>
  );
}
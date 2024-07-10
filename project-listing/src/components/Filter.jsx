function Filter() {
    const filters = ['All Stays', 'Norway', 'Finland', 'Sweden', 'Switzerland'];
  
    return (
      <div className="flex flex-row p-8 w-full -mt-8 max-w-7xl border rounded-lg border-gray-600 backdrop-blur-sm" style={{ backgroundColor: 'rgba(32, 41, 58, .85)'}}>
        {filters.map((filter, index) => (
          <a className="mx-3 text-white font-semibold mt-2 cursor-pointer" key={index}>{filter}</a>
        ))}
  
        <div className="flex flex-row ml-auto items-center gap-6">
          <label className="flex cursor-pointer gap-2">
            <input type="checkbox" value="synthwave" className="toggle theme-controller" />
            <span className="label-text text-white">Superhost</span>
          </label>
  
          <select className="select select-ghost w-full max-w-xs bg-inherit text-white border border-slate-300 mr-5">
            <option disabled selected>Property type</option>
            <option>1 bedroom</option>
            <option>2 bedrooms</option>
          </select>
        </div>
      </div>
    );
  }
  
  export default Filter;
  
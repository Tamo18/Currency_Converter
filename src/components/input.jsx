import React from "react";


function InputBox({
    label,
    amount,
    amountChange,
    currencyOption=[],
    currencyChange,
    selectCurrency="inr",
    className = "",
}) {
    
 const amountId=React.useId()   
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e)=>amountChange && amountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={selectCurrency}
                onChange={(e)=>currencyChange && currencyChange(e.target.value)}    
                >    
                {currencyOption.map((currencyVal)=>
                <option 
                key={currencyVal}
                value={currencyVal}>
                    {currencyVal}
                </option>
                )}
                </select>
            </div>
        </div>
    );
}

export default InputBox;

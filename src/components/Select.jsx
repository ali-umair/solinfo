import React from 'react'

export default function Select(props) {

    return (
        <div className='w-[300px]'>
            {/* <label for="underline_select" class="sr-only">Underline select</label> */}
            <select id="underline_select" defaultValue="earth" className="block py-2.5 px-0 mt-3 mb-3 w-full text-sm text-slate-400 bg-transparent border-b-2 border-green-400 appearance-none focus:outline-none focus:ring-0 focus:border-green-400 peer">
                <option value={props.bodies}>{props.bodies}</option>
            </select>
            {/* {console.log(document.querySelector('#underline_select').value)} */}
        </div>
    )
}

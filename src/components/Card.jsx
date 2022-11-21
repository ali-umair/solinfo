import React from 'react'

// https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true&data=id,name,englishName,isPlanet,moons,desity,gravity,escape,bodyType
// https://api.le-systeme-solaire.net/rest/bodies/Uranus?data=moons,moon,rel

export default function Card(props) {
    return (
        <div className="max-w-7xl px-4 py-2 my-2">
            <div className="w-[300px] h-auto border-[3px] hover:border-green-400 rounded-xl shadow-xl duration-500 ease-in-out hover:shadow-2xl xl:ml-[5px]">
                <div
                    className="border-b border-slate-200 bg-white rounded-md shadow-md relative z-10 divide-y divide-solid divide-gray-300 space-y-9">
                    <div>
                        <div className="uppercase tracking-wider text-white text-center rounded-md w-[320px] -ml-[13px] mt-5 mb-5 p-3 border border-green-400 bg-green-400 font-bold">
                            {props.data.bodyType}
                        </div>
                        <div className="flex justify-center tracking-wider text-green-400">
                            <div className="text-3xl font-light">{props.data.englishName}</div>
                        </div>
                    </div>

                    <div className="w-[230px] ml-8">
                        <div className="flex-col text-center space-y-3 my-5">
                            <div>
                                <div className="text-xs font-thin tracking-widest text-slate-500">Scientific Name</div>
                                <div className="text-xs font-bold tracking-widest text-slate-500">{props.data.name}</div>
                            </div>
                            <div>
                                <div className="text-xs font-thin tracking-widest text-slate-500">Moons</div>
                                <div className="text-xs font-bold tracking-widest text-slate-500">{props.data.moons ? props.data.moons.length : 0}</div>
                            </div>
                            <div>
                                <div className="text-xs font-thin tracking-widest text-slate-500">Gravity</div>
                                <div className="text-xs font-bold tracking-widest text-slate-500">{props.data.gravity} <span>m/s<sup>2</sup></span></div>
                            </div>
                            <div>
                                <div className="text-xs font-thin tracking-widest text-slate-500">Escape Velocity</div>
                                <div className="text-xs font-bold tracking-widest text-slate-500">{props.data.escape} <span>m/s</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                    {/* <a href="#">
                        <div className="uppercase text-green-400 text-center rounded-b-md w-auto pt-8 pb-[30px] text-xs font-bold -mt-2 relative z-0 hover:cursor-pointer hover:text-green-600 hover:bg-green-200">
                            Learn more about {props.data.englishName}
                        </div>
                    </a> */}
            </div>
        </div>
    )
    }

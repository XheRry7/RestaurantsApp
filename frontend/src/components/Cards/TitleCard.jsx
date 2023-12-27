import React from 'react'

export default function TitleCard({ name }) {
    return (
        <>
            <div className="md:mb-5 bg-[#ff6900] text-white text-3xl h-36 items-center flex flex-row justify-around mt-16 md:mt-0  " style={{
               
            }}>
                <h2>{name}</h2>
            </div>
        </>
    );
}

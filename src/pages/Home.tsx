import React from "react";
import "./style.scss";

interface Props {}

const Home: React.FC = (props: Props) => {
    return (
        <div className="flex flex-col justify-center items-center select-none min-h-screen bg-gradient-to-br from-gray-900  to-blue-700">
            <h1 className="text-6xl text-green-500 border-b-4 pb-4">
                Hello World!!
            </h1>
        </div>
    );
};

export default Home;

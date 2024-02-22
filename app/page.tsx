import Image from "next/image";
// import SearchBar from "./compoments/SearchBar";
import SearchContainer from "./compoments/SearchContainer";
import { Divider } from 'antd';
import FixedHeader from "./compoments/FixedHeader";

export default function Home() {
    return (
        <>
            <FixedHeader />
            <main className="flex-row min-h-screen flex-col items-center justify-between ">
                <SearchContainer />
            </main>
        </>
    );
}

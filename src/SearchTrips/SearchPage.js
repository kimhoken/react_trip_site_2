import react, { useState } from "react";
import { Link} from "react-router-dom";
import { PackageList } from "../Packages/PackageList";


const SearchPage = () => {
    const [search, setSearch] = useState('');
    const [foreign, setFordign] = useState('');   

    const triplist = ()=>{
        let showlist = PackageList;
        if(search.trim()){
            showlist = showlist.filter((item)=> item.title.includes(search.trim()))
        }
        console.log(triplist);

        if(foreign.trim())
            showlist =[...showlist].filter((res)=>res.type===foreign);


        return showlist;
    }
    function listinfo() {
        {
            return triplist().map((item) => {
                return (
                    <Link to={'/SearchTrips/PackageInfo/'+item.id}>
                    <li>
                        <div>
                            <img src={item.img} width={'90px'} height={'90px'} />
                            <div>{item.title}</div>
                            <div>가격: {item.price}</div>
                            <div>나라: {item.country}</div>
                            <div>유형: {item.type}</div>
                        </div>
                    </li>
                    </Link>
                )
            })
        }
    }


    return (
        <div>
            <header>
                <h2>여행 검색</h2>
            </header>
            <nav>
                <p>검색: <input value={search} onChange={(e) => { setSearch(e.target.value) }} /></p>
                <p>[국내/해외]<select value={foreign} onChange={(e) => { setFordign(e.target.value) }}>
                    <option value={''}>[국내/해외]</option>
                    <option value={'domestic'}>국내</option>
                    <option value={'overseas'}>해외</option>
                </select>
                </p>
            </nav>
            <div className="result-box">
                <div className="result-title">
                    검색결과
                </div>
                <div className="prodlist">
                    <ul className="list-main">
                        {listinfo()}
                    </ul>
                </div>
            </div>
            <div>
                
                    
            </div>

        </div>
    )
}



export default SearchPage
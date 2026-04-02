import react, { useState } from "react";
import { Link } from "react-router-dom";
import { PackageList } from "../Packages/PackageList";
import { DomesticPackageList } from "../Packages/DomesticPackageList";


const SearchPage = () => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const sortlist =[
        {name:'::정렬기준 선택::', value:''},
        {name:'오름차순', value:'asc'},
        {name:'내림차순', value:'desc'},
        {name:'평점 높은순', value:'rating'},
        {name:'리뷰수 많은순', value:'review'},
        {name:'국내', value:'domestic'},
        {name:'해외', value:'overseas'},
    ]
    const sortview =()=>{
        {
            return sortlist.map((item)=>{
                return(
                    <option value={item.value} onChange={(e)=>{setSort(e.target.value)}}>{item.name}</option> 
                )
            })
        }
    }    

    const triplist = () => {
        let showlist = [...PackageList,...DomesticPackageList];
        if (search.trim()) {
            showlist = showlist.filter((item) => item.title.includes(search.trim()))
        }       

        if (sort.trim()==='domestic')
            showlist = [...showlist].filter((res) => res.type === sort);
        else if( sort.trim()==='overseas')
            showlist = [...showlist].filter((res) => res.type === sort);
        else if( sort.trim()==='asc')
            showlist = [...showlist].sort((a,b)=>a.country.localeCompare(b.country));
        else if(sort. trim()==='desc')
            showlist = [...showlist].sort((a,b)=>b.country.localeCompare(a.country));
        else if( sort.trim()==='rating')
            showlist = [...showlist].sort((a,b)=>b.rating - a.rating);
        else if(sort.trim()==='review')
            showlist = [...showlist].sort((a,b)=>b.reviewCount - a.reviewCount);



        return showlist;
    }
    function listinfo() {
        {
            return triplist().map((item) => {
                return (
                    <Link to={'/SearchTrips/PackageInfo/' + item.id}>
                        <li>
                            <div>
                                <img src={item.image} width={'90px'} height={'90px'} />
                                <div>{item.title}</div>
                                <div>가격: {item.price}</div>
                                <div>나라: {item.country}</div>
                                <div>평점: {item.rating}</div>
                                <div>리뷰수: {item.reviewCount}</div>

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
                <p>[조건]<select value={sort} onChange={(e) => { setSort(e.target.value) }}>
                    {sortview()}
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
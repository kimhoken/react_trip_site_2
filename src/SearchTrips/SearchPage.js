import './SerachPage.css';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PackageList } from "../Packages/PackageList";
import { DomesticPackageList } from "../Packages/DomesticPackageList";
import { PackageDetail } from '../Packages/PackageDetail';


const SearchPage = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const sortlist = [
        { name: '::정렬기준::', value: '' },
        { name: '오름차순', value: 'asc' },
        { name: '내림차순', value: 'desc' },
        { name: '평점 높은순', value: 'rating' },
        { name: '리뷰수 많은순', value: 'review' }
    ]

    const addFavorite = (item) => {
        const saved = JSON.parse(localStorage.getItem("favorites")) || []

        const exists = saved.find((f) => f.id === item.id)
        if (exists) {
            alert("이미 즐겨찾기에 있습니다.")
            return
        }

        const updated = [...saved, item]

        localStorage.setItem("favorites", JSON.stringify(updated))

        alert("즐겨찾기에 추가되었습니다.")
    }

    const sortview = () => {
        {
            return sortlist.map((item) => {
                return (
                    <option value={item.value} onChange={(e) => { setSort(e.target.value) }}>{item.name}</option>
                )
            })
        }
    }

    const triplist = () => {
        let showlist = [...PackageList, ...DomesticPackageList];


        showlist = showlist.map((item) => {
            const detail = PackageDetail.find((d) => d.id == item.id);
            return {
                ...item, detail: detail
            }
        })



        if (search.trim()) {
            showlist = showlist.filter((item) => item.title.includes(search.trim()))
        }

        if (sort.trim() === 'domestic')
            showlist = [...showlist].filter((res) => res.type === sort);
        else if (sort.trim() === 'overseas')
            showlist = [...showlist].filter((res) => res.type === sort);
        else if (sort.trim() === 'asc')
            showlist = [...showlist].sort((a, b) => a.country.localeCompare(b.country));
        else if (sort.trim() === 'desc')
            showlist = [...showlist].sort((a, b) => b.country.localeCompare(a.country));
        else if (sort.trim() === 'rating')
            showlist = [...showlist].sort((a, b) => b.rating - a.rating);
        else if (sort.trim() === 'review')
            showlist = [...showlist].sort((a, b) => b.reviewCount - a.reviewCount);



        return showlist;
    }
    function listinfo() {
        {
            return triplist().map((item) => {
                return (
                    <li>
                        <Link to={'/Packages/' + item.type + '/' + item.contient + '/' + item.country + '/' + item.id}>
                            <div>
                                <img src={item.image} width={'90px'} height={'90px'} /></div>
                            <div className='package-summary'>
                                <div>{item.title}</div>
                                <div>나라: {item.country}</div>
                                <div>한줄평: {item.detail.summary}</div>
                                <div>일수: {item.detail.duration}</div>
                                <div><span>★</span>{item.rating}
                                    ({item.reviewCount})</div>
                            </div>
                        </Link>
                        <div className='price-layer'>
                            <div>{item.price}</div>
                            <div className='button-layer'>
                                <button type='button' onClick={()=>{navigate(`/Packages/${item.type}/${item.contient}/${item.country}/${item.id}`)}}>상세보기</button>
                                <button type='button' onClick={() => { addFavorite(item) }}>즐겨찾기<span>♥</span></button>
                            </div>
                        </div>
                    </li>
                )
            })
        }
    }


    return (
        <div className='serachpage'>
            <header>
                <h2>여행 검색</h2>
            </header>
            <nav className='serach-header'>
                <p>검색: <input value={search} onChange={(e) => { setSearch(e.target.value) }} size={'30'} /></p>
            </nav>
            <div className="result-box">
                <div className="result-title">
                    <p>검색결과</p>
                    <p>[조건]<select value={sort} onChange={(e) => { setSort(e.target.value) }} >
                        {sortview()}
                    </select>
                    </p>

                </div>
                <div className="prodlist">
                    <ul className="list-main">
                        {listinfo()}
                    </ul>
                </div>
            </div>

        </div>
    )
}



export default SearchPage
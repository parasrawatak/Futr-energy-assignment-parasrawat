import React from 'react';
import "./page2.scss";
import planeImg from "../images/plane-img.png";
import card1 from "../icon/travel-icon.png";
import card2 from "../icon/travel-icon2.png";
import card3 from "../icon/travel-icon3.png";
import card4 from "../icon/travel-icon4.png";
import imgLondon from "../images/London.jpg";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import blog1 from "../images/blog-image.jpg";
import blog2 from "../images/blog-image0.jpg";
export default function Page2() {
  return (
    <div className='page-main'>
    <div className="heading-h2">
    <h2>OUR JOURNEY OF TRAVEL</h2>
    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
    <div className="plane">
        <p className="plane-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
        <img className="planeImg"src={planeImg} alt="" />
    </div>
    </div>
    <button className='btn-main'>Read more</button>
    <div className="travel-main">

    
    <hr class="hr-text gradient" data-content="SELECT OFFERS FOR TRAVELING"/>
    <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
    <div className="cardholder">
    <div className="card">
        <img src={card1} alt="" className="card-img" />
        <span className="card-title">Different Countrys</span>
        <span className="card-text">There are many variations of passages of Lorem ipsum</span>
        <button className='btn-main'>Read more</button>
    </div>
    <div className="card">
        <img src={card2} alt="" className="card-img" />
        <span className="card-title">Different Countrys</span>
        <span className="card-text">There are many variations of passages of Lorem ipsum</span>
        <button className='btn-main'>Read more</button>
    </div>
    <div className="card">
        <img src={card3} alt="" className="card-img" />
        <span className="card-title">Different Countrys</span>
        <span className="card-text">There are many variations of passages of Lorem ipsum</span>
        <button className='btn-main'>Read more</button>
    </div>
    <div className="card">
        <img src={card4} alt="" className="card-img" />
        <span className="card-title">Different Countrys</span>
        <span className="card-text">There are many variations of passages of Lorem ipsum</span>
        <button className='btn-main'>Read more</button>
    </div>
    </div>

    <hr class="hr-text gradient" data-content="BEST THINGS TO DO, LONDON"/>
    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
    </div>

    <img src={imgLondon} className="imgLondon" alt="" />
    <div className="travel2">


    <hr class="hr-text gradient" data-content="BEST PLACES AROUND"/>
    <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by Injected humour, or randomised words which don't look even slightly believable.</span>
    <div className="cardholder">
    <div className="card travel">
        <img src={img1} alt="" className="travel-img" />
        <span className="card-title1">Holiday Tour</span>
        <span className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in soe suffk even slightly believable. If y be sure there</span>
    </div>
    <div className="card travel">
        <img src={img2} alt="" className="travel-img" />
        <span className="card-title1">New York</span>
        <span className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in soe suffk even slightly believable. If y be sure there</span>
    </div>
    <div className="card travel">
        <img src={img3} alt="" className="travel-img" />
        <span className="card-title1">London</span>
        <span className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in soe suffk even slightly believable. If y be sure there</span>
    </div>
    </div>
    </div>
 
    <div className="italy">
        <div className="italy-con">
        <h1>ITALY TRAVEL GUIDE</h1>
        <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</span>
    <div className="btn-con">
    <button className='btn-main ital'>Book Now</button>
    <button className='btn-main ital'>Get More</button>
        </div>
    </div>
    </div>
    <div className="travel3">

    <hr class="hr-text gradient" data-content="OUR BLOG"/>
    <span>Lorem ipsum is that it has a more-or-less normal distribution of letters.</span>
    <div className="cardholder">
    <div className="card-blog">
        <div className="blog-img">
        <img src={blog2} alt="" className="blog-img" />
        <span className="date">16 July 2019</span>
        </div>
        <div className="blog-con">
            <div>
        <span className="postby">Post By : Nisha Sharma</span>
            </div>
        <div className="likecomm">
            <div className="like">
            <span className="postby">05</span>
            <span> Like</span>
            </div>
            <div className="comment">
            <span className="postby">06</span>
            <span> Comment</span>
            </div>
        </div>
        </div>
        <h3>More places to Explore</h3>
        <span className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</span>
    </div>
    <div className="card-blog">
        <div className="blog-img">
        <img src={blog1} alt="" className="blog-img" />
        <span className="date">21 August 2019</span>
        </div>
        <div className="blog-con">
            <div>
        <span className="postby">Post By : Nisha Sharma</span>
            </div>
        <div className="likecomm">
            <div className="like">
            <span className="postby">05</span>
            <span> Like</span>
            </div>
            <div className="comment">
            <span className="postby">06</span>
            <span> Comment</span>
            </div>
        </div>
        </div>
        <h3>More places to Explore</h3>
        <span className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</span>
    </div>
    </div>
    </div>
    </div>
  )
}
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import '../resources/Slick.css';

export default class Slick extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			cssEase: '1',
            centerMode:true
		};

		return (
			<div>
				<h2> 안녕하세요 오신 것을 환영합니다. </h2>
				<Slider {...settings}>
					<div className="card-wrapper">
						<div className="card">
							<div className="card-image">
								<img src="https://chosunbiz-chosunbiz-prod.cdn.arcpublishing.com/resizer/Wmk0cNRrVz-avVqN0ydEE2rmLbE=/430x225/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/4LRZUOQKVJZWIGE7PP5ZAYX7B4.jpg" />
							</div>
							<ul className="social-icons">
								<li>
									<a href="#">
										<ThumbUpIcon />
									</a>
								</li>
							</ul>
							<div className="details">
								<h2>
									강아지 <span>포메라니안</span>
								</h2>
							</div>
						</div>
					</div>
                    <div className="card-wrapper">
						<div className="card">
							<div className="card-image">
								<img src="https://cocotimes.kr/wp-content/uploads/2020/09/istockphoto-936318600-170667a.jpg" />
							</div>
							<ul className="social-icons">
								<li>
									<a href="#">
										<ThumbUpIcon />
									</a>
								</li>
							</ul>
							<div className="details">
								<h2>
									강아지 <span>포메라니안</span>
								</h2>
							</div>
						</div>
					</div>
                    <div className="card-wrapper">
						<div className="card">
							<div className="card-image">
								<img src="https://t1.daumcdn.net/cfile/blog/99D4583F5B5D7E5129" />
							</div>
							<ul className="social-icons">
								<li>
									<a href="#">
										<ThumbUpIcon />
									</a>
								</li>
							</ul>
							<div className="details">
								<h2>
									강아지 <span>포메라니안</span>
								</h2>
							</div>
						</div>
					</div>
                    <div className="card-wrapper">
						<div className="card">
							<div className="card-image">
								<img src="https://i.pinimg.com/originals/52/b3/9c/52b39cd0e5b9499fc2e0f3ec7184202f.jpg" />
							</div>
							<ul className="social-icons">
								<li>
									<a href="#">
										<ThumbUpIcon />
									</a>
								</li>
							</ul>
							<div className="details">
								<h2>
									강아지 <span>포메라니안</span>
								</h2>
							</div>
						</div>
					</div>
                    <div className="card-wrapper">
						<div className="card">
							<div className="card-image">
								<img src="https://cdn.imweb.me/upload/S201907024711f2efb4922/6fac07f21c1c9.jpg" />
							</div>
							<ul className="social-icons">
								<li>
									<a href="#">
										<ThumbUpIcon />
									</a>
								</li>
							</ul>
							<div className="details">
								<h2>
									강아지 <span>포메라니안</span>
								</h2>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		);
	}
}

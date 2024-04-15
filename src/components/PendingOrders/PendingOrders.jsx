import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function PendingOrders() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <div className=" w-3/4 h-3/5 m-auto mt-0 pl-8">
      <div className="mt-20 p-8 bg-slate-100 rounded-xl">
        <h1 className=" text-2xl font-bold text-green-700 mb-4">
          Pending Orders
        </h1>
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="bg-white h-[300px]  text-black "
            >
              <div className=" h-40 flex justify-center items-center rounded-t-xl mt-2">
                <img src={d.img} alt="" className=" h-40 w-11/12 rounded-xl" />
              </div>
              <div className="flex flex-col items-center justify-center relative top-4">
                <p className="text-xl font-semibold text-green-700">{d.name}</p>
                <p className="text-center ">{d.hostName}</p>
                <p className="text-center">{d.deadline}</p>
              </div>
              "
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    img: `/assets/Images/laptop.jpg`,
    name: `Host account name`,
    hostName: `Name of the event`,
    deadline: `Deadline: DD/MM/YY`,
  },
  {
    img: `/assets/Images/laptop.jpg`,
    name: `Host account name`,
    hostName: `Name of the event`,
    deadline: `Deadline: DD/MM/YY`,
  },
  {
    img: `/assets/Images/laptop.jpg`,
    name: `Host account name`,
    hostName: `Name of the event`,
    deadline: `Deadline: DD/MM/YY`,
  },
  {
    img: `/assets/Images/laptop.jpg`,
    name: `Host account name`,
    hostName: `Name of the event`,
    deadline: `Deadline: DD/MM/YY`,
  },
  {
    img: `/assets/Images/laptop.jpg`,
    name: `Host account name`,
    hostName: `Name of the event`,
    deadline: `Deadline: DD/MM/YY`,
  },
];

export default PendingOrders;

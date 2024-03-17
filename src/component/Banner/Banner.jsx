function Banner() {
  return (
    <div className="hero rounded-3xl min-h-screen bg-[url('https://i.ibb.co/2yhyb8v/johnathan-macedo-4-NQEvx-W2-4w-unsplash.jpg')]">
      <div className="hero-overlay rounded-3xl bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
          <p className="mb-5">
            We have Expert Chef, There are might Every Italian or Chaines food cooked, <br /> Your Choice we are first Priorities.Please stay with us Every time</p>
          <div className="space-x-3">
          <button className="btn bg-[#0BE58A] border-none rounded-full">Explore Now</button>
          <button className="btn btn-outline text-white rounded-full">Our Feedback</button> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

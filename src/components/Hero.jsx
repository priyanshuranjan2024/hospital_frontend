

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          quidem ducimus numquam ullam aut porro recusandae eum ut neque
          obcaecati dolores magni consequuntur dignissimos, eaque fuga tempore
          error, enim et alias dicta velit laborum nesciunt. Commodi doloribus
          reprehenderit praesentium ex quae maiores. Omnis natus vero unde
          eaque, alias adipisci repellat?
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;

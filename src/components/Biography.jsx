

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="about" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          architecto porro cum libero recusandae, repudiandae velit sapiente
          eveniet aliquid quaerat nemo fugit animi natus quibusdam dignissimos
          accusantium saepe quae incidunt, debitis dolor provident nam! Nobis
          accusamus architecto officia nemo eaque rem expedita, iusto voluptate
          error ad? Amet, nisi error. Sunt?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi
          quaerat quod, enim in excepturi incidunt minus corporis magnam
          molestiae sed eum neque quis et repellat blanditiis modi aut nesciunt.
          Recusandae corporis maxime asperiores nostrum.
        </p>
      </div>
    </div>
  );
};

export default Biography;

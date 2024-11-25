const Details = () => {
  return (
    <article className="details">
      <ul role="list" className="contact__information">
        <h3 className="title">My Contact :</h3>
        <li role="listitem">
          {" "}
          <span className="icon">
            {" "}
            <img src="https://icon-library.com/images/location-png-icon/location-png-icon-18.jpg" />{" "}
          </span>{" "}
          <span className="text">Nanasi kecamatan poigar</span>{" "}
        </li>
        <li role="listitem">
          {" "}
          <span className="icon">
            {" "}
            <img src="https://img2.thaipng.com/20180627/vub/kisspng-telephone-call-computer-icons-home-business-phon-telefono-5b3448f5b37367.650218461530153205735.jpg" />{" "}
          </span>{" "}
          <span className="text">081527819057</span>{" "}
        </li>
        <li role="listitem">
          {" "}
          <span className="icon">
            {" "}
            <img src="https://tse4.mm.bing.net/th?id=OIP.Lqg4orY6pE_HeBRwDLHy9wHaHa&pid=Api&P=0&h=180" />{" "}
          </span>{" "}
          <span className="text">scivotangka92499@gmail.com</span>{" "}
        </li>
        <li role="listitem">
          {" "}
          <span className="icon">
            {" "}
            <img src="https://tse4.mm.bing.net/th?id=OIP.K3eTCYgVMc75Wm45wifs0gHaHa&pid=Api&P=0&h=180" />{" "}
          </span>{" "}
          <span className="text">scxvztangka_</span>{" "}
        </li>
        <li role="listitem">
          {" "}
          <span className="icon">
            {" "}
            <img src="https://www.pngplay.com/wp-content/uploads/3/Black-Facebook-Logo-Transparent-File.png" />{" "}
          </span>{" "}
          <span className="text">Gill erza Tangka</span>{" "}
        </li>
      </ul>
      <ul role="list" className="education">
        <h3 className="title">Education</h3>
        <li role="listitem">
          <h4 className="sub--title">Schools:</h4>
          <ul role="list" className="sublist">
            <li role="listitem" className="sublistitem">
              {" "}
              <span className="text sub--text">SMP Advent Nanasi</span>{" "}
              <span>2019</span>{" "}
            </li>
            <li role="listitem" className="sublistitem">
              {" "}
              <span className="text sub--text">SMK Negeri 1 Sinonsayang</span>{" "}
              <span>2022</span>{" "}
            </li>
            <li role="listitem" className="sublistitem">
              {" "}
              <span className="text sub--text">
                University Klabat Aermadidi
              </span>{" "}
              <span>--</span>{" "}
            </li>
          </ul>
        </li>
      </ul>
    </article>
  );
};

export default Details;

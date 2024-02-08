import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import carousel_1 from "../assets/about/1.png";
import carousel_2 from "../assets/about/2.png";
import carousel_3 from "../assets/about/3.png";
import carousel_4 from "../assets/about/4.png";
import carousel_5 from "../assets/about/5.png";
import carousel_6 from "../assets/about/6.png";
import carousel_7 from "../assets/about/7.png";
import carousel_8 from "../assets/about/8.png";
import carousel_9 from "../assets/about/9.png";
import carousel_10 from "../assets/about/10.png";
import carousel_11 from "../assets/about/11.png";
import carousel_12 from "../assets/about/12.png";
import carousel_13 from "../assets/about/13.png";


const About = () => {
  const imageData = [
    {
        label: "Ruang Kelas",
        alt: "image1",
        url: carousel_1
    },
    {
        label: "Image 2",
        alt: "image2",
        url: carousel_2
    },
    {
        label: "Image 3",
        alt: "image3",
        url: carousel_3
    },
    {
        label: "Image 4",
        alt: "image4",
        url: carousel_4
    },
    {
        label: "Image 5",
        alt: "image5",
        url: carousel_5
    },
    {
        label: "Image 6",
        alt: "image6",
        url: carousel_6
    },
    {
        label: "Image 7",
        alt: "image7",
        url: carousel_7
    },
    {
        label: "Image 8",
        alt: "image8",
        url: carousel_8
    },
    {
        label: "Image 9",
        alt: "image9",
        url: carousel_9
    },
    {
        label: "Image 10",
        alt: "image10",
        url: carousel_10
    },
    {
        label: "Image 11",
        alt: "image11",
        url: carousel_11
    },
    {
        label: "Image 12",
        alt: "image12",
        url: carousel_12
    },
    {
      label: "Image 13",
      alt: "image13",
      url: carousel_13
    }
  ];
  
  const renderSlides = imageData.map((image)=>(
    <div key={image.alt} className="carousel-content">
      <img src={image.url} alt={image.alt}/>
      <p className="legend">{image.label}</p>
    </div>
  ));

  return (
    <div className="about">
      <div className="content">
        <Carousel
          showArrows="{true}"
          autoPlay="{true}"
          infiniteLoop="{true}"
          className="carousel-container"
          showThumbs="{false}"
        >
          {renderSlides}
        </Carousel>
        <h1 className="title">Tentang Konser Amal Canisius</h1>
        <hr />
        <div className="hook">
          <p className="lead">
            <strong>Adil ka'talino, bacuramin ka'saruga, basingat ka'jubata</strong>
          </p>
          <p>
            Bersikaplah adil kepada sesama, dengan memandang kebaikan dari Surga,
            karena hidup manusia itu tergantung kepada Tuhan.<br />
            Ketiga hal tersebut merupakan pilar-pilar kehidupan Masyarakat adat suku
            Dayak.
          </p>
        </div>
        <p>
          Selamat datang di Konser Amal Canisius perdana, sebuah pergelaran musik
          yang diselenggarakan oleh Canisius College, Jakarta, bekerjasama dengan
          Universitas Musik Elisabeth dari Hiroshima.
        </p>
        <h1 className="title">Detail Acara</h1>
        <hr />
        <p>Tanggal: Minggu, 25 Februari</p>
        <p>Waktu : 16.30 - 19.00 WIB</p>
        <p>Tempat : <em>Sportshall</em> Canisius College, Jakarta</p>
        <h1 className="title">Misi dan Tujuan</h1>
        <hr />
        <p>
          Jantung dari acara ini berdetak dengan misi mulia - untuk mendukung usaha
          pendidikan di Keuskupan Ketapang yang terletak di Kalimantan Barat. Dengan
          menghadiri konser ini, Anda tidak hanya memanjakan diri dengan malam penuh
          pertunjukan musik yang eksklusif, tetapi juga berkontribusi pada tujuan
          yang lebih besar.
        </p>
        <h1 className="title">Para Penampil</h1>
        <hr/>
        <p>
          Bersiaplah untuk terpesona oleh musisi berbakat dari Universitas Musik
          Elisabeth, Hiroshima. Dengan kepiawaian dan semangat mereka, mereka
          berjanji akan memukau indra Anda dan membawa Anda ke dalam ranah melodi
          yang sublime.
        </p>
        <h1 className="title">Kampanye Amal</h1>
        <hr />
        <p>
          Seluruh hasil dari konser amal ini, termasuk penjualan tiket tempat duduk,
          akan didedikasikan untuk pendanaan inisiatif pendidikan di Keuskupan
          Ketapang. Kejujuran Anda akan secara langsung memengaruhi kehidupan para
          siswa dan pendidik, memupuk masa depan yang lebih cerah bagi komunitas.
        </p>
        <h1 className="title">Bergabunglah dengan Kami</h1>
        <hr />
        <p>
          Kami mengundang Anda untuk bergabung dengan kami untuk sebuah malam yang
          dipenuhi dengan musik memukau, persahabatan tulus, dan semangat memberi.
          Mari kita bersama-sama menciptakan perbedaan melalui kekuatan harmoni dan
          kasih sayang.
        </p>
        <p>
          Catat tanggalnya dan menjadi bagian dari acara bermakna ini. Bersama, kita
          bisa menciptakan perubahan positif dan menyebar kebahagiaan melalui musik.
        </p>
      </div>
    </div>
  );
}


export default About;
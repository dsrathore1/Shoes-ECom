import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div>
        <h1 className="font-bold m-4 text-3xl uppercase">Recommended</h1>
        <div className="h-full w-full flex flex-wrap justify-center items-center gap-10 my-10">
          <Card />
        </div>
      </div>
      <div>
        <h1 className="font-bold m-4 text-3xl uppercase">For Men</h1>
        <div className="h-full w-full flex flex-wrap justify-center items-center gap-10 my-10">
          <Card id={0} gender="MEN" />
        </div>
      </div>
      <div>
        <h1 className="font-bold m-4 text-3xl uppercase">For Women</h1>
        <div className="h-full w-full flex flex-wrap justify-center items-center gap-10 my-10">
          <Card id={0} gender="WOMEN" />
        </div>
      </div>
      <div>
        <h1 className="font-bold m-4 text-3xl uppercase">For Kids</h1>
        <div className="h-full w-full flex flex-wrap justify-center items-center gap-10 my-10">
          <Card id={0} gender="KIDS" />
        </div>
      </div>
      <Footer/>
    </>
  );
}

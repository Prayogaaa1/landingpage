// Import logo dari lokal
import bandungConcept from "@/assets/brands/bandungconcept.png";
import superFood from "@/assets/brands/superfood.png";
import elzano from "@/assets/brands/elzano.png";
import negrino from "@/assets/brands/negrito.png";
import megano from "@/assets/brands/megano.png";
import dempic from "@/assets/brands/denmic.png";
import elora from "@/assets/brands/mecca.png";
import gpro from "@/assets/brands/gpro.png";
import sawargi from "@/assets/brands/sawargi.png";
import dr360 from "@/assets/brands/dr360.png";
import m from "@/assets/brands/m.png";
import dathour from "@/assets/brands/dathour.png";
import retrofish from "@/assets/brands/rekofish.png";
import an40 from "@/assets/brands/an40.png";
import theCookies from "@/assets/brands/inacookies.png";

const brandLogos = [
  { id: 1, name: "Bandung Concept", image: bandungConcept },
  { id: 2, name: "Super Food", image: superFood },
  { id: 3, name: "ELZANO", image: elzano },
  { id: 4, name: "NEGRINO", image: negrino },
  { id: 5, name: "Megano", image: megano },
  { id: 6, name: "DEMPIC", image: dempic },
  { id: 7, name: "ELORA", image: elora },
  { id: 8, name: "G-Pro Photobooth", image: gpro },
  { id: 9, name: "Sawargi Offset", image: sawargi },
  { id: 10, name: "DR. 360°", image: dr360 },
  { id: 11, name: "M", image: m },
  { id: 12, name: "DATHOUR", image: dathour },
  { id: 13, name: "RETROFISH", image: retrofish },
  { id: 14, name: "AN40", image: an40 },
  { id: 15, name: "The Cookies", image: theCookies },
];

const BrandPartnersSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Brand yang telah bekerjasama dengan Kami
          </h2>
        </div>

        {/* Grid logo brand */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-8 items-center justify-items-center">
          {brandLogos.map((brand) => (
            <div key={brand.id} className="flex items-center justify-center">
              <img
                src={brand.image}
                alt={brand.name}
                className="max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default BrandPartnersSection;

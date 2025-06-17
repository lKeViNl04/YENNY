import FooterLink from "./FooterLink";
import FooterLinkTitle from "./FooterLinkTitle";

export default function Footer() {
  return (
    <footer className="tracking-wide bg-black pt-12 pb-4 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">

        <FooterLinkTitle title="Discover">
          <FooterLink>New Arrivals</FooterLink>
          <FooterLink>Bestsellers</FooterLink>
          <FooterLink>Upcoming Releases</FooterLink>
          <FooterLink>Staff Picks</FooterLink>
        </FooterLinkTitle>

        <FooterLinkTitle title="Help">
          <FooterLink>How to Buy</FooterLink>
          <FooterLink>Shipping & Delivery</FooterLink>
          <FooterLink>Returns & Exchanges</FooterLink>
          <FooterLink>Payment Methods</FooterLink>
        </FooterLinkTitle>

        <FooterLinkTitle title="About Us">
          <FooterLink>Our Story</FooterLink>
          <FooterLink>Store Locations</FooterLink>
          <FooterLink>Careers</FooterLink>
          <FooterLink>Contact</FooterLink>
        </FooterLinkTitle>

      </div>

      <div className="border-t text-center border-[#6b5f5f] pt-4 mt-8">
        <p className="text-gray-400 text-sm">© Yenny-El Ateneo. All rights reserved.</p>
      </div>
    </footer>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
import CardComp from "@/components/CardComp";

import HomeCards from "@/components/homeCards";
import HelpCards from "@/components/HelpCards";
import Footer from "@/components/Footer";
import HoverButton from "@/components/HoverButton";

export default function Home() {
  const firstCaro = [
    {
      imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2294125351/display_1500/stock-photo-digital-nomad-in-bali-a-man-on-a-business-trip-or-vacation-takes-a-coffee-break-in-a-busy-cafe-2294125351.jpg',
      title: 'Card 1',
      description: 'Description for Card 1',
    },
    {
      imageUrl: null, // No image for this card
      title: 'Card 2',
      description: 'Description for Card 2 without image',
    },
    {
      imageUrl: 'https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?size=626&ext=jpg',
      title: 'Card 3',
      description: 'Description for Card 3',
    },
    {
      imageUrl: "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799725.jpg?size=626&ext=jpg", // No image for this card
      title: 'Card 4',
      description: 'Description for Card 4 without image',
    },
    {
      imageUrl: 'https://img.freepik.com/free-photo/three-dimensional-house-model_23-2151003972.jpg?size=626&ext=jpg',
      title: 'Card 5',
      description: 'Description for Card 5',
    },
  ];
  const secondCaro = [
    {
      imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2294125351/display_1500/stock-photo-digital-nomad-in-bali-a-man-on-a-business-trip-or-vacation-takes-a-coffee-break-in-a-busy-cafe-2294125351.jpg',
      title: 'Card 1',
      description: 'Description for Card 1',
    },
    {
      imageUrl: 'https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?size=626&ext=jpg',
      title: 'Card 2',
      description: 'Description for Card 3',
    },
    {
      imageUrl: null, // No image for this card
      title: 'Card 3',
      description: 'Description for Card 3 without image',
    },
    {
      imageUrl: "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799725.jpg?size=626&ext=jpg", // No image for this card
      title: 'Card 4',
      description: 'Description for Card 4 without image',
    },
    {
      imageUrl: 'https://img.freepik.com/free-photo/three-dimensional-house-model_23-2151003972.jpg?size=626&ext=jpg',
      title: 'Card 5',
      description: 'Description for Card 5',
    },
  ];
  const thirdCar = [
    {
      imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2294125351/display_1500/stock-photo-digital-nomad-in-bali-a-man-on-a-business-trip-or-vacation-takes-a-coffee-break-in-a-busy-cafe-2294125351.jpg',
      title: 'Card 1',
      description: 'Description for Card 1',
    },
   
    {
      imageUrl: 'https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?size=626&ext=jpg',
      title: 'Card 2',
      description: 'Description for Card 3',
    },
    {
      imageUrl: "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799725.jpg?size=626&ext=jpg", // No image for this card
      title: 'Card 3',
      description: 'Description for Card 4 without image',
    },
    {
      imageUrl: null, // No image for this card
      title: 'Card 4',
      description: 'Description for Card 4 without image',
    },
    {
      imageUrl: 'https://img.freepik.com/free-photo/three-dimensional-house-model_23-2151003972.jpg?size=626&ext=jpg',
      title: 'Card 5',
      description: 'Description for Card 5',
    },
  ];
  const fourthCaro = [
    {
      imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2294125351/display_1500/stock-photo-digital-nomad-in-bali-a-man-on-a-business-trip-or-vacation-takes-a-coffee-break-in-a-busy-cafe-2294125351.jpg',
      title: 'Card 1',
      description: 'Description for Card 1',
    },  
    {
      imageUrl: 'https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?size=626&ext=jpg',
      title: 'Card 2',
      description: 'Description for Card 3',
    },
    {
      imageUrl: "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799725.jpg?size=626&ext=jpg", // No image for this card
      title: 'Card 3',
      description: 'Description for Card 4 without image',
    },
    {
      imageUrl: 'https://img.freepik.com/free-photo/three-dimensional-house-model_23-2151003972.jpg?size=626&ext=jpg',
      title: 'Card 4',
      description: 'Description for Card 5',
    },
    {
      imageUrl: null, // No image for this card
      title: 'Card 5',
      description: 'Description for Card 5 without image',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container-img">
        <div className="content-img">
          <h1 className="font-semibold text-5xl my-4">Discover a place <br />
            you'll love to live</h1>
          <div>
            <ToggleGroup type="single" >
              {/* <HoverButton /> */}
              <ToggleGroupItem value="a" className="text-lg backdrop-blur px-6">Buy</ToggleGroupItem>
              <ToggleGroupItem value="b" className="text-lg backdrop-blur px-6">Rent</ToggleGroupItem>
              <ToggleGroupItem value="c" className="text-lg backdrop-blur px-6">Sold</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="py-10">
            <div className="flex w-full max-w-sm items-center">
              <Input type="Search" placeholder="Search" className={"h-16 w-0 min-w-full bg-[#ffffff]"} />
              <Button variant="destructive" type="submit" className="text-white h-16 rounded-none rounded-r-lg"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" role="img" aria-label="" aria-hidden="true" class="w_32 h_32 svg"><path d="m20.756 18.876 6.155 6.154-1.88 1.881-6.155-6.155A9.269 9.269 0 0 1 13.3 22.61a9.31 9.31 0 1 1 9.31-9.31c0 2.091-.69 4.021-1.854 5.576zM13.3 19.95a6.65 6.65 0 1 0 0-13.3 6.65 6.65 0 0 0 0 13.3z" fill="#fff"></path></svg></Button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4">
        <div className="flex justify-center items-center text-4xl font-semibold text-slate-700 py-10">Explore homes on Trulia</div>
        <div className="px-80 flex items-center py-4">Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you.</div>
      </div>

      <div>
        <Carousel className="w-full max-w-full">
          <CarouselContent className="-ml-1">
            
          <CardComp cards={firstCaro}/>
          <CardComp cards={secondCaro}/>
          <CardComp cards={thirdCar}/>
          <CardComp cards={fourthCaro}/>
            
            {/* <CardComp />
            <CardComp />
            <CardComp /> */}

          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="py-10">
        <div className="flex justify-center items-center text-4xl font-semibold text-slate-700 py-10">Newly listed homes in Atlanta</div>
        <div className="flex">
          <Carousel className="w-full max-w-full">
            <CarouselContent className="-ml-1">
              <HomeCards />
              <HomeCards />
              <HomeCards />
              <HomeCards />
              <HomeCards />
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="pb-10">
        <div className="flex justify-center items-center text-4xl font-semibold text-slate-700 py-4">See how Trulia can help</div>
        <div className="flex">
          <HelpCards
            heading={"Buy a Home"}
            content={"With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home."}
            image={"https://www.trulia.com/images/icons/txl3/illustrations/BuyAHome.svg"}
            button={"Find a Home"}
          />
          <HelpCards
            heading={"Buy a Rent"}
            content={"With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home."}
            image={"https://www.trulia.com/images/icons/txl3/illustrations/RentAHome.svg"}
            button={"Find a Rent"}
          />
          <HelpCards
            heading={"Buy a Home"}
            content={"With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home."}
            image={"https://www.trulia.com/images/icons/txl3/illustrations/Neighborhoods.svg"}
            button={"Find a Home"}
          />
        </div>
      </div>
      <div className="text-center py-4">
        <div className="flex justify-center items-center text-2xl font-semibold text-slate-700 py-4">Check out a neighborhood</div>
        <div className="py-6">
          <div className="flex w-full max-w-sm items-center">
            <Input type="Search" placeholder="Search" className={"h-16 w-0 min-w-96 bg-[#f5f6f7]"} />
            <Button variant="destructive" type="submit" className="text-white h-16 rounded-none rounded-r-lg "><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" role="img" aria-label="" aria-hidden="true" class="w_32 h_32 svg"><path d="m20.756 18.876 6.155 6.154-1.88 1.881-6.155-6.155A9.269 9.269 0 0 1 13.3 22.61a9.31 9.31 0 1 1 9.31-9.31c0 2.091-.69 4.021-1.854 5.576zM13.3 19.95a6.65 6.65 0 1 0 0-13.3 6.65 6.65 0 0 0 0 13.3z" fill="#fff"></path></svg></Button>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="flex justify-center items-center text-2xl font-semibold text-[#052286] py-4">discover&nbsp;
          <Image
            src="https://www.trulia.com/images/icons/txl3/LocationLincolnIcon.svg"
            alt="Picture of the author"
            // className="transition-transform duration-300 ease-in-out group-hover:scale-110"
            // layout="responsive" // Adjust this based on your needs
            width={20} // Adjust width
            height={20} // Adjust height
          />&nbsp;
          a place  &nbsp;
          <Image
            src="https://www.trulia.com/images/icons/txl3/TownHouseIcon.svg"
            alt="Picture of the author"
            // className="transition-transform duration-300 ease-in-out group-hover:scale-110"
            // layout="responsive" // Adjust this based on your needs
            width={20} // Adjust width
            height={20} // Adjust height
          />&nbsp;
          you'll love&nbsp;
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" role="img" aria-label="" aria-hidden="true" class="w_24 xs:w_32 h_24 xs:h_32 svg"><path d="M16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.912-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="#d93c23"></path></svg>
          &nbsp;to live</div>
      </div>
      <div>
        <Footer />
      </div>
      <div className="py-10 px-60 text-sm">
        <p className="font-semibold">Trulia is a registered Trademark of Zillow, Inc. Zillow, Inc. holds real estate brokerage <b className="text-[#007882] underline">licenses</b> in all 50 states and D.C. and Zillow (Canada) Inc. holds real estate brokerage <b className="text-[#007882] underline">licenses</b> in multiple provinces.</p>
        <p className="font-semibold">§ 442-H New York Standard Operating Procedures</p>
        <p>New York Fair Housing Notice</p>
        <p className="underline text-[#007882]">TREC: Information about brokerage services, Consumer protection notice</p>
        <p className="underline text-[#007882]">California DRE #1522444</p>
        <p className="underline text-[#007882] font-semibold">Contact Zillow, Inc Brokerage</p>
      </div>
      <div>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 704 113"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ verticalAlign: 'bottom', width: "70vw" }}
        >
          <g fill="none" fill-rule="evenodd">
            <path fill="#F6E3D5" d="M687.244 37.378h-23.687L684.07 25.46l-4.289-7.474-20.513 11.917L671.11 9.262l-7.429-4.315-11.843 20.64V1.754h-8.578v23.834L631.418 4.947l-7.43 4.315 11.844 20.642-20.513-11.917-4.289 7.474 20.513 11.917h-23.686v8.63h23.688L611.03 57.927l4.289 7.474 20.513-11.917-11.843 20.642 7.429 4.316 11.843-20.642v23.835h8.578V57.8l11.843 20.64 7.43-4.315-11.844-20.642L679.78 65.4l4.289-7.474-20.515-11.917h23.689z"></path><path fill="#144225" d="M595.426 25.97v24.457L566.86 58.18V113h18.95V89.238h9.308V113h58.771V42.575z">
            </path>
            <path fill="#00ADBB" d="M566.859 113V76.436l-11.653-10.28-8.513 7.496-8.518-7.492-8.561 7.539-8.523-7.505-11.923 10.518v36.232l6.164.006V79.402l5.763-5.084 5.486 4.831v33.812l6.183.006V79.046l5.413-4.768 5.487 4.827v33.872l6.183.007V78.996l5.355-4.715 5.523 4.872v33.841z">
            </path>
            <path d="M689.618 64.607c-7.502 0-13.584 6.095-13.584 13.613l.015 8.97a13.603 13.603 0 0 0 10.486 12.918V113h6.167v-12.892a13.603 13.603 0 0 0 10.486-12.918l.014-8.97c0-7.518-6.081-13.613-13.584-13.613Zm-46.23 2.19.015 20.393a13.602 13.602 0 0 0 10.485 12.917V113h6.167v-12.893A13.602 13.602 0 0 0 670.54 87.19h.015V66.798c0-7.518-6.082-13.613-13.584-13.613-7.501 0-13.583 6.095-13.583 13.613Z" fill="#C3D600">
            </path><path d="M334.785 37.712h42.454V113H265.062V25.278h28.142V.823h41.581v36.89Zm-53.191 14.032h12.003V38.553h-12.003v13.191Zm12.003 27.668h12.004v-13.19h-12.004v13.19Z" fill="#CEB7FF">
            </path><path d="M234.254 65.543c7.077 0 12.814 5.977 12.814 13.35l-.014 8.796c-.146 6.181-4.317 11.32-9.892 12.668V113h-5.816v-12.643c-5.575-1.349-9.745-6.487-9.891-12.668l-.014-8.797c0-7.372 5.736-13.35 12.813-13.35Zm44.135 2.736-.014 19.738c-.146 6.101-4.316 11.173-9.89 12.504V113h-5.817v-12.48c-5.575-1.33-9.746-6.402-9.892-12.503h-.014V68.28c0-7.278 5.737-13.177 12.814-13.177 7.076 0 12.813 5.9 12.813 13.177Z" fill="#144225"></path><path d="M401.33 31.69 360.677 68.29V113h81.31V68.289L401.33 31.69Zm-24.091 65.5h8.281V80.627h-8.281V97.19Z" fill="#730731"></path><path d="M458.343 78.564h35.48v18.783h-35.48V78.564Zm-5.317-5.156V113h-5.118V68.13h44.87v5.278h-39.752Z" fill="#C3D600"></path><path d="M54.142 75.066c23.159 0 42.611 16.21 47.76 37.934h-8.08c-4.956-17.342-20.862-30.072-39.68-30.072-.696 0-1.388.018-2.075.053v-7.863c.689-.028 1.38-.052 2.075-.052Zm-2.075 23.146c.687-.053 1.38-.088 2.08-.088 10.55 0 19.679 6.087 23.953 14.876h-9.158a18.782 18.782 0 0 0-14.794-7.165c-.703 0-1.397.042-2.081.117v-7.74ZM116.86 113c-5.373-29.703-31.454-52.306-62.723-52.306-.693 0-1.383.015-2.071.038v-7.799A71.244 71.244 0 0 1 80.9 58.091c12.093-9.718 27.404-15.588 44.06-15.753v7.791a63.44 63.44 0 0 0-36.15 11.743l-.003-.002a71.907 71.907 0 0 1 12.946 9.203 48.733 48.733 0 0 1 23.207-6.24v7.802a40.99 40.99 0 0 0-17.44 4.201 71.81 71.81 0 0 1 8.826 12.257 26.298 26.298 0 0 1 8.614-1.69v7.806c-1.775.069-3.49.375-5.109.903A70.831 70.831 0 0 1 124.775 113h-7.914Z" fill="#CEB7FF"></path><path d="M136.22 41.706h-9.72V31.012h9.72v10.694Zm9.722 23.17h-9.721V54.184h9.721v10.694Zm18.152-46.34v27.407l22.571-14.034 23.79 14.792-.114.116h.1V113h-93.662V18.536h47.315Z" fill="#FF8C68"></path><path d="M.974 79.955A14.766 14.766 0 0 0 0 85.246c0 6.88 4.694 12.664 11.06 14.337v13.28h7.582v-13.28c6.365-1.672 11.06-7.457 11.06-14.337 0-1.638-.266-3.213-.758-4.686L24.91 67.623A10.441 10.441 0 0 0 14.85 60a10.442 10.442 0 0 0-10.044 7.573L.974 79.955Zm33.654 1.827a14.85 14.85 0 0 0-.362 3.265c0 6.88 4.695 12.664 11.06 14.337v13.48h7.583v-13.48c6.365-1.673 11.059-7.458 11.059-14.337 0-.946-.089-1.872-.259-2.77h.115l-4.332-22.644c-.584-5.204-5.006-9.25-10.375-9.25s-9.791 4.046-10.374 9.25l-4.115 22.149Z" fill="#730731">
            </path></g>
        </svg>
      </div>
    </main>
  );
}

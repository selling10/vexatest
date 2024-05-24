import { Statistics } from "./Statistics";
import { Linkedin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  socialNetworks: SocialNetworksProps[];
}

interface SocialNetworksProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "Namn",
    position: "Position",
    email: "namn@tianfastigheter.se",
    phone: "+1234567890",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "Namn",
    position: "Position",
    email: "namn@tianfastigheter.se",
    phone: "+1234567890",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
    ],
  },
];

export const About = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#EFE3E3] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFE3E3] py-12 px-6">
          <div className="flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col justify-between">
              <div className="pb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-black">Om oss</h2>
                <p className="text-xl mt-4 text-black">
                  Sedan vår start 2019 har vi fokuserat på förvaltning av fastigheter och sale-leaseback affärer. Vi har över fem års erfarenhet i fastighetsbranschen och vårt mål är att hjälpa företag att växa genom att frigöra kapital och minska kostnader. Genom att erbjuda skräddarsydda finansiella lösningar ger vi företag möjligheten att fokusera på sin kärnverksamhet.
                </p>
              </div>
              <Statistics />
            </div>
            <div className="flex flex-col justify-between">
              <div className="grid md:grid-cols-2 gap-8">
                {teamList.map(({ imageUrl, name, position, email, phone, socialNetworks }: TeamProps) => (
                  <Card key={name} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <CardHeader className="flex flex-col items-center pt-8 pb-4">
                      <img
                        src={imageUrl}
                        alt={`${name} ${position}`}
                        className="rounded-full w-24 h-24 object-cover mb-4"
                      />
                      <CardTitle className="text-xl font-semibold text-black">{name}</CardTitle>
                      <CardDescription className="text-black">{position}</CardDescription>
                    </CardHeader>

                    <CardContent className="text-center px-4 pb-4 text-black">
                      <p>Email: {email}</p>
                      <p>Phone: {phone}</p>
                    </CardContent>

                    <CardFooter className="flex justify-center space-x-4 pb-4">
                      {socialNetworks.map(({ name, url }: SocialNetworksProps) => (
                        <a
                          key={name}
                          rel="noreferrer noopener"
                          href={url}
                          target="_blank"
                          className={buttonVariants({
                            variant: "ghost",
                            size: "sm",
                          })}
                        >
                          <span className="sr-only">{name} icon</span>
                          {socialIcon(name)}
                        </a>
                      ))}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
